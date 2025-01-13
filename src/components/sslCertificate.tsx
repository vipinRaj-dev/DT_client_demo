import { useEffect, useRef, useState } from "react";
import "./CustomCss/sslCertificate.css";
import Navbar from "./navBar";
// import { useNavigate } from "react-router-dom";
import config from "../config";
import Pagination from "./Pagination";
// import SkeletonLoader from "./skeltonLoader";
import axios from './services/authConfig';
import disclaimerIcon from '../assets/disclaimerIcon.png'
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";
interface Environment {
    env_name: string;
    pk_id: number;
}

interface Certificate {
    Issuer: string;
    Issuer_Breakdown: {
        countryName: string;
        organizationName: string;
        stateOrProvinceName: string;
    };
    MD5: string;
    Not_valid_before_date: string;
    Public_Key_bits: string;
    Public_Key_type: string;
    "SHA-1": string;
    Signature_Algorithm: string;
    Subject: string;
    Subject_Breakdown: {
        countryName: string;
        organizationName: string;
        stateOrProvinceName: string;
    };
    expiry_date: string;
    Expiry_Status:string;
}

interface CertificateData {
    certificate: Certificate;
    host: string;
}



export default function SSLCertificate() {
    const [showPopup, setShowPopup] = useState(false);
    const [environment, setEnvironment] = useState<Environment[]>([]);
    const [ipAddress, setIpAddress] = useState("");
    // const navigate = useNavigate();
    const [port, setPort] = useState("443");
    const [environmentId, setEnvironmentId] = useState("");
    const [_, setLoading] = useState(true);
    const [IPloading, setIPLoading] = useState(true);
    const [schedulerData, setSchedulerData] = useState<{ [host: string]: CertificateData[] }>({});
    const [expandedIPs, setExpandedIPs] = useState<{ [host: string]: boolean }>({});
    const [addedIPs, setAddedIPs] = useState<string[]>([]);
    const [ipError, setIpError] = useState("");
    const [__, setProgress] = useState(0);
    const loadingBar = useRef<LoadingBarRef>(null);



    // useEffect(() => {
    //     fetchEnvironmentData();
    //     fetchSSLHistory();
    //     console.log(schedulerData)
    // }, []);
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
                const response = await axios.get(`${config.API_BASE_URL}/get_ssl_scan_history`);
                const data = await response.data;
                console.log("Fetched data:", data.data);

                if (isMounted) {
                    // Iterate over each item in the payload
                    data.data.forEach((item: { certificate: any, host: string }) => {
                        const host = item.host;
                        console.log(item.certificate)
                        // Add the host to the list of added IPs if not already added
                        setAddedIPs((prev) => [...prev, host]);
                        // Update the schedulerData state for each host
                        setSchedulerData((prev) => ({
                            ...prev,
                            [host]: prev[host] ? [...prev[host], item.certificate] : [item.certificate]
                        }));




                    });
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


    // const fetchEnvironmentData = async () => {
    //     try {
    //         const response = await axios.get(`${config.API_BASE_URL}/environments`);
    //         const data = await response.data;
    //         setEnvironment(data.data);
    //         setIPLoading(false);
    //     } catch (error) {
    //         console.error("Error fetching data:", error);
    //     }
    // };

    // const fetchSSLHistory = async () => {
    //     // Clear schedulerData and addedIPs before fetching new data
    //     setSchedulerData({});
    //     setAddedIPs([]);

    //     try {
    //         const response = await axios.get(`${config.API_BASE_URL}/get_ssl_scan_history`);
    //         const data = await response.data;
    //         console.log("Fetched data:", data.data);

    //         // Iterate over each item in the payload
    //         data.data.forEach((item: { certificate: CertificateData, host: string }) => {
    //             const host = item.host;

    //             // Update the schedulerData state for each host
    //             setSchedulerData((prev) => ({
    //                 ...prev,
    //                 [host]: prev[host] ? [...prev[host], item.certificate] : [item.certificate],
    //             }));

    //             // Add the host to the list of added IPs if not already added
    //             setAddedIPs((prev) => [...prev, host]);
    //         });
    //     } catch (error) {
    //         console.error("Error fetching data:", error);
    //     }
    // };



    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-GB");
    };



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

        setLoading(true);
        startProgress();
        setShowPopup(false);

        const resultJSON = {
            [environmentId]: {
                "ip_address": ipAddress,
                "port_number": port
            }
        };

        try {
            const response = await axios.post(`${config.API_BASE_URL}/get_new_ssl_cert`, resultJSON);
            const data = response.data;

            if (response.status === 200 && data.payload) {
                completeProgress();

                // Iterate over each item in the payload
                data.payload?.certificates?.forEach((item: { certificate: any, host: string }) => {
                    const host = item.host;
                    console.log(item.certificate)
                    console.log(item);

                    // Add the host to the list of added IPs if not already added
                    if (!addedIPs.includes(host)) {
                        setAddedIPs((prev) => [...prev, host]);
                    }

                    // Update the schedulerData state for each host
                    setSchedulerData((prev) => ({
                        ...prev,
                        [host]: prev[host] ? [...prev[host], item.certificate] : [item.certificate]
                    }));
                });

                setLoading(false);
            }
        } catch (error) {
            console.error("Error saving data:", error);
        }

        // Reset the form fields
        setIpAddress("");
        setEnvironmentId("");
        setPort("443");
    };



    const toggleContentVisibility = (host: string) => {
        console.log(host)
        setExpandedIPs((prev) => ({
            ...prev,
            [host]: !prev[host],
        }));
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleItemsPerPageChange = (newItemsPerPage: number) => {
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(1);
    };

    const startProgress = () => {
        if (loadingBar.current) {
            loadingBar.current.continuousStart();
        }
    };

    const completeProgress = () => {
        setProgress(100);
        if (loadingBar.current) {
            loadingBar.current.complete();
        }
    };

    // Pagination state and logic
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(20);
    // const indexOfLastItem = currentPage * itemsPerPage;
    // const indexOfFirstItem = indexOfLastItem - itemsPerPage;

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
                                SSL Certificates
                            </div>
                            <div className="SubHeadingText">
                                Find the SSL Certificates present in the Server
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
                                <div className="addedIPContainer" key={index}>
                                    <div className="ipListDiv">
                                        <div style={{ color: "#006E74" }}>
                                            <h2>{ip}</h2>
                                        </div>
                                        <button
                                            onClick={() => toggleContentVisibility(ip)}
                                            style={{
                                                color: "#006E74",
                                                background: "none",
                                                border: "none",
                                                cursor: "pointer",
                                            }}
                                        >
                                            {expandedIPs[ip] ? "-" : "+"}
                                        </button>
                                    </div>
                                    {/* {_ ? (
                                        <></>
                                        // <SkeletonLoader /><>
                                    ) : (<> */}
                                        {expandedIPs[ip] && (
                                            <div style={{ padding: "10px" }}>

                                                <div className="sslTableContainer">
                                                    <table className="table w-[165%]">
                                                        <thead
                                                            className="sticky top-0 bg-gray-100 text-gray-800"
                                                            style={{ backgroundColor: "#F2F7F8", color: "#003C51" }}
                                                        >
                                                            <tr>

                                                                <th className="text-left">Issuer</th>
                                                                <th className="text-left">Issued Date</th>
                                                                <th className="text-left">Public Key Bits</th>
                                                                <th className="text-left">Public Key Type</th>
                                                                <th className="text-left">MD5                  </th>
                                                                <th className="text-left">Signature Algorithm</th>
                                                                <th className="text-left">SHA-1</th>
                                                                <th className="text-left">Issuer To</th>
                                                                <th className="text-left">Expiry Date</th>
                                                                <th className="text-left">Status</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {schedulerData[ip]?.length === 0 ? (
                                                                <tr>
                                                                    <td colSpan={10} className="text-center py-4">
                                                                        No data available for this IP.
                                                                    </td>
                                                                </tr>
                                                            ) : (
                                                                schedulerData[ip].map((data: any, index: number) => {
                                                                    // Safely access the certificate and its properties
                                                                    const certificate = data || {};
                                                                    const issuerBreakdown = certificate.Issuer_Breakdown || {};

                                                                    console.log(certificate, issuerBreakdown)
                                                                     // Determine the class to apply based on the ExpiryStatus
                                                                     let expiryClass = "";
                                                                     if (certificate.Expiry_Status.startsWith("Valid")) {
                                                                         expiryClass = "valid";
                                                                     } else if (certificate.Expiry_Status.includes("Expiring in")) {
                                                                         expiryClass = "will-expire";
                                                                     }
                                                                     else if (certificate.Expiry_Status.includes("Expired")) {
                                                                        expiryClass = "expired";
                                                                    }
                                                                    return (
                                                                        <tr key={index}>
                                                                            <td className="text-left border-b">{certificate.Issuer || 'N/A'}</td>

                                                                            <td className="text-left border-b">
                                                                                {formatDate(certificate.Not_valid_before_date) || 'N/A'}
                                                                            </td>
                                                                            <td className="text-left border-b">{certificate.Public_Key_bits || 'N/A'}</td>
                                                                            <td className="text-left border-b">{certificate.Public_Key_type || 'N/A'}</td>
                                                                            <td className="text-left border-b">{certificate.MD5 || 'N/A'}</td>
                                                                            <td className="text-left border-b">{certificate.Signature_Algorithm || 'N/A'}</td>
                                                                            <td className="text-left border-b">{certificate["SHA-1"] || 'N/A'}</td>
                                                                            <td className="text-left border-b">{certificate.Subject || 'N/A'}</td>
                                                                            <td className="text-left border-b">
                                                                                {formatDate(certificate.expiry_date) || 'N/A'}
                                                                            </td>
                                                                            <td className={`text-left border-b ${expiryClass}`}>{certificate.Expiry_Status}</td>
                                                                        </tr>
                                                                    );
                                                                })
                                                            )}
                                                        </tbody>



                                                    </table>
                                                </div>


                                                <Pagination
                                                    totalItems={schedulerData[ip]?.length || 0}
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
                        <h2 className="text-lg font-bold mb-4">Fetch SSL Certificate</h2>
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
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1" htmlFor="ipAddress">
                                Port
                            </label>
                            <input
                                id="port"
                                type="text"
                                className="input input-bordered w-full"
                                value={port}
                                onChange={(e) => setPort(e.target.value)}
                                style={{ outline: "none" }}
                            />
                        </div>

                        <div className="flex justify-end" style={{ gap: "15px" }}>
                            <button onClick={handleClosePopup} className="sslButton" style={{ width: "20%" }}>
                                Cancel
                            </button>
                            <button onClick={handleSave} className="sslButton" style={{ width: "40%" }}>
                                Fetch SSL Certificate
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
