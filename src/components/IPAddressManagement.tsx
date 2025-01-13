import React, { useEffect, useState } from "react";
import NavBar from "./navBar";
import collapseIcon from "../assets/collapseIcon.svg"
import expandIcon from "../assets/expandIcon.svg"
import availableIp from "../assets/availableIP.svg"
import unavailableIp from "../assets/unavailableIP.svg"
import subnetImage from "../assets/subnetImage.svg"
import vpcImage from "../assets/vpcImage.svg"
import envImage from "../assets/envImage.svg"
import axios from "../components/services/authConfig";
import { useNavigate } from "react-router-dom";


// Define types for the data structure
interface SubnetDetail {
    interface_name: string;
    "ip_address": string;
    Subnet: string;
    Netmask: string;
    Network: string;
    "Subnet_mask": string;
    "Broadcast_address": string;
    "Hostmask": string;
    "Reverse DNS PTR Record": string;
    "allocated to private network": boolean;
    "allocated to public network": boolean;
    range_begin: string;
    range_end: string;
}

interface Subnet {
    subnet: string;
    subnet_details: SubnetDetail[];
    active_ips: any[];
    unused_ips: string[];
}

interface VPC {
    ip: string;
    vpc: {
        "VNet_Name": string;
        "Resource Group": string;
        Location: string;
        "Address Space": string[];
    };
    subnet_list: Subnet[];
}

interface Environment {
    environment: string;
    vpcs: VPC[];
}

interface Network {
    name: string;
    id: number;
}

