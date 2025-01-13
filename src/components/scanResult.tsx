import { useEffect, useRef, useState } from "react";
import NavBar from "./navBar";
import SearchIcon from "../assets/searchIcon.svg";
import Breadcrumbs from "./breadCrumbs";
import { useLocation, useNavigate } from "react-router-dom";
import NoRemoteConnectivity from "../assets/noRemoteConnectivity.svg";
import remoteConnectivityTrue from "../assets/remoteConnetivityTrue.svg";
import Pagination from "./Pagination";
import { useDashboard } from "./dasboardContext";
import "./CustomCss/scanResult.css";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";
import axios from "../components/services/authConfig"; // Import the axios instance
export default function ScanResult() {
  const [loading, setLoading] = useState(true);
  const [scanData, setScanData] = useState<any[]>([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { basicScanJSON } = location?.state || {};
  const { environmentId } = location?.state || {};
  const [envValues, setEnvValues] = useState<any[]>([]);
  const { scanResult, setScanResult } = useDashboard();
  const [_, setProgress] = useState(0);
  const loadingBar = useRef<LoadingBarRef>(null);
  const [__, setEnvId] = useState(environmentId);
  const [___, setJobId] = useState();

  const breadcrumbItems = [
    { label: "Scan", url: "/scanServer" },
    { label: "Servers", url: "/scanResult" },
  ];

  interface HostDetails {
    hostname: string;
    os_family: string;
    remote_connection: string | boolean;
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(
        // `${config.API_BASE_URL}/environments`
        `http://10.2.0.25:8010/environments`
      );
      if (response.data.status === true) {
        // const data = await response.json();
        console.log("lookup", response);
        setEnvValues(response.data.data);
      } else {
        console.error("Failed to fetch environment values:", response.status);
      }
    } catch (error) {
      console.error("Error fetching environment values:", error);
    }
  };

  const getEnvNameById = (envid: string) => {
    const selectedItem = envValues.find(
      (item: any) => item["pk_id"] === parseInt(envid, 10)
    );
    return selectedItem ? selectedItem["env_name"] : null;
  };

  useEffect(() => {
    fetchData();
    if (environmentId) {
      setEnvId(environmentId);
    }
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    let progressInterval: NodeJS.Timeout;

    const startProgress = () => {
      if (loadingBar.current) {
        loadingBar.current.continuousStart();
      }
      progressInterval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + 1;
          if (newProgress >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          if (loadingBar.current) {
            loadingBar.current.continuousStart();
          }
          return newProgress;
        });
      }, 500);
    };

    const completeProgress = () => {
      clearInterval(progressInterval);
      setProgress(100);
      if (loadingBar.current) {
        loadingBar.current.complete();
      }
    };

    if (basicScanJSON) {
      const fetchScanStatus = async () => {
        try {
          startProgress();

          const response = await axios.post(
            // `${config.API_BASE_URL}/scan/basic-scan/status`,
            `http://10.2.0.25:8010/scan/basic-scan/status`,
            basicScanJSON
          );

          if (response.status === 200) {
            const secondApiResponseData = await response.data;
            console.log("Second API Response:", secondApiResponseData);

            if (
              secondApiResponseData &&
              secondApiResponseData.ready === true &&
              secondApiResponseData.successful === true
            ) {
              clearInterval(intervalId);
              setLoading(false);
              completeProgress();
            }

            if (secondApiResponseData && secondApiResponseData.value) {
              let formattedData: any[] = [];

              Object.entries(secondApiResponseData.value).map(
                ([ip, details]) => {
                  const hostDetails = details as HostDetails; // Cast details to HostDetails

                  formattedData.push({
                    ip: ip,
                    hostname: hostDetails.hostname || " ",
                    os_family: hostDetails.os_family,
                    remote_connection: hostDetails.remote_connection,
                    environmentName: getEnvNameById(environmentId) || "",
                    envId: environmentId,
                    // typeof hostDetails.remote_connection === 'boolean'
                    //   ? hostDetails.remote_connection ? "Yes" : "No"
                    //   : hostDetails.remote_connection
                  });
                }
              );

              // Object.keys(secondApiResponseData.payload).forEach((envId) => {
              //   if (!isNaN(parseInt(envId, 10))) {
              //     secondApiResponseData.payload[envId].forEach(
              //       (scanResults: any) => {
              //         const results = scanResults.data;
              //         Object.keys(results).forEach((ip, index) => {
              //           formattedData.push({
              //             id: index,
              //             envId,
              //             ip,
              //             hostname: results[ip].hostname,
              //             os_family: results[ip].os_family,
              //             remote_connection: results[ip].remote_connection,
              //             environmentName: getEnvNameById(envId) || "",
              //           });
              //         });
              //       }
              //     );
              //   }
              // });

              console.log(formattedData);

              setScanData(formattedData);
              setScanResult(formattedData);
              completeProgress();
            }
          } else {
            console.error(
              `Second API request failed! Status: ${response.status}`
            );
            completeProgress();
          }
        } catch (error) {
          console.error("Error fetching scan status:", error);
          completeProgress();
        }
      };

      intervalId = setInterval(fetchScanStatus, 1000);

      return () => {
        clearInterval(intervalId);
        clearInterval(progressInterval);
      };
    } else if (scanResult) {
      setScanData(scanResult);
      setLoading(false);
      completeProgress();
    }
  }, [basicScanJSON, envValues]);

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = scanData?.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Change items per page
  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  const handleRowClick = async (data: any) => {
    console.log("Row data:", data);
    try {
      const resultJSON = {
        environment: data.envId,
        ip: data.ip,
        os: data.os_family,
      };
  
      const response = await axios.post(
        // `${config.API_BASE_URL}/scan/detail-scan`,
        `http://10.2.0.25:8010/scan/detail-scan`,
        resultJSON
      );
  
      console.log("Full API Response:", response);
      console.log("Response Data:", response.data);
  
      const jobId = response.data.job_id; // Adjust this based on actual response structure
      console.log("Extracted jobId:", jobId);
  
      setJobId(jobId);
  
      if (jobId) {
        navigate("/dashboard", { state: { rowData: data, envId: data.envId, jobId: jobId } });
      } else {
        console.error("jobId is undefined.");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error during API requests:", error);
      setLoading(false);
    }
  };
  

  return (
    <div
      className="w-screen h-screen flex flex-col"
      style={{ overflowX: "hidden" }}
    >
      <NavBar />
      <LoadingBar ref={loadingBar} shadow={true} height={3} color="#29D" />
      <div className="bg-white-100 p-4 ml-4">
        <Breadcrumbs items={breadcrumbItems} />
        <div style={{ marginLeft: "3vh" }}>
          <h2 className="text-teal-600 text-2xl mb-4">Scan Result</h2>
          <div className="flex items-center mb-4">
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
                className="pl-8 border border-gray-300 p-2 rounded outline-none"
                placeholder="Search..."
                style={{ width: "30vw" }}
              />
            </div>
          </div>
          <div>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead style={{ backgroundColor: "#F2F7F8", color: "#003C51" }}>
                  <tr>
                    <th className="text-left">Server Name</th>
                    {/* <th className="text-left">Environment</th> */}
                    <th className="text-left">Operating System</th>
                    <th className="text-left">IP</th>
                    <th className="text-left">Remote Connectivity</th>
                    <th className="text-left">CPU</th>
                    <th className="text-left">Memory</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <>
                      <tr className="animate-pulse">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        </td>
                        {/* <td className="px-6 py-4 whitespace-nowrap">
                          <div className="h-4 bg-gray-200 rounded w-2/4"></div>
                        </td> */}
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                        </td>
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
                      </tr>
                      <tr className="animate-pulse">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        </td>
                        {/* <td className="px-6 py-4 whitespace-nowrap">
                          <div className="h-4 bg-gray-200 rounded w-2/4"></div>
                        </td> */}
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                        </td>
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
                      </tr>
                    </>
                  ) : (
                    currentItems.map((data, index) => (
                      <tr
                        key={index}
                        onClick={
                          data.remote_connection
                            ? () => handleRowClick(data)
                            : undefined
                        }
                        style={{
                          cursor: data.remote_connection
                            ? "pointer"
                            : "default",
                        }}
                        className={
                          data.remote_connection ? "tableRowstyle" : ""
                        }
                      >
                        <td className="text-left border-b">{data.hostname}</td>
                        {/* <td className="text-left border-b">
                          {data.environmentName}
                        </td> */}
                        <td className="text-left border-b">
                          {data.os_family.charAt(0).toUpperCase() +
                            data.os_family.slice(1)}
                        </td>
                        <td className="text-left border-b">{data.ip}</td>
                        <td
                          className="text-left border-b"
                          style={{ display: "flex", justifyContent: "left" }}
                        >
                          {data.remote_connection ? (
                            <img
                              src={remoteConnectivityTrue}
                              alt="True Icon"
                              className="h-5 w-5"
                            />
                          ) : (
                            <img
                              src={NoRemoteConnectivity}
                              alt="False Icon"
                              className="h-5 w-5"
                            />
                          )}
                        </td>
                        <td className="text-center border-b"></td>
                        <td className="text-center border-b"></td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>

              {/* Pagination */}
              <Pagination
                totalItems={scanData.length}
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
