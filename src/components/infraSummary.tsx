import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./CustomCss/infraSummary.css";
import NavBar from "./navBar";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Tooltips from "./Tooltip";

import winodowsLogo from "../assets/windowslogo.svg";
import linuxLogo from "../assets/linuxlogo.svg";
import {
  InfraData,
} from "../Store/Slices/InfraSummarySlice";
import Loading from "./HelperComponents/Loading";
import { infraDashboardDemoData } from "../constants/InfraDashboard";
// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

type CardType = "activeServers" | "inactiveServers";


export default function InfraSummary() {
  const navigate = useNavigate();
  const [isFlipped, setIsFlipped] = useState<Record<CardType, boolean>>({
    activeServers: false,
    inactiveServers: false,
  });

  const [infraData, setData] = useState<InfraData | null>();
  // const [reFetch, setReFetch] = useState(false);

  const [isLoading, setLoading] = useState(true);

  const [isFirstLoadingHappend, setIsFirstLoadingHappend] = useState(() => {
    const isFirst = sessionStorage.getItem("isFirstLoadingHappend");

    return isFirst === "yes" ? "yes" : "no";
  });

  useEffect(() => {
    setTimeout(() => {
      if (isFirstLoadingHappend === "no") {
        sessionStorage.setItem("isFirstLoadingHappend", "yes");
        setIsFirstLoadingHappend("yes");
      }
      setData(infraDashboardDemoData);
      setLoading(false);
    }, 1000);
  }, []);

  const navigateToHistory = async () => {
    navigate("/scanHistory");
  };

  const handleFlip = (card: CardType) => {
    setIsFlipped((prev) => ({
      ...prev,
      [card]: !prev[card],
    }));
  };

  const handleRowClick = async (data: any) => {
    console.log(data);

    const idFromHistory = {
      id: data?.id,
    };

    if (idFromHistory) {
      navigate("/dashboard", { state: { idFromHistory: idFromHistory } });
    } else {
      console.error("First API request returned false status.");
    }
  };

  const pieData = {
    labels: ["Low", "Medium", "High"],
    datasets: [
      {
        label: "Server Count",
        data: [
          infraData?.cpu_aggregate?.low,
          infraData?.cpu_aggregate?.medium,
          infraData?.cpu_aggregate?.high,
        ],
        backgroundColor: ["#1EEBF6", "#1BCCD6", "#02B7C1"],
        hoverBackgroundColor: ["#1EEBF6", "#1BCCD6", "#02B7C1"],
      },
    ],
  };

  // Options for the pie chart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right" as const, // Corrected here
      },
    },
  };

  const parseTimestamp = (timestamp: string) => {
    let date;
    if (timestamp.includes("GMT")) {
      // RFC 1123 format
      date = new Date(timestamp);
    } else if (timestamp.includes(" ")) {
      // ISO 8601-like format with space
      date = new Date(timestamp.replace(" ", "T"));
    } else {
      // ISO 8601 format
      date = new Date(timestamp);
    }

    // Extract parts
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    const hours12 = hours % 12 || 12; // Convert 0 to 12 for 12 AM

    // Pad minutes and seconds with leading zeros
    const minutesPadded = minutes.toString().padStart(2, "0");
    const secondsPadded = seconds.toString().padStart(2, "0");

    return `${day} ${month} ${year}, ${hours12}:${minutesPadded}:${secondsPadded} ${ampm} IST`;
  };

  return (
    <div
      className="w-screen h-screen flex flex-col relative"
      style={{ overflowX: "hidden" }}
    >
      <NavBar />
      {/* <div>{isError && <NetworkError />}</div> */}

      <div>{isFirstLoadingHappend === "no" && <Loading />}</div>

      <div className="relative">
        <h2
          className="text-[#006e74] text-[1.5rem] ml-[6vw] mt-8 cursor-default"
          style={{ color: "#006E74" }}
        >
          Infrastructure Summary
        </h2>

        {/* {reFetch && (
          <div className="flex absolute top-0 left-[45%]">
            <button className="btn">
              <span className="loading loading-spinner"></span>
              Refetching latest data
            </button>
          </div>
        )} */}

        <div className="flex justify-center w-full min-w-[100vw] p-4">
          <div className="flex gap-4  w-[90%] mx-auto h-[70vh]">
            <div className="flex flex-col gap-4  w-5/12 h-full">
              <div className="flex gap-4">
                {isLoading ? (
                  <>
                    <div className="bg-[#F2F7F8] p-4 w-2/4 h-[250px] flex flex-col items-center justify-center">
                      <div className="skeleton w-full h-full"></div>
                    </div>
                    <div className="bg-[#F2F7F8] p-4 w-2/4 h-[250px] flex flex-col items-center justify-center">
                      <div className="skeleton w-full h-full"></div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-[#F2F7F8] p-4 w-2/4 h-[250px] flex flex-col items-center justify-around cursor-default rounded-[1rem]">
                      <h3 className="text-2xl text-[#003C51] w-[100%] justify-start">
                        Windows
                      </h3>
                      <p className="text-6xl text-[#231F20] ">
                        {infraData?.windows_count}
                      </p>
                      <div className=" w-full">
                        <img
                          className="float-right"
                          src={winodowsLogo}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="bg-[#F2F7F8] p-4 w-2/4 h-[250px] flex flex-col items-center justify-around cursor-default rounded-[1rem]">
                      <h3 className="text-2xl text-[#003C51]  w-[100%] justify-start">
                        Linux
                      </h3>
                      <p className="text-6xl text-[#231F20]  ">
                        {infraData?.linux_count}
                      </p>
                      <div className=" w-full">
                        <img className="float-right" src={linuxLogo} alt="" />
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="flex gap-4">
                <div className="flex w-1/2  gap-4 ">
                  <div
                    className={`flip-card ${
                      isFlipped.activeServers ? "flipped" : ""
                    }`}
                    onClick={() => handleFlip("activeServers")}
                  >
                    {isLoading ? (
                      <div className="flip-card-inner">
                        <div className="flip-card-front bg-[#F2F7F8] p-4 w-full h-full flex flex-col items-center justify-center cursor-pointer rounded-[1rem]">
                          <div className="skeleton w-full h-full"></div>
                        </div>
                      </div>
                    ) : (
                      <div className="flip-card-inner">
                        <div className="flip-card-front bg-[#F2F7F8] p-4 w-full h-full flex flex-col items-center justify-between cursor-pointer rounded-[1rem]">
                          <h3
                            className="text-xl text-[#003C51] flex w-[100%] justify-start text-[1rem]"
                            style={{ textAlign: "center" }}
                          >
                            Active Servers
                          </h3>
                          <p className="text-6xl text-[#231F20] flex mb-[7vh]">
                            {infraData?.active_list?.length}
                          </p>
                        </div>
                        <div className="flip-card-back bg-[#F2F7F8] p-4 w-full h-full flex flex-col items-center justify-between cursor-pointer rounded-[1rem]">
                          <h3 className="text-[0.9rem] text-[#003C51]">
                            Active Servers List
                          </h3>
                          <ul>
                            {infraData?.active_list?.map((ip, index) => (
                              <li className="text-[#231F20]" key={index}>
                                {ip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>

                  <div
                    className={`flip-card ${
                      isFlipped.inactiveServers ? "flipped" : ""
                    }`}
                    onClick={() => handleFlip("inactiveServers")}
                  >
                    {isLoading ? (
                      <div className="flip-card-inner">
                        <div className="flip-card-front bg-[#F2F7F8] p-4 w-full h-full flex flex-col items-center justify-center cursor-pointer rounded-[1rem]">
                          <div className="skeleton w-full h-full"></div>
                        </div>
                      </div>
                    ) : (
                      <div className="flip-card-inner">
                        <div className="flip-card-front bg-[#F2F7F8] p-4 w-full h-full flex flex-col items-center justify-between cursor-pointer rounded-[1rem]">
                          <h3 className="text-xl text-[#003C51] flex w-[100%] justify-start text-[0.94rem]">
                            Inactive Servers
                          </h3>
                          <p className="text-6xl text-[#231F20] flex mb-[7vh]">
                            {infraData?.inactive_list?.length}
                          </p>
                        </div>
                        <div className="flip-card-back bg-[#F2F7F8] p-4 w-full h-full flex flex-col items-center justify-between cursor-pointer rounded-[1rem]">
                          <h3 className="text-[0.9rem] text-[#003C51]">
                            Inactive Servers List
                          </h3>
                          <ul className="flex-c mb-[7vh]">
                            {infraData?.inactive_list?.map((ip, index) => (
                              <li className="text-[#231F20]" key={index}>
                                {ip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-[#F2F7F8] p-4 w-1/2 h-[250px] flex flex-col items-center justify-between rounded-[1rem]">
                  <div className="text-lg text-[#003C51] w-[100%] flex justify-start">
                    CPU Usage
                  </div>
                  {isLoading ? (
                    <div className="skeleton w-full h-full"></div>
                  ) : (
                    <div
                      className="w-full h-full"
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "400px",
                      }}
                    >
                      <Pie data={pieData} options={options} />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="bg-[#F2F7F8] p-4 w-7/12  rounded-[1rem]">
              <Tooltips message={"Click here to view scan history"}>
                <h3
                  className="text-lg mb-4 cursor-pointer"
                  style={{ color: "#003C51" }}
                  onClick={navigateToHistory}
                >
                  Previous Discovery
                </h3>
              </Tooltips>

              {isLoading ? (
                <div className="skeleton w-full h-[90%] "></div>
              ) : (
                <div className="overflow-x-auto h-full">
                  <table className="table w-full border-separate border-spacing-0">
                    <thead>
                      <tr className="bg-[#D7E0E3] text-[#003C51]">
                        <th className="py-2 px-4">IP</th>
                        <th className="py-2 px-4">Network</th>
                        <th className="py-2 px-4">Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {infraData &&
                        infraData?.main_list.map((item) => (
                          <tr
                            key={item.id}
                            className="border-b border-[#D7E0E3] tablestyle"
                            onClick={() => handleRowClick(item)}
                            style={{ cursor: "pointer" }}
                          >
                            <td className="pt-[0.5rem] pb-[0.25rem] px-4 border-b border-[#D7E0E3]">
                              {item.server_ip}
                            </td>
                            <td className="pt-[0.5rem] pb-[0.25rem] px-4 border-b border-[#D7E0E3] opacity-[0.7]">
                              {item.server_os}
                            </td>
                            <td className="pt-[0.5rem] pb-[0.25rem] px-4 border-b border-[#D7E0E3] opacity-[0.7]">
                              {parseTimestamp(item.timestamp)}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
