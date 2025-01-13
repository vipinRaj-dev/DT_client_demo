import { useEffect, useState } from "react";
// import NavBar from "./navBar";
// import SearchIcon from "../assets/searchIcon copy.svg";
import Breadcrumbs from "./breadCrumbs";
import "./CustomCss/dashboard.css";
import DiskInformationChart from "./DiskInformationChart";
// import CPUMemoryChart from "./MemoryChart";
import { SkeletonLine, SkeletonCircle } from "./Skelton";
import { useLocation } from "react-router-dom";
import config from "../config";
import { useDashboard } from "./dasboardContext";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import CPUChart from "./CPUChart";
import MemoryChart from "./MemoryChart";
import axios from "../components/services/authConfig";
import SideBar from "./sideBar";
// import Value from "./Linux.json";
import Value from "./Windows.json";

interface BasicOS {
  hostname: string;
  system_name: string;
  os_version: string;
  publicIP: string;
  privateIP: string;
  totalThread: string;
  coreThread: string;
  cpuCores: string;
  cpuSpeed: string;
  noOfSockets: string;
  vCpu: string;
}

type KnownPorts = {
  name: string;
  port: number;
};


export default function Dashboard() {
  const flag = true;
  const location = useLocation();
  const { rowData } = location?.state || {};
  const { envId } = location?.state || {};
  const { jobId } = location?.state || {};
  const [isLoading, setLoading] = useState(true);
  const { data, setData } = useDashboard();
  const [basicOS, setBasicOS] = useState<BasicOS | null>(null);
  const [cpuGraphData, setCPUGraphData] = useState<any>([]);
  const [memoryGraphData, setMemoryGraphData] = useState<any>([]);
  const [driveDetails, setDriveDetails] = useState<any>([]);
  const [runningPorts, setRunningPorts] = useState<KnownPorts[]>([]);
  const { idFromHistory } = location?.state || {};

  const breadcrumbItems = [
    {
      label: idFromHistory ? "Scan History" : "Servers",
      url: idFromHistory ? "/scanHistory" : "/scanResult",
    },
    {
      label:
        rowData && rowData["ip"]
          ? rowData["ip"]
          : data && data["Server_IP"]
          ? data["Server_IP"]
          : "",
    },
  ];

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (/*rowData && jobId && envId*/ flag===true) {
      const fetchDashboardData = async () => {
        try {
          // const resultJSON = {
          //   "environment": envId,
          //   "key": jobId
          // };
  
          // const response = await axios.post(
          //   `${config.API_BASE_URL}/scan/detail-scan-status`,
          //   resultJSON
          // );
  
          const response = Value; // Assuming Value is the response object
          const OSInfo: any = {};  // Initialize an object to hold all the data
  
          if (response.status === 200) {
            const secondApiResponseData = await response;
        
            console.log("Second API Response:", secondApiResponseData.value);
        
            if (secondApiResponseData && secondApiResponseData.ready === true) {
                clearInterval(intervalId);
                secondApiResponseData.value.forEach((item: any) => {
                  // if (rowData.os_family === "windows") {
                  //   console.log("WINDOWS");
    
                    switch (item.name) {
                        case "MachineType":
                            OSInfo.machineType = item.value.type; // Getting the machine type
                            console.log("MachineType : ",  OSInfo.machineType);
                            break;
                        case "PublicIP":
                            OSInfo.publicIP = item.value.ip; // Getting the public IP
                            console.log("Public IP:", OSInfo.publicIP);
                            break;
                        case "PrivateIP":
                            // Assuming we need the first private IP (or change logic to handle all)
                            OSInfo.privateIP = item.value[0]?.ip; 
                            console.log("Private IP:", OSInfo.privateIP);
                            break;
                        case "InstalledApp":
                            // Handling installed applications
                            OSInfo.installedApps = item.value.map((app: any) => ({
                                name: app.name,
                                version: app.version
                            }));
                            OSInfo.installedAppsCount = OSInfo.installedApps.length;
                            console.log("Installed Apps:", OSInfo.installedApps);
                            break;
                        case "Process":
                            OSInfo.processes = item.value.map((proc: any) => ({
                                cpu: proc.cpu,
                                id: proc.id,
                                name: proc.name,
                                service: proc.service
                            }));
                            OSInfo.runningProcessCount = OSInfo.processes.length;
                            console.log("Processes:", OSInfo.processes);
                            break;
                        case "OSInfo":
                            OSInfo.osCaption = item.value.caption;
                            OSInfo.osVersion = item.value.version;
                            OSInfo.deviceName = item.value.hostname;
                            console.log("OSInfo:", OSInfo);
                            break;
                        case "DiskDetail":
                            OSInfo.diskDetails = item.value.map((disk: any) => ({
                                disk: disk.disk,
                                reads: disk.reads,
                                writes: disk.writes,
                                transfers: disk.transfers
                            }));
                            console.log("Disk Details:", OSInfo.diskDetails);
                            break;
                        case "DriveDetails":
                            OSInfo.driveDetails = item.value.map((drive: any) => {
                              const sizeValue = parseFloat(drive.size); // Convert size to a number
                              const usedValue = parseFloat(drive.used); // Convert used to a number
                              const unit = drive.size.match(/[A-Za-z]+/g)?.[0] || ''; // Extract the unit (e.g., GB)
                              
                              return {
                                  fileSystemLabel: drive.file_system_label,
                                  size: drive.size,
                                  used: drive.used,
                                  healthStatus: drive.health_status,
                                  operationalStatus: drive.operational_status,
                                  sizeRemaining: `${(sizeValue - usedValue).toFixed(2)} ${unit}` // Calculate and format sizeRemaining
                              };
                            });
                            console.log("Drive Details:", OSInfo.driveDetails);
                            break;
                        case "CpuInfo":
                            OSInfo.cpuCoreThread = item.value.core_thread;
                            OSInfo.cpuCores = item.value.cpu_cores;
                            OSInfo.cpuSpeed = item.value.cpu_speed;
                            OSInfo.noOfSockets = item.value.no_of_socket;
                            OSInfo.totalThreads = item.value.total_threads;
                            OSInfo.vCpu = item.value.v_cpu;
                            break;
                        case "DiskInfo":
                            OSInfo.diskInfo = item.value.map((disk: any) => ({
                                allocatedSize: disk.allocated_size,
                                friendlyName: disk.friendly_name,
                                healthStatus: disk.health_status,
                                size: disk.size
                            }));
                            console.log("Disk Info:", OSInfo.diskInfo);
                            break;
                        case "CpuDetails":
                            OSInfo.cpuUsage = {
                                remaining: item.value.remaining,
                                used: item.value.used
                            };
                            console.log("CPU Details : ", OSInfo.cpuUsage);
                            break;
                        case "NetworkInfo":
                            OSInfo.networkInfo = item.value.map((net: any) => ({
                                interface: net.Name,
                                rx_bytes: net.ReceivedBytes,
                                tx_bytes: net.SentBytes,
                                rx_dropped: net.ReceivedDiscardedPackets,
                                tx_dropped: net.SentBroadcastPackets,
                                rx_packets: net.ReceivedUnicastPackets,
                                tx_packets: net.SentUnicastPackets,
                                rx_errors: net.ReceivedPacketErrors,
                                tx_errors: net.SentMulticastPackets,
                            }));
                            console.log("Network Info:", OSInfo.networkInfo);
                            break;
                        case "PhysicalMemory":
                            OSInfo.memory = {
                                available: item.value.available,
                                total: item.value.total,
                                used: item.value.used
                            };
                            console.log("PhysicalMemory : ", OSInfo.memory);
                            break;
                        case "MacAddress":
                            OSInfo.macAddresses = item.value.map((mac: any) => mac.address);
                            console.log("MAC Addresses:", OSInfo.macAddresses);
                            break;
                        case "Service":
                            OSInfo.services = item.value.map((service: any) => ({
                                name: service.name,
                                ip: service.ip,
                                port: service.port,
                                protocol: service.protocol
                            }));
                            console.log("Services :", OSInfo.services);
                            break;
                        default:
                            console.log(`Unknown item: ${item.name}`);
                    }
    
                    // Setting the BasicOS state with the updated values
                    setBasicOS({
                        hostname: OSInfo.deviceName || "",
                        system_name: OSInfo.osCaption || "",
                        os_version: OSInfo.osVersion || "",
                        publicIP: OSInfo.publicIP || "",
                        privateIP: OSInfo.privateIP || "",
                        totalThread: OSInfo.totalThreads || "",
                        coreThread: OSInfo.cpuCoreThread || "",
                        cpuCores: OSInfo.cpuCores || "",
                        cpuSpeed: OSInfo.cpuSpeed || "",
                        noOfSockets: OSInfo.noOfSockets || "",
                        vCpu: OSInfo.vCpu || ""
                    });
                    setCPUGraphData(OSInfo.cpuUsage);
                    setMemoryGraphData(OSInfo.memory);
                    setRunningPorts(OSInfo.services);
                    setDriveDetails(OSInfo.driveDetails);
                    setData(OSInfo);
                // } else if(rowData.os_family === "linux") {

                //   console.log("LINUX");
                  
                //   switch (item.name) {
                //     case "MachineType":
                //       console.log("MAchineType:", item.value);
                //       break;
                //     case "PublicIP":
                //       console.log("PublicIP:", item.value);
                //       break;
                //     case "PrivateIP":
                //       console.log("Private IP:", item.value);
                //       break;
                //     case "InstalledApp":
                //       console.log("InstalledApp:", item.value);                    
                //       break;
                //     case "RunningApp":
                //       console.log("Running Processes:", item.value);  
                //       break;
                //     case "OSInfoLinux":
                //       console.log("OSInfo:", item.value);  
                //       break;
                //     case "DiskDetail":
                //       console.log("DiskDetail:", item.value);  
                //       break;
                //     case "DriveDetailLinux":
                //       console.log("DriveDetails:", item.value);  
                //       break;
                //     case "DiskInfo":
                //       console.log("DiskInfo:", item.value);  
                //       break;
                //     case "CpuInfo":
                //       console.log("CPUInfo:", item.value);  
                //       break;
                //     case "CpuDetails":
                //       console.log("CPUDetails:", item.value);  
                //       break;
                //     case "NetworkInfoLinux":
                //       console.log("NetworkInfo:", item.value);  
                //       break;
                //     case "PhysicalMemory":
                //       console.log("Memory:", item.value);  
                //       break;
                //     case "MacAddress":
                //       console.log("MACAddress:", item.value);  
                //       break;
                //     case "ServiceLinux":
                //       console.log("Services:", item.value);  
                //       break;
                //     default:
                //       console.log(`Unknown item: ${item.name}`);
                //   }
                // }
              });
              setLoading(false);
            }
          } else {
            console.error(`Second API request failed! Status: ${response.status}`);
          }
        } catch (error) {
          console.error("Error fetching scan status:", error);
        }
      };
  
      intervalId = setInterval(fetchDashboardData, 5000);
      return () => clearInterval(intervalId);
    } else if (idFromHistory) {
      // Keep the code for idFromHistory the same
      fetchData(idFromHistory);
    }
  }, [rowData, jobId, envId, idFromHistory]); // Make sure to add the new dependencies  

  async function fetchData(idFromHistory: any) {
    if (idFromHistory) {
      try {
        const response = await axios.post(
          `${config.API_BASE_URL}/get_id_historic_data`,
          idFromHistory
        );
        console.log("fetch data from dashboard :", response.data);

        if (response?.data?.data) {
          for (const ipAddress in response?.data?.data) {
            if (response?.data?.data.hasOwnProperty(ipAddress)) {
              const details = response?.data?.data[ipAddress].all_data;
              if (details) {
                console.log(details);

                let osDetails = {
                  hostname: details["basic_os"]?.hostname,
                  system_name: details["basic_os"]?.system_name,
                  os_version: details["basic_os"]?.os_version,
                  publicIP: details["public_ip"],
                  privateIP: details["Server_IP"],
                  totalThread: details["cpu_basic"]?.Total_threads,
                  coreThread: details["cpu_basic"]?.core_thread,
                  cpuCores: details["cpu_basic"]?.cpu_cores,
                  cpuSpeed: details["cpu_basic"]?.cpu_speed,
                  noOfSockets: details["cpu_basic"]?.no_of_socket,
                  vCpu: details["cpu_basic"]?.v_cpu,
                };
                setBasicOS(osDetails);
                setCPUGraphData(details["cpu_details"]);
                setMemoryGraphData(details["physical_memory"]);
                setDriveDetails(details["drive_details"]);
                setRunningPorts(details["known_ports"]);
                setData(details);
                setLoading(false);
              }
            }
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  }

  return (
    <div className="w-screen h-screen flex flex-col">
      <SideBar />
      <div className="p-4 ml-[19vw]" style={{ overflowX: "hidden" }}>
        <Breadcrumbs items={breadcrumbItems} />{" "}
        <div className="card bg-base-100 w-96 shadow-xl topCard">
          <div className="card-body">
            <div className="cardInside">
              <div className="main-div">
                {isLoading ? (
                  <>
                    <SkeletonLine width="10vw" height="2vh" />
                    <SkeletonLine width="10vw" height="2vh" />
                  </>
                ) : (
                  <>
                    <div className="headingDiv">
                      <div
                        className="line"
                        style={{ backgroundColor: "#881E87" }}
                      ></div>
                      <p
                        style={{ marginLeft: "1vh" }}
                        className="headingFontColor"
                      >
                        Device Name
                      </p>
                    </div>
                    <div className="valueDiv">
                      <p
                        style={{ marginLeft: "1.5vh" }}
                        className="ellipsis"
                        data-tooltip-content={
                          basicOS ? basicOS.hostname : "Loading..."
                        }
                        data-tooltip-id="my-tooltip"
                      >
                        {basicOS ? basicOS.hostname : "Loading..."}
                      </p>
                    </div>
                  </>
                )}
              </div>

              <div className="main-div">
                {isLoading ? (
                  <>
                    <SkeletonLine width="10vw" height="2vh" />
                    <SkeletonLine width="10vw" height="2vh" />
                  </>
                ) : (
                  <>
                    <div className="headingDiv">
                      <div
                        className="line"
                        style={{ backgroundColor: "#01B27C" }}
                      ></div>
                      <p
                        style={{ marginLeft: "1vh" }}
                        className="headingFontColor"
                      >
                        Operating System
                      </p>
                    </div>
                    <div className="valueDiv">
                      <p
                        style={{ marginLeft: "1.5vh" }}
                        className="ellipsis"
                        data-tooltip-content={
                          basicOS ? basicOS.system_name : "Loading..."
                        }
                        data-tooltip-id="my-tooltip"
                      >
                        {basicOS ? basicOS.system_name : "Loading..."}
                      </p>
                    </div>
                  </>
                )}
              </div>

              <div className="main-div">
                {isLoading ? (
                  <>
                    <SkeletonLine width="10vw" height="2vh" />
                    <SkeletonLine width="10vw" height="2vh" />
                  </>
                ) : (
                  <>
                    <div className="headingDiv">
                      <div
                        className="line"
                        style={{ backgroundColor: "#003C51" }}
                      ></div>
                      <p
                        style={{ marginLeft: "1vh" }}
                        className="headingFontColor"
                      >
                        Version
                      </p>
                    </div>
                    <div className="valueDiv">
                      <p
                        style={{ marginLeft: "1.5vh" }}
                        className="ellipsis"
                        data-tooltip-content={
                          basicOS ? basicOS.os_version : "Loading..."
                        }
                        data-tooltip-id="my-tooltip"
                      >
                        {basicOS ? basicOS.os_version : "Loading..."}
                      </p>
                    </div>
                  </>
                )}
              </div>

              <div className="main-div">
                {isLoading ? (
                  <>
                    <SkeletonLine width="10vw" height="2vh" />
                    <SkeletonLine width="10vw" height="2vh" />
                  </>
                ) : (
                  <>
                    <div className="headingDiv">
                      <div
                        className="line"
                        style={{ backgroundColor: "#DBD3BD" }}
                      ></div>
                      <p
                        style={{ marginLeft: "1vh" }}
                        className="headingFontColor"
                      >
                        Public IP
                      </p>
                    </div>
                    <div className="valueDiv">
                      <p
                        style={{ marginLeft: "1.5vh" }}
                        className="ellipsis"
                        data-tooltip-content={
                          basicOS ? basicOS.publicIP : "Loading..."
                        }
                        data-tooltip-id="my-tooltip"
                      >
                        {basicOS ? basicOS.publicIP : "Loading..."}
                      </p>
                    </div>
                  </>
                )}
              </div>

              <div className="main-div">
                {isLoading ? (
                  <>
                    <SkeletonLine width="10vw" height="2vh" />
                    <SkeletonLine width="10vw" height="2vh" />
                  </>
                ) : (
                  <>
                    <div className="headingDiv">
                      <div
                        className="line"
                        style={{ backgroundColor: "#FC6A59" }}
                      ></div>
                      <p
                        style={{ marginLeft: "1vh" }}
                        className="headingFontColor"
                      >
                        Private IP
                      </p>
                    </div>
                    <div className="valueDiv">
                      <p
                        style={{ marginLeft: "1.5vh" }}
                        className="ellipsis"
                        data-tooltip-content={
                          basicOS ? basicOS.privateIP : "Loading..."
                        }
                        data-tooltip-id="my-tooltip"
                      >
                        {basicOS ? basicOS.privateIP : "Loading..."}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full mt-4">
          <div className="w-2/3 p-4">
            {isLoading ? (
              <>
                <div className="cpuGraphSkelton">
                  <SkeletonLine width="50vw" height="50vh" />
                  {/* <SkeletonLine width="50vw" height="2vh" />
                  <SkeletonLine width="50vw" height="2vh" />
                  <SkeletonLine width="50vw" height="2vh" />
                  <SkeletonLine width="50vw" height="2vh" />
                  <SkeletonLine width="50vw" height="2vh" />
                  <SkeletonLine width="50vw" height="2vh" />
                  <SkeletonLine width="50vw" height="2vh" /> */}
                </div>
              </>
            ) : (
              <>
                <DiskInformationChart driveDetails={driveDetails} />
              </>
            )}
          </div>
          <div
            className="w-1/3 p-4"
            style={{
              marginLeft: "80px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {/* <CPUMemoryChart width={200} height={200} /> */}
            <h3 className="text-teal-600 text-xl mb-4">CPU Performance</h3>
            <div className="cpuMemoryChartDiv">
              {isLoading ? (
                <>
                  <SkeletonCircle size="w-24 h-24" />
                </>
              ) : (
                <>
                  <CPUChart cpuInfo={cpuGraphData} />
                </>
              )}
            </div>
            <h3 className="text-teal-600 text-xl mb-4">Memory Usage</h3>
            <div className="cpuMemoryChartDiv">
              {isLoading ? (
                <>
                  <SkeletonCircle size="w-24 h-24" />
                </>
              ) : (
                <>
                  <MemoryChart memoryInfo={memoryGraphData} />
                </>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full mt-4">
          <div className="w-1/3 p-4">
            <p style={{ color: "#006E74" }}>Running Services</p>

            <div className="card bg-base-100 w-96 shadow-xl portTableDiv">
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th className="headingFontColor">#</th>
                      <th className="headingFontColor">Name</th>
                      <th className="headingFontColor">Port</th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading ? (
                      <>
                        <tr>
                          <td>
                            <SkeletonLine width="1vw" height="2vh" />
                          </td>
                          <td>
                            <SkeletonLine width="2vw" height="2vh" />
                          </td>
                          <td>
                            <SkeletonLine width="2vw" height="2vh" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <SkeletonLine width="1vw" height="2vh" />
                          </td>
                          <td>
                            <SkeletonLine width="2vw" height="2vh" />
                          </td>
                          <td>
                            <SkeletonLine width="2vw" height="2vh" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <SkeletonLine width="1vw" height="2vh" />
                          </td>
                          <td>
                            <SkeletonLine width="2vw" height="2vh" />
                          </td>
                          <td>
                            <SkeletonLine width="2vw" height="2vh" />
                          </td>
                        </tr>
                      </>
                    ) : (
                      <>
                        {runningPorts.map((port, index) => (
                          <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{port.name}</td>
                            <td>{port.port}</td>
                          </tr>
                        ))}
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="w-1/3 p-4">
            <div className="generalInfoDiv">
              <div className="card bg-base-100 w-96 generalInfoItems">
                <div className="card-body" style={{ alignItems: "center" }}>
                  {isLoading ? (
                    <>
                      <SkeletonLine width="6vw" height="2vh" />
                      <SkeletonLine width="6vw" height="2vh" />
                    </>
                  ) : (
                    <>
                      <p className="headingFontColor valueText">CPU Core</p>
                      <p
                        className="valueFontSize ellipsis"
                        data-tooltip-content={
                          basicOS ? basicOS.cpuCores : "Loading..."
                        }
                        data-tooltip-id="my-tooltip"
                      >
                        {" "}
                        {basicOS ? basicOS.cpuCores : "Loading..."}
                      </p>
                    </>
                  )}
                </div>
              </div>

              <div className="card bg-base-100 w-96 generalInfoItems">
                <div className="card-body" style={{ alignItems: "center" }}>
                  {isLoading ? (
                    <>
                      <SkeletonLine width="6vw" height="2vh" />
                      <SkeletonLine width="6vw" height="2vh" />
                    </>
                  ) : (
                    <>
                      <p className="headingFontColor valueText">CPU Speed</p>
                      <p
                        className="valueFontSize ellipsis"
                        data-tooltip-content={
                          basicOS ? basicOS.cpuSpeed : "Loading..."
                        }
                        data-tooltip-id="my-tooltip"
                      >
                        {" "}
                        {basicOS ? basicOS.cpuSpeed : "Loading..."}
                      </p>
                    </>
                  )}
                </div>
              </div>
              <div className="card bg-base-100 w-96 generalInfoItems">
                <div className="card-body" style={{ alignItems: "center" }}>
                  {isLoading ? (
                    <>
                      <SkeletonLine width="6vw" height="2vh" />
                      <SkeletonLine width="6vw" height="2vh" />
                    </>
                  ) : (
                    <>
                      <p className="headingFontColor valueText">vCPU</p>
                      <p
                        className="valueFontSize ellipsis"
                        data-tooltip-content={
                          basicOS ? basicOS.vCpu : "Loading..."
                        }
                        data-tooltip-id="my-tooltip"
                      >
                        {" "}
                        {basicOS ? basicOS.vCpu : "Loading..."}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="generalInfoDiv">
              <div className="card bg-base-100 w-96 generalInfoItems">
                <div className="card-body" style={{ alignItems: "center" }}>
                  {isLoading ? (
                    <>
                      <SkeletonLine width="6vw" height="2vh" />
                      <SkeletonLine width="6vw" height="2vh" />
                    </>
                  ) : (
                    <>
                      <p className="headingFontColor valueText">Core Thread</p>
                      <p
                        className="valueFontSize ellipsis"
                        data-tooltip-content={
                          basicOS ? basicOS.coreThread : "Loading..."
                        }
                        data-tooltip-id="my-tooltip"
                      >
                        {" "}
                        {basicOS ? basicOS.coreThread : "Loading..."}
                      </p>
                    </>
                  )}
                </div>
              </div>
              <div className="card bg-base-100 w-96 generalInfoItems">
                <div className="card-body" style={{ alignItems: "center" }}>
                  {isLoading ? (
                    <>
                      <SkeletonLine width="6vw" height="2vh" />
                      <SkeletonLine width="6vw" height="2vh" />
                    </>
                  ) : (
                    <>
                      <p className="headingFontColor valueText">
                        Total Threads
                      </p>
                      <p
                        className="valueFontSize ellipsis"
                        data-tooltip-content={
                          basicOS ? basicOS.totalThread : "Loading..."
                        }
                        data-tooltip-id="my-tooltip"
                      >
                        {" "}
                        {basicOS ? basicOS.totalThread : "Loading..."}
                      </p>
                    </>
                  )}
                </div>
              </div>
              <div className="card bg-base-100 w-96 generalInfoItems">
                <div className="card-body" style={{ alignItems: "center" }}>
                  {isLoading ? (
                    <>
                      <SkeletonLine width="6vw" height="2vh" />
                      <SkeletonLine width="6vw" height="2vh" />
                    </>
                  ) : (
                    <>
                      <p className="headingFontColor valueText">Sockets</p>
                      <p
                        className="valueFontSize ellipsis"
                        data-tooltip-content={
                          basicOS ? basicOS.noOfSockets : "Loading..."
                        }
                        data-tooltip-id="my-tooltip"
                      >
                        {" "}
                        {basicOS ? basicOS.noOfSockets : "Loading..."}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/3 p-4 generalInfo">
            <div className="card bg-base-100 w-96 shadow-xl generalInfoCard">
              <div className="main-div">
                {isLoading ? (
                  <>
                    <SkeletonLine width="10vw" height="2vh" />
                    <SkeletonLine width="10vw" height="2vh" />
                  </>
                ) : (
                  <>
                    <div className="headingDiv">
                      <div
                        className="line"
                        style={{ backgroundColor: "#881E87" }}
                      ></div>
                      <p
                        style={{ marginLeft: "1vh" }}
                        className="headingFontColor"
                      >
                        Installed Apps
                      </p>
                    </div>
                    <div className="valueDiv">
                      <p
                        className="valueFontSize"
                        style={{ marginLeft: "1.5vh" }}
                      >
                        {data?.installedAppsCount ?? " "}
                      </p>
                    </div>
                  </>
                )}
              </div>

              <div className="main-div">
                {isLoading ? (
                  <>
                    <SkeletonLine width="10vw" height="2vh" />
                    <SkeletonLine width="10vw" height="2vh" />
                  </>
                ) : (
                  <>
                    <div className="headingDiv">
                      <div
                        className="line"
                        style={{ backgroundColor: "#01B27C" }}
                      ></div>
                      <p
                        style={{ marginLeft: "1vh" }}
                        className="headingFontColor"
                      >
                        Running Processes
                      </p>
                    </div>
                    <div className="valueDiv">
                      <p
                        className="valueFontSize"
                        style={{ marginLeft: "1.5vh" }}
                      >
                        {data?.runningProcessCount ?? ""}
                      </p>
                    </div>
                  </>
                )}
              </div>

              <div className="main-div">
                {isLoading ? (
                  <>
                    <SkeletonLine width="10vw" height="2vh" />
                    <SkeletonLine width="10vw" height="2vh" />
                  </>
                ) : (
                  <>
                    <div className="headingDiv">
                      <div
                        className="line"
                        style={{ backgroundColor: "#DBD3BD" }}
                      ></div>
                      <p
                        style={{ marginLeft: "1vh" }}
                        className="headingFontColor"
                      >
                        N/W Byte Sent
                      </p>
                    </div>
                    <div className="valueDiv">
                      <p
                        className="valueFontSize"
                        style={{ marginLeft: "1.5vh" }}
                      >
                        12 Kbps
                      </p>
                    </div>
                  </>
                )}
              </div>

              <div className="main-div">
                {isLoading ? (
                  <>
                    <SkeletonLine width="10vw" height="2vh" />
                    <SkeletonLine width="10vw" height="2vh" />
                  </>
                ) : (
                  <>
                    <div className="headingDiv">
                      <div
                        className="line"
                        style={{ backgroundColor: "#FC6A59" }}
                      ></div>
                      <p
                        style={{ marginLeft: "1vh" }}
                        className="headingFontColor"
                      >
                        N/W Byte Received
                      </p>
                    </div>
                    <div className="valueDiv">
                      <p
                        className="valueFontSize"
                        style={{ marginLeft: "1.5vh" }}
                      >
                        155 Kbps
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReactTooltip id="my-tooltip" />
    </div>
  );
}