const IPAddressManagement: React.FC = () => {
    const [data, setData] = useState<Environment[]>([]); // Store the full data
    const [expandedEnvironment, setExpandedEnvironment] = useState<number | null>(null); // Track expanded environment
    const [expandedVPC, setExpandedVPC] = useState<number | null>(null);
    const [expandedSubnet, setExpandedSubnet] = useState<{ [key: number]: number | null }>({});
    const [expandedAvailableIPs, setExpandedAvailableIPs] = useState<{ [key: string]: boolean }>({});
    const [expandedUnusedIPs, setExpandedUnusedIPs] = useState<{ [key: string]: boolean }>({});
    const [searchInput, setSearchInput] = useState(''); // Unique state for this input
    const [subnetInput, setSubnetInput] = useState(''); // For getRequiredSubnet input
    const [numberOfIPs, setNumberOfIPs] = useState(1); // Number of IPs needed
    const [requiredSubnetResult, setRequiredSubnetResult] = useState<any>(null);

    const [networks, setNetworks] = useState<Network[]>([]); // Specify type as Network[]
    const [loading, setLoading] = useState(true);
    const [environmentId, setEnvironmentId] = useState("");
    const [environmentName, setEnvironmentName] = useState("");

    const navigate = useNavigate();

    const handleIpClick = (ip: string, environment: string) => {
        // Find the environment ID from the networks constant
        const environmentDetails = networks.find(net => net.name === environment);
        const environmentId = environmentDetails ? environmentDetails.id : null;
    
        if (!environmentId) {
            console.error(`Environment ID not found for ${environment}`);
            return;
        }
    
        // Redirect to ScanServer with query parameters
        navigate("/scanServer", {
            state: {
                ipAddress: ip,
                environmentId: environmentId
            }
        });
    };


    useEffect(() => {
        axios.get(`http://10.2.0.25:8010/environments`)
        .then((response) => {
            const fetchedNetworks = response.data.environments.map((env: { id: number; name: string }) => ({
              id: env.id,
              name: env.name,
            }));
            setNetworks(fetchedNetworks); // Map the new data format to the Network array
            setLoading(false);
        })
        .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
        });
    }, []);


    const fetchSubnetDetails = async () => {
        if (searchInput) {
            try {
                console.log("Networks", networks)
                const response = await fetch(`http://10.2.0.28:5000/fetch_subnet_details`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ env_id: environmentId, environment: environmentName, ip_address: searchInput }), // Pass IP in request body
                });
                if (!response.ok) throw new Error('Network response was not ok');
                const result = await response.json();
                console.log(" FETCH DATA : ", result);
                await loadSubnetDetails();
            } catch (error) {
                console.error('Fetch error:', error);
            }
        }
    };
    
    // Load subnet details on initial page load (GET request)
    const loadSubnetDetails = async () => {
        try {
            const response = await fetch('http://10.2.0.28:5000/load_subnet_details');
            if (!response.ok) throw new Error('Network response was not ok');
            const result = await response.json();
            setData(result); // Replace responseData with the fetched data
            console.log(" LOAD DATA : ", result)
        } catch (error) {
            console.error('Load error:', error);
        }
    };
    
    // Make sure the function accepts both the IP address and the number of IPs needed
    const getRequiredSubnet = async () => {
        if (subnetInput && numberOfIPs > 0) {
            const response = await fetch(`http://10.2.0.28:5000/get_required_subnet`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ subnet: subnetInput, total_ips_needed: numberOfIPs.toString() })
            });
            const result = await response.json();
            console.log(result);
            setRequiredSubnetResult(result.subnet_details[0]); // Store result for display under calculator
            console.log("RESULT : ", result)
            console.log("SAVED : ", requiredSubnetResult)
        }
    };

    useEffect(() => {
        loadSubnetDetails(); // Trigger load on initial render
    }, []);

    const toggleEnvironment = (index: number) => {
        setExpandedEnvironment(expandedEnvironment === index ? null : index);
    };

    const toggleVPC = (_ : any, vpcIndex: number) => {
        setExpandedVPC(expandedVPC === vpcIndex ? null : vpcIndex);
    };
      
    const toggleSubnet = (vpcIndex: number, subnetIndex: number) => {
        setExpandedSubnet((prev) => ({
            ...prev,
            [vpcIndex]: prev[vpcIndex] === subnetIndex ? null : subnetIndex,
        }));
    };

    const toggleAvailableIPs = (vpcIndex: number, subnetIndex: number) => {
        const key = `${vpcIndex}-${subnetIndex}`;
        setExpandedAvailableIPs(prev => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const toggleUnusedIPs = (vpcIndex: number, subnetIndex: number) => {
        const key = `${vpcIndex}-${subnetIndex}`;
        setExpandedUnusedIPs(prev => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const [tooltipData, setTooltipData] = useState<{ [key: string]: string | string[] } | null>(null);
    const [tooltipIndex, setTooltipIndex] = useState<number | null>(null);

    const showTooltip = (index: number, data: { [key: string]: string | string[] }) => {
        setTooltipData(data);
        setTooltipIndex(index);
    };

    const hideTooltip = () => {
        setTooltipIndex(null);
        setTooltipData(null);
    };

    const [subnetTooltipVisible, setSubnetTooltipVisible] = useState<boolean>(false);
    const [subnetTooltipData, setSubnetTooltipData] = useState<SubnetDetail | null>(null);
    const [subnetTooltipIndex, setSubnetTooltipIndex] = useState<{ vpcIndex: number; subnetIndex: number } | null>(null);

    const showSubnetTooltip = (vpcIndex: number, subnetDetail: SubnetDetail, subnetIndex: number) => {
        // Update the tooltip data for the specific subnet
        setSubnetTooltipData(subnetDetail);
        setSubnetTooltipIndex({ vpcIndex, subnetIndex });
        setSubnetTooltipVisible(true);
    };
    
    const hideSubnetTooltip = (vpcIndex: number, subnetIndex: number) => {
        // Optionally check if the current tooltip matches the subnet being hovered over
        if (subnetTooltipIndex?.vpcIndex === vpcIndex && subnetTooltipIndex?.subnetIndex === subnetIndex) {
            setSubnetTooltipVisible(false);
            setSubnetTooltipData(null);
            setSubnetTooltipIndex(null);
        }
    };

    const [subnetDetails, setSubnetsubnetDetails] = useState<boolean>(false);
    const [subnetDetailsData, setSubnetDetailsData] = useState<SubnetDetail | null>(null);
    const [subnetDetailsDataIndex, setSubnetDetailsDataIndex] = useState<{ vpcIndex: number; subnetIndex: number } | null>(null);

    const showSubnetDetails = (vpcIndex: number, subnetDetail: SubnetDetail) => {
        setSubnetDetailsData(subnetDetail);
        setSubnetDetailsDataIndex({ vpcIndex, subnetIndex: 0 }); // Adjust subnetIndex as needed
        setSubnetsubnetDetails(!subnetDetails);
    };

    // const hideSubnetDetails = () => {
    //     setSubnetsubnetDetails(false);
    //     setSubnetDetailsData(null);
    //     setSubnetDetailsDataIndex(null);
    // };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value); // Only updates `searchInput` state
    };

    // Update for getRequiredSubnet input
    const handleSubnetInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSubnetInput(event.target.value);
    };

    const handleCalculate = () => {
        getRequiredSubnet();
    };

    return (
        <div className="w-screen h-[auto] flex flex-col" style={{ overflowX: "hidden" }}>
            <NavBar />
            <div className="flex flex-1 h-[90vh]" style={{ minHeight: "90vh" }}>
                {/* Left Section */}
                <div className="flex-1 bg-[#F2F7F8] p-10" style={{ marginRight: '8px' }}>
                    <h2 className="text-[#006E74] text-xl font-semibold">Subnet Tree</h2>

                    {/* Search Bar */}
                    <div className="flex items-center mt-4 w-[30vw] gap-[2vh]">
                        <select
                        className="flex-1 border border-[#006E74] rounded-[10px] h-[6vh] p-2 focus:outline-none"
                        value={environmentId}
                        onChange={(e) => {
                            const selectedEnvId = e.target.value;
                            const selectedEnvName = networks.find(network => network.id === Number(selectedEnvId))?.name || "";
                            
                            setEnvironmentId(selectedEnvId);
                            setEnvironmentName(selectedEnvName); // Assuming you have a state to track the environment name
                        }}
                        >
                            <option value="">Select Environment</option>
                            {loading ? (
                                <option disabled>Loading...</option>
                            ) : (
                                networks.map((network) => (
                                <option key={network.id} value={network.id}>
                                    {network.name}
                                </option>
                                ))
                            )}
                        </select>
                        <input
                            type="text"
                            className="flex-1 border border-[#006E74] rounded-[10px] h-[6vh] p-2 focus:outline-none"
                            placeholder="Search Here..."
                            value={searchInput}
                            onChange={handleSearchChange}
                        />
                        <button className="bg-[#2FA1A7] border border-[#006e74] text-white rounded-[10px] px-4 py-2 h-[6vh] flex items-center ml-2">
                            <span onClick={fetchSubnetDetails} className="material-icons">search</span> {/* Use an icon library or SVG */}
                        </button>
                    </div>

                    <div className="mt-4">
                        {data.map((environment, envIndex) => (
                            <div key={envIndex}>
                                <div
                                className="flex gap-[4px] items-center cursor-pointer"
                                onClick={() => toggleEnvironment(envIndex)}
                                >
                                    <span className="material-icons">
                                        {expandedEnvironment === envIndex ? <img src={expandIcon}></img> : <img src={collapseIcon}></img>}
                                    </span>
                                    <img src={envImage}></img>
                                    <span>{environment.environment}</span>
                                </div>

                                {expandedEnvironment === envIndex && (
                                    <div className="pl-4 mt-2">
                                        {/* VPC List */}
                                        {environment.vpcs.map((vpc, vpcIndex) => (
                                            <div key={vpcIndex}>
                                                <div
                                                className="flex gap-[4px] items-center cursor-pointer"
                                                onClick={() => toggleVPC(envIndex, vpcIndex)}
                                                onMouseEnter={() => showTooltip(vpcIndex, vpc.vpc)}
                                                onMouseLeave={hideTooltip}
                                                >
                                                    <span className="material-icons">
                                                        {expandedVPC === vpcIndex ? <img src={expandIcon}></img> : <img src={collapseIcon}></img>}
                                                    </span>
                                                    <img src={vpcImage}></img>
                                                    <span>{vpc.vpc["VNet_Name"]}</span>
                                                </div>

                                                {tooltipIndex === vpcIndex && tooltipData && (
                                                    <div className="relative z-10">
                                                        <div className="absolute w-[30vw] h-[18vh] bg-[#006e74] border border-gray-300 ml-[16vh]">
                                                            <div className="w-full h-full bg-white p-4">
                                                                <p><strong>Resource Group:</strong> {tooltipData["Resource_Group"]}</p>
                                                                <p><strong>Location:</strong> {tooltipData.Location}</p>
                                                                <p><strong>Address Space:</strong> {tooltipData["Address_Space"]}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                        
                                                {expandedVPC === vpcIndex && (
                                                    <div className="pl-4 mt-2 rounded">
                                                        {/* Subnet List */}
                                                        {vpc.subnet_list.map((subnet, subnetIndex) => (
                                                            <div key={subnetIndex}>
                                                                <div className="flex gap-[3px] items-center mt-2 cursor-pointer ml-[6vh]">
                                                                    <span className="material-icons" onClick={() => toggleSubnet(vpcIndex, subnetIndex)}>
                                                                        {expandedSubnet[vpcIndex] === subnetIndex ? <img src={expandIcon}></img> : <img src={collapseIcon}></img>}
                                                                    </span>
                                                                    <img 
                                                                        src={subnetImage} 
                                                                        onClick={() => showSubnetDetails(vpcIndex, subnet.subnet_details[0])}
                                                                        style={{ cursor: 'pointer' }} 
                                                                    />
                                                                    <span 
                                                                        onClick={() => showSubnetDetails(vpcIndex, subnet.subnet_details[0])}
                                                                        onMouseEnter={() => showSubnetTooltip(vpcIndex, subnet.subnet_details[subnetIndex], subnetIndex)}  // Pass subnetIndex
                                                                        onMouseLeave={() => hideSubnetTooltip(vpcIndex, subnetIndex)}  // Pass subnetIndex to hide tooltip for this specific subnet
                                                                    >
                                                                        {subnet.subnet}
                                                                    </span>
                                                                </div>

                                                                {subnetTooltipVisible && subnetTooltipData && subnetTooltipIndex?.vpcIndex === vpcIndex && (
                                                                    <div className="absolute w-[30vw] h-[30vh] bg-[#006e74] border border-gray-300 ml-[20vh]">
                                                                        <div className="w-full h-full bg-white p-4">
                                                                            <p><strong>Interface Name:</strong> {subnetTooltipData.interface_name}</p>
                                                                            <p><strong>IP Address:</strong> {subnetTooltipData["ip_address"]}</p>
                                                                            <p><strong>Subnet:</strong> {subnetTooltipData.Subnet}</p>
                                                                            <p><strong>Netmask:</strong> {subnetTooltipData.Netmask}</p>
                                                                            <p><strong>Broadcast Address:</strong> {subnetTooltipData["Broadcast_address"]}</p>
                                                                            <p><strong>Range:</strong> {subnetTooltipData.range_begin} - {subnetTooltipData.range_end}</p>
                                                                        </div>
                                                                    </div>
                                                                )}

                                                                {subnetDetails && subnetDetailsData && subnetDetailsDataIndex?.vpcIndex === vpcIndex && (
                                                                    <div className="absolute w-[30vw] h-[84vh] bg-[#006e74] border border-gray-300 ml-[40vh] top-[13vh]">
                                                                        <div className="w-full h-full bg-white p-4">
                                                                            <p><strong>Name:</strong> {subnetDetailsData.interface_name}</p>
                                                                            <p><strong>Interface Name:</strong> {subnetDetailsData.interface_name}</p>
                                                                            <p><strong>IP Address:</strong> {subnetDetailsData["ip_address"]}</p>
                                                                            <p><strong>Subnet:</strong> {subnetDetailsData.Subnet}</p>
                                                                            <p><strong>Netmask:</strong> {subnetDetailsData.Netmask}</p>
                                                                            <p><strong>Network:</strong> {subnetDetailsData.Netmask}</p>
                                                                            <p><strong>Subnet Mask:</strong> {subnetDetailsData["Subnet_mask"]}</p>
                                                                            <p><strong>Broadcast Address:</strong> {subnetDetailsData["Broadcast_address"]}</p>

                                                                            <p><strong>Hostmask:</strong> {subnetDetailsData.Subnet}</p>
                                                                            <p><strong>Reverse DNS PTR Record:</strong> {subnetDetailsData.Netmask}</p>
                                                                            <p><strong>Reserved for multicast:</strong> {subnetDetailsData.Netmask}</p>
                                                                            <p><strong>Allocated to private network:</strong> {subnetDetailsData.Netmask}</p>
                                                                            <p><strong>Allocated to public network:</strong> {subnetDetailsData["Broadcast_address"]}</p>

                                                                            <p><strong>Anspecified:</strong> {subnetDetailsData.Subnet}</p>
                                                                            <p><strong>IETF reserved:</strong> {subnetDetailsData.Netmask}</p>
                                                                            <p><strong>Address loopback:</strong> {subnetDetailsData.Netmask}</p>
                                                                            <p><strong>Allocated to private network:</strong> {subnetDetailsData.Netmask}</p>
                                                                            <p><strong>Allocated to public network:</strong> {subnetDetailsData["Broadcast_address"]}</p>

                                                                            <p><strong>Range:</strong> {subnetDetailsData.range_begin} - {subnetDetailsData.range_end}</p>
                                                                        </div>
                                                                    </div>
                                                                )}

                                                                {expandedSubnet[vpcIndex] === subnetIndex && (
                                                                    <div className="pl-4 mt-2">
                                                                        <div className="ml-[6vh]">
                                                                            <h4 className="mt-2 flex items-center">
                                                                                <span
                                                                                    className="material-icons cursor-pointer ml-2"
                                                                                    onClick={() => toggleAvailableIPs(vpcIndex, subnetIndex)}
                                                                                >
                                                                                    {expandedAvailableIPs[`${vpcIndex}-${subnetIndex}`] ? <img src={expandIcon}></img> : <img src={collapseIcon}></img>}
                                                                                </span>
                                                                                Active IPs
                                                                            </h4>
                                                                            <ul className="ml-[6vh]">
                                                                                {subnet.active_ips.map((ip, ipIndex) => (
                                                                                    <li
                                                                                        key={ipIndex}
                                                                                        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                                                                                        onClick={() => handleIpClick(ip.ip, environment.environment)}
                                                                                    >
                                                                                        <img src={availableIp} alt="Available IP" />
                                                                                        {ip.ip}
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                            <h4 className="mt-2 flex items-center">
                                                                                <span
                                                                                    className="material-icons cursor-pointer ml-2"
                                                                                    onClick={() => toggleUnusedIPs(vpcIndex, subnetIndex)}
                                                                                >
                                                                                    {expandedUnusedIPs[`${vpcIndex}-${subnetIndex}`] ? <img src={expandIcon}></img> : <img src={collapseIcon}></img>}
                                                                                </span>
                                                                                Unused IPs
                                                                            </h4>
                                                                            {expandedUnusedIPs[`${vpcIndex}-${subnetIndex}`] ? (
                                                                                <ul className="ml-[6vh]">
                                                                                    {subnet.unused_ips.map((ip, ipIndex) => (
                                                                                        <li 
                                                                                            key={ipIndex} 
                                                                                            style={{ display: 'flex', alignItems: 'center' }} 
                                                                                        >
                                                                                            <img src={unavailableIp} alt="Unavailable IP" />
                                                                                            {ip}
                                                                                        </li>
                                                                                    ))}
                                                                                </ul>
                                                                            ) : (
                                                                                <>
                                                                                    <ul className="ml-[6vh]">
                                                                                        {subnet.unused_ips.slice(0, 5).map((ip, ipIndex) => (
                                                                                            <li key={ipIndex} style={{ display: 'flex', alignItems: 'center' }}>
                                                                                                <img src={unavailableIp} alt="Unavailable IP" />
                                                                                                {ip}
                                                                                            </li>
                                                                                        ))}
                                                                                    </ul>
                                                                                    {subnet.unused_ips.length > 5 && (
                                                                                        <button className="ml-[6vh] text-[#2FA1A7]" onClick={() => toggleUnusedIPs(vpcIndex, subnetIndex)}>
                                                                                            Show More..
                                                                                        </button>
                                                                                    )}
                                                                                </>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                {/* Right Section */}
                <div className="flex-1 bg-[#F2F7F8] p-10">
                    <h2 className="text-[#006E74] text-xl font-semibold">Subnet Calculator</h2>
                    <div className="flex  flex-col mt-4 w-[43vw] gap-[1vh] items-end">
                        <div className="flex gap-[2vh]">
                            <input
                                type="text"
                                className="flex-1 border border-[#006E74] rounded-[10px] w-[21vw] h-[6vh] p-2 focus:outline-none"
                                placeholder="Enter Subnet Range..."
                                value={subnetInput}
                                onChange={handleSubnetInputChange}
                            />
                            <input
                                type="number"
                                className="flex-1 border border-[#006E74] rounded-[10px] w-[10vw] h-[6vh] p-2 focus:outline-none"
                                placeholder="Number of IPs..."
                                value={numberOfIPs}
                                onChange={(e) => setNumberOfIPs(parseInt(e.target.value, 10))}
                                min="1"
                            />

                            <button
                                className="bg-[#2FA1A7] border border-[#006e74] text-white rounded-[10px] h-[6vh] px-4 py-2 flex items-center"
                                onClick={handleCalculate} // Call getRequiredSubnet on button click
                            >
                                Calculate
                            </button>
                        </div>
                        {requiredSubnetResult && (
                        <div className="mt-4 bg-white p-4 rounded w-full shadow">
                            <h3 className="font-semibold">Calculated Subnet Details</h3>
                            <p className="flex w-[50vh] justify-between"><strong>Broadcast Address:</strong> {requiredSubnetResult["Broadcast_address"]}</p>
                            <p className="flex w-[50vh] justify-between"><strong>Hostmask:</strong> {requiredSubnetResult.Hostmask}</p>
                            <p className="flex w-[50vh] justify-between"><strong>Netmask:</strong> {requiredSubnetResult.Netmask}</p>
                            <p className="flex w-[50vh] justify-between"><strong>Network:</strong> {requiredSubnetResult.Network}</p>
                            <p className="flex w-[50vh] justify-between"><strong>Subnet Mask:</strong> {requiredSubnetResult["Subnet_mask"]}</p>
                            <p className="flex w-[50vh] justify-between"><strong>Range Begin:</strong> {requiredSubnetResult.range_begin}</p>
                            <p className="flex w-[50vh] justify-between"><strong>Range End:</strong> {requiredSubnetResult.range_end}</p>
                            <p className="flex w-[50vh] justify-between"><strong>Subnet:</strong> {requiredSubnetResult.subnet}</p>
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IPAddressManagement;