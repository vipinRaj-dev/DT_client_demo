import React, { useEffect, useRef, useState } from "react";
import NavBar from "./navBar";
// import Breadcrumbs from "./breadCrumbs";
import {  useNavigate } from "react-router-dom";
import config from "../config";
import Pagination from "./Pagination";
// import { useDashboard } from "./dasboardContext";
import "./CustomCss/scanResult.css";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";
import axios from '../components/services/authConfig'; // Import the axios instance
import SearchIcon from "../assets/searchIcon.svg";
// Define interface for the data structure
interface Network {
    env_name: string;
    pk_id: number;
  }
export default function ScanHistory() {
    const [iploading, setipLoading] = useState(true);
    const [scanData, setScanData] = useState<any[]>([]);
    const [totalItems, setTotalItems] = useState(0); // Add state for total items
    // const location = useLocation();
    // const navigate = useNavigate();
    // const { scanResult, setScanResult } = useDashboard();
    // const [progress, setProgress] = useState(0);
    const loadingBar = useRef<LoadingBarRef>(null);
    // const [searchInput, setSearchInput] = useState("");

    const [networks, setNetworks] = useState<Network[]>([]); // Specify type as Network[]
    const [loading, setLoading] = useState(true);
    const [ipAddress, setIpAddress] = useState("");
    const [environmentId, setEnvironmentId] = useState("");
    const navigate = useNavigate();
  
    useEffect(() => {
      axios.get(`${config.API_BASE_URL}/environments`)
        .then((response: { data: { data: React.SetStateAction<Network[]>; }; }) => {
          setNetworks(response.data.data); // Assuming response.data.data is correctly structured as an array of Network objects
          setipLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setipLoading(false);
        });
    }, []);
  
    // const navigateToHistory = async () => {
    //   navigate("/scanHistory")
    // }
  
    const scanIP = async () => {
      if (!ipAddress || !environmentId) {
        alert("Please enter IP address and select environment");
        return;
      }
  
      setipLoading(true);
      try {
        // Constructing data to send to the backend
        const resultJSON = {
          [environmentId]: { ip_query: [ipAddress] },
        };
  
        // Send data to the backend via POST
        const response = await axios.post(`${config.API_BASE_URL}/scan/basic-scan`, resultJSON);
  
        // const response = await fetch(`${config.API_BASE_URL}/scan/basic-scan`, {
        //   method: "POST",
        //   mode: "cors",
        //   body: JSON.stringify(resultJSON),
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // });
  
        if (response.data.status !== true) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        // const responseData = await response.json();
  
        // Check if the response is true
        if (response.data.status === true) {
          navigate("/scanResult", {
            state: { resultJSON },
          });
        } else {
          console.error("First API request returned false status.");
          setipLoading(false);
        }
      } catch (error) {
        console.error("Error during API requests:", error);
        setipLoading(false);
      }
    };
  


    // const breadcrumbItems = [
    //     { label: "Scan", url: "/scanServer" },
    //     { label: "Scan History", url: "/scanHistory" },
    // ];

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

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

    const fetchScanStatus = async (pageNumber: number, itemsPerPage: number) => {
        try {
            startProgress();
            const response = await axios.post(`${config.API_BASE_URL}/historical_data`, {
                page: pageNumber,
                per_page: itemsPerPage,
            });

            if (response.status === 200) {
                const data = response.data.data;
                const totalCount = response.data.total; // Get total count
                console.log("API Response Data:", data);
                setScanData(data); // Update scanData state
                setTotalItems(totalCount); // Update total items state
            } else {
                console.error(`API request failed! Status: ${response.status}`);
            }
        } catch (error) {
            console.error("Error fetching scan status:", error);
        } finally {
            completeProgress();
            setLoading(false); // Ensure loading is set to false
        }
    };

    useEffect(() => {
        fetchScanStatus(currentPage, itemsPerPage);
    }, [currentPage, itemsPerPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleItemsPerPageChange = (newItemsPerPage: number) => {
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(1);
    };

    const handleRowClick = async (data: any) => {
        console.log(data);

        const idFromHistory = {
            id: data?.id
        };

        if (idFromHistory) {
            navigate("/dashboard", { state: { idFromHistory: idFromHistory } });
        } else {
            console.error("First API request returned false status.");
        }
    };

    return (
        <div className="w-screen h-screen flex flex-col" style={{ overflowX: "hidden" }}>
            <NavBar />
            <LoadingBar
                ref={loadingBar}
                shadow={true}
                height={3}
                color="#29D"
            />
            <div className="bg-white-100 p-4 ml-4" style={{ height: "90vh" }}>
                {/* <Breadcrumbs items={breadcrumbItems} /> */}

                <div className="flex flex-col items-center" style={{ zIndex: '10' }}>
                    <h2 className="text-2xl text-[#006e74] mb-2 scanIPText">
                        Scan your servers
                    </h2>
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-2 flex items-center">
                                <img
                                    src={SearchIcon}
                                    alt="Search Icon"
                                    className="h-5 w-5 text-gray-500"
                                />
                            </span>
                            <input
                                type="text"
                                className="w-160 pl-8 border border-gray-300 p-2 rounded outline-none"
                                style={{ width: "560px", height: "37px" }}
                                placeholder="Enter IPs or IP range..."
                                value={ipAddress}
                                onChange={(e) => setIpAddress(e.target.value)}
                            />
                        </div>
                        <select
                            className="border border-gray-300 p-2 rounded outline-none"
                            value={environmentId}
                            onChange={(e) => setEnvironmentId(e.target.value)}
                        >
                            <option value="">Select Environment</option>
                            {iploading ? (
                                <option disabled>Loading...</option>
                            ) : (
                                networks.map((network) => (
                                    <option key={network.pk_id} value={network.pk_id}>
                                        {network.env_name}
                                    </option>
                                ))
                            )}
                        </select>
                        <button
                            className="bg-gray-300 text-teal-600 px-4 py-2 rounded"
                            style={{
                                height: "37px",
                                background: "#F2F7F8",
                            }}
                            onClick={scanIP}
                        >
                            Scan
                        </button>
                    </div>
                </div>
                
                <div style={{ marginLeft: "3vh" }}>
                    <h4 className="text-teal-600 text-xl mb-4">Scan History</h4>
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                <thead style={{ backgroundColor: "#F2F7F8", color: "#003C51" }}>
                                    <tr>
                                        <th className="text-left">IP Address</th>
                                        <th className="text-left">Environment</th>
                                        <th className="text-left">Scanned Timestamp</th>
                                        <th className="text-left">Device OS</th>
                                        <th className="text-left">Device Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading ? (
                                        <>
                                            {Array.from({ length: itemsPerPage }).map((_, index) => (
                                                <tr className="animate-pulse" key={index}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="h-4 bg-gray-200 rounded w-2/4"></div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="h-4 bg-gray-200 rounded w-2/4"></div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </>
                                    ) : (
                                        scanData.map((data, index) => (
                                            <tr
                                                key={index}
                                                onClick={() => handleRowClick(data)}
                                                style={{ cursor: "pointer" }}
                                                className="tableRowstyle"
                                            >
                                                <td className="text-left border-b">
                                                    {data.server_ip}
                                                </td>
                                                <td className="text-left border-b">
                                                    {data.network_name}
                                                </td>
                                                <td className="text-left border-b">
                                                    {data.timestamp}
                                                </td>
                                                <td className="text-left border-b">
                                                    {data.server_os}
                                                </td>
                                                <td className="text-left border-b">{data.machine_type}</td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>

                            {/* Pagination */}
                            <Pagination
                                totalItems={totalItems} // Pass the total items count
                                itemsPerPage={itemsPerPage}
                                currentPage={currentPage}
                                onPageChange={handlePageChange}
                                onItemsPerPageChange={handleItemsPerPageChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
