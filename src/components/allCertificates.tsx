import  { useEffect, useRef, useState } from "react";
import "./CustomCss/sslCertificate.css";
import Navbar from "./navBar";
import config from "../config";
import Pagination from "./Pagination";
import axios from './services/authConfig';
import disclaimerIcon from '../assets/disclaimerIcon.png'
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";

interface Environment {
    env_name: string;
    pk_id: number;
}

export default function AllCertificatePage() {
    const [showPopup, setShowPopup] = useState(false);
    const [environment, setEnvironment] = useState<Environment[]>([]);
    const [ipAddress, setIpAddress] = useState("");
    const [environmentId, setEnvironmentId] = useState("");
    // const [loading, setLoading] = useState(true);
    const [IPloading, setIPLoading] = useState(true);
    const [schedulerData, setSchedulerData] = useState<any>([]);
    const [expandedIPs, setExpandedIPs] = useState<{ [key: string]: boolean }>({});
    // const [addedIPs, setAddedIPs] = useState<string[]>([]);
    const [ipError, setIpError] = useState("");
    const [addedIPs, setAddedIPs] = useState<{ ip: string; environment: string, port: string }[]>([]);
    // const fetchEnvironmentData = async () => {
    //     try {
    //         const response = await axios.get(`${config.API_BASE_URL}/environments`);
    //         const data = await response.data;
    //         console.log(data);
    //         setEnvironment(data.data); 
    //         setIPLoading(false);
    //     } catch (error) {
    //         console.error("Error fetching data:", error);
    //     }
    // };

    const formatDate = (dateString: any) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    useEffect(() => {
        let isMounted = true;  // Add the isMounted flag

        const fetchEnvironmentData = async () => {
            try {
                const response = await axios.get(`${config.API_BASE_URL}/environments`);
                const data = await response.data;
                if (isMounted) {  // Only update state if component is still mounted
                    setEnvironment(data.data);
                    setIPLoading(false);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        const fetchSSLHistory = async () => {
            // Clear schedulerData and addedIPs before fetching new data
            if (isMounted) {
                setSchedulerData({});
                setAddedIPs([]);
            }

            try {
                const response = await axios.get(`${config.API_BASE_URL}/get_cert_history`);
                const data = await response.data;


                if (isMounted) {

                    data?.history?.forEach((element: any) => {
                        const ip = element?.ip;
                        const environmentName = element?.environment?.env_name; // Adjust this line based on your actual data structure
                        const port = element?.environment?.api_port;
                        setAddedIPs((prev) => [...prev, { ip, environment: environmentName, port: port }]); // Add IP and environment to the list
                        console.log(addedIPs)
                        // setAddedIPs((prev) => [...prev, element?.ip]); // Add IP to the list
                        // setAddedIPs((prev) => [...prev, { element?.ip, environment: environmentName }]); // Add IP and environment to the list
                        const serverInfo = element?.latest_certificate;


                        setSchedulerData((prev: any) => ({
                            ...prev,
                            [element?.ip]: serverInfo,
                        }));



                    });
                    // Iterate over each item in the payload
                    // data.data.forEach((item: { certificate: any, host: string }) => {
                    //     const host = item.host;
                    //     console.log(item.certificate)
                    //     // Add the host to the list of added IPs if not already added
                    //     setAddedIPs((prev) => [...prev, host]);
                    //     // Update the schedulerData state for each host
                    //     setSchedulerData((prev) => ({
                    //         ...prev,
                    //         [host]: prev[host] ? [...prev[host], item.certificate] : [item.certificate]
                    //     }));




                    // });
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchEnvironmentData();
        fetchSSLHistory();

        return () => {
            isMounted = false;  // Cleanup: set the flag to false when the component unmounts
        };
    }, []);

    const handleAddIPClick = () => {
        // fetchEnvironmentData();
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setEnvironment([]);
        setIpAddress("");
    };

    const handleSave = async () => {
        // if (addedIPs.includes(ipAddress)) {
        //     setIpError("IP address already exists.");
        //     return;
        // }
        // setLoading(true);
        startProgress();
        setShowPopup(false);


        let resultJSON = {
            network_id: environmentId,
            remote_ip: [ipAddress],
        };


        resultJSON.remote_ip = resultJSON.remote_ip[0].split(',');

        console.log(resultJSON);

        // let resultJSON = {
        //     "network_id": "2",
        //     "remote_ip": ["10.2.1.5", "10.6.0.11"]
        // }

        const response = await axios.post(`${config.API_BASE_URL}/get_all_cert`, resultJSON);
        setShowPopup(false);
        setIpAddress(" ");
        setEnvironmentId(" ");

        const data = await response.data;


        if (response.status !== 200) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        } else {
            completeProgress();

            setShowPopup(false);

            console.log(data, data.environment)

            const environmentName = data?.environment?.env_name;

            const port = data?.environment?.api_port;



            Object.keys(data.result).forEach((ip) => {
                setAddedIPs((prev) => [...prev, { ip, environment: environmentName, port: port }]); // Add IP and environment to the list
                const serverInfo = data.result[ip];
                setSchedulerData((prev: any) => ({
                    ...prev,
                    [ip]: serverInfo,
                }));

            });
            // setLoading(false); // End loading

        }
    };

    const toggleContentVisibility = (ip: string) => {
        setExpandedIPs((prev) => ({
            ...prev,
            [ip]: !prev[ip],
        }));
    };

    // State for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(20); // Default items per page

    // Calculate pagination
    // const indexOfLastItem = currentPage * itemsPerPage;
    // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // const currentItems = Object.keys(schedulerData).slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    // Change items per page
    const handleItemsPerPageChange = (newItemsPerPage: number) => {
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(1); // Reset to first page when changing items per page
    };


    // const [progress, setProgress] = useState(0);
    const loadingBar = useRef<LoadingBarRef>(null);

    const startProgress = () => {
        if (loadingBar.current) {
            loadingBar.current.continuousStart();
        }
    };

    const completeProgress = () => {
        // setProgress(100);
        if (loadingBar.current) {
            loadingBar.current.complete();
        }
    };

    return (
        <div style={{ overflowX: "hidden" }}>
            <Navbar />
            <LoadingBar
                ref={loadingBar}
                shadow={true}
                height={3}
                color="#29D"
            />
            <div className="SslBody">
                <div>
                    <div className="sslTopHeading">
                        <div className="HeadingFull">
                            <div className="HeadingText" style={{ color: "#006e74" }}>
                                All Certificates
                            </div>
                            <div className="SubHeadingText">
                                Find all Certificates present in the Server
                            </div>
                        </div>
                        <button onClick={handleAddIPClick} className="sslAddButton">
                            Add IP
                        </button>
                    </div>
                </div>



                {
                    addedIPs.length === 0 ? (
                        <>
                            <div className="noIPMessage">
                                <div className="text-center">
                                    <img
                                        src={disclaimerIcon}
                                        alt="Description of the image"
                                        className="mx-auto mb-4 h-[50px] w-[50px]"
                                    />
                                    <p className="text-xl">No IPs added. Please add an IP to view SSL Certificates.</p>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            {addedIPs.map((ip, index) => (
                                <div className="addedIPContainer" key={index} onClick={() => toggleContentVisibility(ip.ip)}>
                                    <div className="ipListDiv">
                                        <div style={{ color: "#006E74" }}>
                                            <div style={{
                                                display: "inline-block",
                                                backgroundColor: "teal",
                                                color: "white",
                                                borderRadius: "5px",
                                                padding: "0px 10px",
                                                margin: "5px 0",
                                                minWidth: "88px"
                                            }}>
                                                <h2 style={{ margin: 0 }}>
                                                    {ip.ip}
                                                </h2>
                                            </div>
                                            <span style={{ marginLeft: "10px" }}>
                                                <span style={{ marginLeft: "3px", fontSize: "13px" }}>
                                                    {ip.environment}
                                                </span>
                                                {/* <span style={{ marginLeft: "3px", fontSize: "13px", marginRight: "3px" }}>
                                                    {ip.port}
                                                </span> */}
                                            </span>
                                            {/* </div> */}


                                        </div>
                                        <button
                                            // onClick={() => toggleContentVisibility(ip.ip)}
                                            style={{
                                                color: "#006E74",
                                                background: "none",
                                                border: "none",
                                                cursor: "pointer",
                                            }}
                                        >
                                            {expandedIPs[ip.ip] ? "-" : "+"}
                                        </button>
                                    </div>
                                    {/* {loading ? (
                                        <></>
                                        // <SkeletonLoader /><>
                                    ) : (
                                    <> */}
                                    {expandedIPs[ip.ip] && (
                                        <div style={{ padding: "10px" }}>

                                            <div className="sslTableContainer">
                                                <table className="table w-96vw">
                                                    <thead
                                                        className="sticky top-0 bg-gray-100 text-gray-800"
                                                        style={{ backgroundColor: "#F2F7F8", color: "#003C51" }}
                                                    >
                                                        <tr>
                                                            <th className="text-left">Certificate Name</th>
                                                            <th className="text-left">Issuer</th>
                                                            <th className="text-left">Issued Date</th>
                                                            <th className="text-left">Serial Number</th>
                                                            <th className="text-left">Expiry Date</th>
                                                            <th className="text-left">Expiry Status</th>
                                                            <th className="text-left">Country Name</th>
                                                            <th className="text-left">Organization Name</th>
                                                            <th className="text-left">Organizational Unit Name</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {schedulerData[ip.ip]?.length === 0 ? (
                                                            <tr>
                                                                <td colSpan={9} className="text-center py-4">
                                                                    No data available for this IP.
                                                                </td>
                                                            </tr>
                                                        ) : (
                                                            schedulerData[ip.ip].map((data: any, index: any) => {
                                                                // Determine the class to apply based on the ExpiryStatus
                                                                let expiryClass = "";
                                                                if (data?.ExpiryStatus?.startsWith("Already expired by")) {
                                                                    expiryClass = "expired";
                                                                } else if (data?.ExpiryStatus?.includes("will be Expired")) {
                                                                    expiryClass = "will-expire";
                                                                }

                                                                return (
                                                                    <tr key={index}>
                                                                        <td className="text-left border-b">{data.CertificateName}</td>
                                                                        <td className="text-left border-b">{data.Issuer}</td>
                                                                        <td className="text-left border-b">
                                                                            {formatDate(data.IssuedDate)}
                                                                        </td>
                                                                        <td className="text-left border-b">{data.SerialNumber}</td>
                                                                        <td className="text-left border-b">
                                                                            {formatDate(data.ExpiryDate)}
                                                                        </td>
                                                                        <td className={`text-left border-b ${expiryClass}`}>{data.ExpiryStatus}</td>
                                                                        <td className="text-left border-b">{data.CountryName}</td>
                                                                        <td className="text-left border-b">{data.OrganizationName}</td>
                                                                        <td className="text-left border-b">
                                                                            {data.OrganizationalUnitName}
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            })
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>


                                            <Pagination
                                                totalItems={schedulerData[ip.ip]?.length || 0}
                                                itemsPerPage={itemsPerPage}
                                                currentPage={currentPage}
                                                onPageChange={handlePageChange}
                                                onItemsPerPageChange={handleItemsPerPageChange}
                                            />
                                        </div>
                                    )}
                                    {/* </>)} */}

                                </div>
                            ))}
                        </>
                    )
                }

            </div>

            {/* popup changes */}
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                        <h2 className="text-lg font-bold mb-4">Fetch All Certificate</h2>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1" htmlFor="environment">
                                Environment
                            </label>
                            <select
                                className="border border-gray-300 p-2 rounded select select-bordered w-full"
                                style={{ outline: "none" }}
                                value={environmentId}
                                onChange={(e) => setEnvironmentId(e.target.value)}
                            >
                                <option value="">Select Environment</option>
                                {IPloading ? (
                                    <option disabled>Loading...</option>
                                ) : (
                                    environment.map((env) => (
                                        <option key={env.pk_id} value={env.pk_id}>
                                            {env.env_name}
                                        </option>
                                    ))
                                )}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1" htmlFor="ipAddress">
                                IP Address
                            </label>
                            <input
                                type="text"
                                id="ipAddress"
                                className="input input-bordered w-full"
                                value={ipAddress}
                                onChange={(e) => {
                                    setIpAddress(e.target.value);
                                    setIpError(""); // Clear the error message when the input changes
                                }}
                                style={{ outline: "none" }}
                            />
                            {ipError && <p className="text-red-500 text-sm mt-2">{ipError}</p>}
                        </div>
                        <div className="flex justify-end" style={{ gap: "15px" }}>
                            <button onClick={handleClosePopup} className="sslButton" style={{ width: "20%" }}>
                                Cancel
                            </button>
                            <button onClick={handleSave} className="sslButton" style={{ width: "40%" }}>
                                Fetch All Certificate
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
