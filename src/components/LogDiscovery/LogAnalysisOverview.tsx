import { useState, useEffect } from "react";
import Icon from "../../assets/memory.svg";
import NavBar from "../navBar";
import TableComp from "./Components/TableComponent";
import PieChart from "./Components/PieChart";
import BarChart from "./Components/BarChart";
import PCBarChart from "./Components/PCBarChart";
// import responseData from "./jsonLogs.json";
import { MdOutlineRefresh } from "react-icons/md";
import { useNavigate } from "react-router-dom";


type Timeline = "1m" | "5m" | "30m" | "1hr" | "4hr" | "1d";

type LogEntry = {
  timestamp: string;
  hostname: string;
  process: string;
  message: string;
  [key: string]: any; // Allow for any additional properties
  source: string;
};

export default function LogAnalysisOverview() {
  const [activeTimeline, setActiveTimeline] = useState<Timeline>("1d");
  const [logData, setLogData] = useState<LogEntry[]>([]);
  const [filteredLogData, setFilteredLogData] = useState<LogEntry[]>([]);
  const [loading, setLoading] = useState(true);
  // const [refetch, setRefetch] = useState(true);
  // const timelines: Timeline[] = ["1m", "5m", "30m", "1hr", "4hr", "1d"];
  const navigate = useNavigate();

  const timelineDurations: Record<Timeline, number> = {
    "1m": 1,
    "5m": 5,
    "30m": 30,
    "1hr": 60,
    "4hr": 240,
    "1d": 1440, // 1 day in minutes
  };

  useEffect(() => {
    const InvokeConsumer = async () => {
      try {
        const response = await fetch("http://10.2.0.26:5002/invokeconsumer", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
      } catch (error) {
        console.error("Failed to invoke consumer:", error);
      }
    };
    const timeoutId = setTimeout(() => {
      InvokeConsumer();
    }, 5000);
    const timeoutIds = setTimeout(() => {
      fetchLogData(activeTimeline);
    }, 6000);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timeoutIds);
      // clearInterval(intervalId);
    };
  }, []);

  const fetchLogData = async (timeline: Timeline) => {
    setLoading(true); // Set loading to true when starting to fetch
    try {
      const response = await fetch("http://10.2.0.26:5003/invokelogdata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ timeinterval: timeline }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Fetched data:", data);
      const source = "syslog";
      const filteredData = filterLogsBySource(data, source);
      setLogData(Array.isArray(filteredData) ? filteredData : []);
      setFilteredLogData(Array.isArray(filteredData) ? filteredData : []);
    } catch (error) {
      console.error("Failed to fetch log data:", error);
    } finally {
      setLoading(false); // Set loading to false after fetching completes
    }
  };

  // useEffect(() => {
  //   filterLogsByTimeline(); // Filter logs when timeline changes
  // }, [activeTimeline, logData]); // Re-filter when activeTimeline or logData changes

  const filterLogsBySource = (logs: LogEntry[], source: string) => {
    return logs.filter((entry) => entry.source === source);
  };

  const filterLogsByTimeline = () => {
    const now = new Date(); // Current time
    const durationInMinutes = timelineDurations[activeTimeline]; // Get the duration in minutes
    const startTime = new Date(now.getTime() - durationInMinutes * 60 * 1000); // Calculate start time

    // Filter logs to get those from the start time onward
    const filtered = logData.filter(
      (log) => new Date(log.timestamp) >= startTime
    );
    console.log(filtered); // Log the filtered data for debugging
    setFilteredLogData(filtered); // Set filtered log data
  };

  const uniqueProcesses = Array.from(
    new Set(logData.map((log) => log.process))
  );
  const processCount = uniqueProcesses.length;

  return (
    <div className="w-[screen] h-[100vh] flex flex-col overflow-hidden">
      <NavBar />
      <div className="flex w-screen h-[90vh] overflow-y-scroll overflow-x-hidden cursor-default">
        <div className="w-full h-[200vh] flex justify-center items-center bg-[#f2f7f8]">
          <div className="flex flex-col w-[90vw] h-[175vh] bg-[#ffffff] rounded-[1rem] gap-y-[2vh] mb-[5vh]">
            <div className="flex flex-row justify-between items-center mt-[2vh] ml-[5vh]">
              <div className="text-[#006e74] text-[1.3rem] flex flex-col w-[100%] h-auto">
                Log Analysis
              </div>
              <div className="flex gap-[2vh] h-[4vh] w-auto mr-[5vh]">
                <button
                  className="bg-[#006e74] text-[0.95rem] text-white h-[4vh] w-[8vw] rounded-md shadow-md hover:bg-[#005d63] transition-all flex items-center justify-center gap-1"
                  onClick={() => fetchLogData(activeTimeline)}
                >
                  ReFetch <MdOutlineRefresh />
                </button>
                <button
                  className="bg-[#006e74] text-[0.95rem] text-white h-[4vh] w-[8vw] rounded-md shadow-md hover:bg-[#005d63] transition-all"
                  onClick={() => navigate("/LogDetailed")}
                >
                  AnomalyLogs
                </button>
                <button
                  className="bg-[#006e74] text-[0.95rem] text-white h-[4vh] w-[8vw] rounded-md shadow-md hover:bg-[#005d63] transition-all"
                  onClick={() => navigate("/LogCluster")}
                >
                  Clusters
                </button>
              </div>
            </div>
            {loading ? ( // Show loader when loading
              <div className="flex justify-center items-start h-full mt-[15vh]">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#0097ac]"></div>
              </div>
            ) : (
              <div className="flex flex-col justify-between items-center w-[100%] gap-y-[3vh]">
                <div className="TimelineChanger flex w-[100%] h-[5vh] justify-end items-center">
                  <div className="TimeLineChangerInside flex w-[25vw] h-[5vh] mr-[5vh] items-center justify-end bg-[#F2F7F8] rounded-[1vh] cursor-default">
                    {/* {timelines.map((timeline) => (
                    <div
                      key={timeline}
                      className={`flex w-[20%] h-[100%] justify-center items-center cursor-pointer ${activeTimeline === timeline
                        ? "text-[#0097ac] bg-[#D7E0E3] rounded-[1vh]"
                        : ""
                        }`}
                      onClick={() => setActiveTimeline(timeline)}
                    >
                      {timeline}
                    </div>
                  ))} */}

                    {Object.keys(timelineDurations).map((timeline) => (
                      <div
                        key={timeline}
                        className={`flex w-[20%] h-[100%] justify-center items-center cursor-pointer ${
                          activeTimeline === timeline
                            ? "text-[#0097ac] bg-[#D7E0E3] rounded-[1vh]"
                            : ""
                        }`}
                        onClick={() => {
                          setActiveTimeline(timeline as Timeline);
                          fetchLogData(timeline as Timeline); // Call fetchLogData with the selected timeline
                          filterLogsByTimeline(); // Call filterLogsByTimeline to filter based on the new timeline
                        }}
                      >
                        {timeline}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="AllGraphsLog flex gap-x-[2vh] w-[90vw]">
                  <div className="RightMostSide flex flex-col h-[92vh] gap-y-[2vh] ml-[5vh]">
                    <div className="flex flex-col text-[#ffffff] bg-[#0097ac] rounded-[1rem] h-[30vh] w-[15vw]">
                      <div className="flex justify-between mt-[2vh]">
                        <div className="text-[1.4rem] flex ml-[2vh]">
                          Process
                        </div>
                        <img
                          className="iconDiv size-[6vh] flex mr-[2vh]"
                          src={Icon}
                          alt="computer chip signifying processes"
                        ></img>
                      </div>
                      <div className="flex text-[3rem] h-[100%] mb-[4vh] justify-center items-center">
                        {processCount}
                      </div>
                    </div>
                    <div className="flex flex-col bg-[#f2f7f8] h-[125vh] w-[15vw] rounded-[1rem] p-4">
                      <div className="text-lg font-semibold mb-4">
                        Process List
                      </div>
                      <div className="overflow-y-auto overflow-x-hidden">
                        {uniqueProcesses.map((processName, index) => (
                          <div
                            key={index}
                            className="flex flex-row w-full bg-[#D7E0E3] p-2 mb-2 rounded"
                          >
                            <div
                              className="flex justify-center items-center text-[0.9rem] leading-tight"
                              style={{
                                fontSize: "clamp(0.8rem, 1vw, 1rem)",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                maxWidth: "100%",
                              }}
                            >
                              #{index + 1}
                            </div>
                            <div
                              className="flex ml-4 justify-center items-center text-[0.9rem] leading-tight"
                              style={{
                                fontSize: "clamp(0.8rem, 1vw, 1rem)",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                maxWidth: "100%",
                              }}
                            >
                              {processName}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* <div className="MiddleSide flex flex-col h-[92vh] gap-y-[2vh]">
                  <div className="flex flex-col w-[53.5vw] h-[45vh] bg-[#F2F7F8] rounded-[1rem] justify-center items-center">
                    <div className="flex text-black text-[1.4rem] w-[98%] justify-start mt-[2vh] ml-[2vh]">Log Chart</div>
                    <BarChart logs={logData} activeTimeline={activeTimeline} />
                  </div>

                  <div className="flex flex-col w-[53.5vw] h-[45vh] bg-[#F2F7F8] rounded-[1rem] justify-center items-center">
                    <div className="flex text-black text-[1.4rem] w-[98%] justify-start mt-[2vh] ml-[2vh]">Log Chart</div>
                    <PCBarChart logs={logData} />
                  </div>
                  <div className="flex w-[53.5vw] h-[45vh] bg-[#F2F7F8] rounded-[1rem]">
                    <TableComp logs={logData} />
                  </div>
                </div>
                <div className="LeftMostSide flex flex-col h-[92vh] gap-y-[2vh] mr-[5vh]">
                  {/* <div className="flex w-[15vw] h-[30vh] bg-[#F2F7F8] rounded-[1rem]">
                    <PCBarChart logs={logData} />
                  </div> */}
                  {/* <div className="flex w-[15vw] h-[30vh] bg-[#F2F7F8] rounded-[1rem]">
                    <PieChart logs={logData} />
                  </div>
                </div> */}

                  <div className="MiddleSide flex flex-col h-[151vh] gap-y-[4vh]">
                    <div className="flex gap-x-[2vh]">
                      {" "}
                      {/* Container for row layout */}
                      <div className="flex flex-col w-[53.5vw] h-[45vh] bg-[#F2F7F8] rounded-[1rem] justify-center items-center">
                        {" "}
                        {/* Adjusted width */}
                        <div className="flex text-black text-[1.4rem] w-[98%] justify-start mt-[2vh] ml-[2vh]">
                          Log Chart
                        </div>
                        <BarChart
                          logs={filteredLogData}
                          activeTimeline={activeTimeline}
                        />
                      </div>
                      <div className="flex w-[15vw] h-[45vh] bg-[#F2F7F8] rounded-[1rem]">
                        {" "}
                        {/* Pie chart width */}
                        <PieChart logs={filteredLogData} />
                      </div>
                    </div>

                    <div className="flex flex-col w-[70vw] h-[45vh] bg-[#F2F7F8] rounded-[1rem] justify-center items-center">
                      <div className="flex text-black text-[1.4rem] w-[98%] justify-start mt-[2vh] ml-[2vh]"></div>
                      <PCBarChart logs={filteredLogData} />
                    </div>

                    <div className="flex w-[70vw] h-[53vh] bg-[#F2F7F8] rounded-[1rem]">
                      {" "}
                      {/* Increased width for table component */}
                      <TableComp logs={filteredLogData} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
