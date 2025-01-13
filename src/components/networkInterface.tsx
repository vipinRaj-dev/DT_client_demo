import React, { useEffect, useState } from "react";
// import NavBar from "./navBar";
import Breadcrumbs from "./breadCrumbs";
import SideBar from "./sideBar";
import NetworkInterfaceChart from "./networkInterfaceChart";
// import SearchIcon from "../assets/searchIcon.svg"; // Assuming you will use it somewhere in the future
import { useDashboard } from "./dasboardContext";

const NetworkInterface: React.FC = () => {
  const [networkInfo, setNetworkInfo] = useState([]);

  const { data } = useDashboard();
  const breadcrumbItems = [
    { label: "Servers", url: "/scanResult" },
    { label: data && data["Server_IP"] ? data["Server_IP"] : "N/A" }
  ];

  useEffect(() => {
    const network = data?.["networkInfo"]
    setNetworkInfo(network);
    console.log("HERE INSIDE :", networkInfo)
  })

  // const networkInfo = [
  //   {
  //     collision: "0",
  //     interface: "br-16d6b3f4f39a",
  //     rx_bytes: "0",
  //     tx_bytes: "0",
  //     rx_dropped: "0",
  //     tx_dropped: "0",
  //     rx_errors: "0",
  //     tx_errors: "0",
  //     rx_packets: "0",
  //     tx_packets: "0",
  //   },
  //   {
  //     collision: "0",
  //     interface: "docker0",
  //     rx_bytes: "0",
  //     tx_bytes: "0",
  //     rx_dropped: "0",
  //     tx_dropped: "0",
  //     rx_errors: "0",
  //     tx_errors: "0",
  //     rx_packets: "0",
  //     tx_packets: "0",
  //   },
  //   {
  //     collision: "0",
  //     interface: "enP11403s1",
  //     tx_bytes: "58893153",
  //     rx_bytes: "22220926",
  //     rx_dropped: "0",
  //     tx_dropped: "0",
  //     rx_errors: "0",
  //     tx_errors: "0",
  //     rx_packets: "83908",
  //     tx_packets: "228381",
  //   },
  //   {
  //     collision: "0",
  //     interface: "eth0",
  //     rx_bytes: "33854918",
  //     rx_dropped: "0",
  //     rx_errors: "0",
  //     rx_packets: "179516",
  //     tx_bytes: "56972367",
  //     tx_dropped: "0",
  //     tx_errors: "0",
  //     tx_packets: "207552",
  //   },
  //   {
  //     collision: "0",
  //     interface: "eth1",
  //     rx_bytes: "9983",
  //     rx_dropped: "0",
  //     rx_errors: "0",
  //     rx_packets: "137",
  //     tx_bytes: "1988",
  //     tx_dropped: "0",
  //     tx_errors: "0",
  //     tx_packets: "19",
  //   },
  //   {
  //     collision: "0",
  //     interface: "lo",
  //     rx_bytes: "19640980",
  //     rx_dropped: "0",
  //     rx_errors: "0",
  //     rx_packets: "236089",
  //     tx_bytes: "19640980",
  //     tx_dropped: "0",
  //     tx_errors: "0",
  //     tx_packets: "100",
  //   },
  // ];

  return (
    <div className="w-screen h-screen flex flex-col">
      <SideBar />
      <div className="p-4 ml-[19vw]" style={{ overflowX: "hidden" }}>
        <Breadcrumbs items={breadcrumbItems} />
        <h2 className="text-teal-600 text-xl mb-4 ml-4 mt-4" style={{ color: "#006E74" }}>
          Network Interface Performance Metrics
        </h2>
        <div className="flex flex-wrap">
          {networkInfo?.map((item, index) => (
            <NetworkInterfaceChart key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NetworkInterface;
