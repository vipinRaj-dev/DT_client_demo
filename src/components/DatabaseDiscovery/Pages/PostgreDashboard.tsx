import { IoInformationCircleOutline } from "react-icons/io5";
import postgreImg from "../../../assets/postgreimg.svg";
import { useEffect, useState } from "react";
import BarChartSingle from "../HelperComponents/BarChartSingle";
import RechartAreaChart from "../HelperComponents/RechartAreaChart";
import Smallboxes from "../HelperComponents/Smallboxes";
import RechartPieChart from "../HelperComponents/RechartPieChart";
import { PostgreeDataType, postgree } from "../Types";
import { useParams } from "react-router-dom";

const PostgreDashboard = () => {
  const [Availability, setAvailability] = useState(0);

  const [postgreeData] = useState<PostgreeDataType>(postgree);

   const { time_interval } = useParams();


  // Availability animation
  useEffect(() => {
    if (Availability < 100) {
      const timer = setInterval(() => {
        setAvailability((prev) => prev + 5);
      }, 20);

      return () => {
        clearInterval(timer);
      };
    }
  }, [Availability]);

  // const fetchLivedata = () => {
  //   axios
  //     .get("http://10.2.0.26:5008/postgresql_overview_data")
  //     .then((res) => {
  //       console.log("res : ", res.data);
  //       setPostgreeData(res.data)
  //     })
  //     .catch((err) => {
  //       console.log("err : ", err);
  //     });
  // };

  // useEffect(() => {
  //   fetchLivedata();
  //   let interval = setInterval(() => {
  //     fetchLivedata();
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);
  return (
    <div className="h-full overflow-y-scroll overflow-x-hidden scrollbar-none">
      <h2 className="text-[#006E74] text-2xl font-normal py-3">
        DB Discovery Configuration
      </h2>

      {/* heading part  */}
      <div className="flex justify-between bg-white p-3 shadow-lg rounded-md">
        <div className="flex gap-3 space-y-4 w-9/12">
          <div>
            <img className="h-20" src={postgreImg} alt="" />
          </div>
          <div>
            <h1 className="text-xl font-semibold tracking-wide">
              Server Details
            </h1>
            <div className="flex gap-3 ">
              <div>
                <p className="font-thin  text-slate-600">
                  <span className="font-normal"> Hostname </span>:
                  {postgreeData?.["server-details"].Hostname}
                </p>
                <p className="font-thin  text-slate-600">
                  <span className="font-normal">Postgres Version</span> :
                  {postgreeData?.["server-details"].postgres_version}
                </p>
              </div>
              <div>
                <p className="font-thin  text-slate-600">
                  <span className="font-normal"> Server IP</span> :{" "}
                  {postgreeData?.["server-details"].ServerIP}
                </p>
                <p className="font-thin  text-slate-600">
                  <span className="font-normal"> Postgres Port</span> :{" "}
                  {postgreeData?.["server-details"].postgres_port}
                </p>
              </div>
            </div>
            <p className="font-thin  text-slate-600">
              <span className="font-normal"> Postgres Full Version</span> :
              {postgreeData?.["server-details"].postgres_full_version}
            </p>
          </div>
        </div>

        <div className="tracking-wide text-slate-600 space-y-1">
          <p>
            Start Time:{" "}
            {
              postgreeData?.["avaialability-details"]
                .PostgreSQL_server_starttime
            }
          </p>
          <div className="flex items-center gap-1">
            <p>
              Up Time:{" "}
              {
                postgreeData?.["avaialability-details"]
                  .PostgreSQL_server_start_in_second
              }
            </p>
            <span
              className="tooltip"
              data-tip="Number of seconds the server has been up."
            >
              <IoInformationCircleOutline />
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <p>Availability : </p>
            <div className="w-[50px] rounded-md relative bg-slate-300">
              <div
                style={{
                  width: `${postgreeData?.["avaialability-details"].PostgreSQL_availability}`,
                }}
                className="h-5 bg-green-500 rounded-md flex items-center justify-center"
              >
                <div className=" text-white text-center absolute left-1">
                  {
                    postgreeData?.["avaialability-details"]
                      .PostgreSQL_availability
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* middle part  */}
      <div className="flex gap-5 mt-5 h-1/3">
        <div className="bg-white w-full shadow-lg rounded-md ">
          <h1 className=" font-semibold tracking-wide text-lg ml-5 mb-1">
            Transaction Statistics
          </h1>
          <RechartAreaChart
            AreaData={postgreeData?.["commit&rollback"]}
            pattern={{
              strokeA: "#01B27C",
              strokeB: "#1F74C2",
              Datakey1: "total_commits",
              Datakey2: "total_rollbacks",
              YaxisValue: "total_rollbacks",
            }}
            interval = {time_interval}
          />
          <div className="flex gap-5 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#01B27C]"></div>
              <p>Total Commits</p>
              <span
                className="tooltip"
                data-tip="Memory used for InnoDB buffer pool data."
              >
                <IoInformationCircleOutline />
              </span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-[#1F74C2]"></div>
              <p>Total Rollbacks</p>
              <span
                className="tooltip"
                data-tip="Memory that is dirty (pending flush)."
              >
                <IoInformationCircleOutline />
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white w-full shadow-lg rounded-md">
          <BarChartSingle
            barData={postgreeData?.memory_details}
            pattern={{
              strokeColor: "#01B27C",
              Datakey: "total_memory_used_mb",
              YaxisValue: "total_memory",
            }}
            interval = {time_interval}
          />
        </div>
      </div>

      {/* Small boxes */}
      <div>
        <Smallboxes
          values={{
            enqueue_waits: postgreeData?.Enqueue_waits.enqueue_waits as number,
            shared_buffers_mb: postgreeData?.Shared_buffer
              .shared_buffers_mb as number,
            slow_queries: postgreeData?.Slow_Query.slow_queries as number,
          }}
        />
      </div>

      {/* footer  */}
      <div className="flex gap-5 w-full mt-5 shadow-lg">
        <div className="bg-white w-full h-screen space-y-2 p-5 rounded-md">
          <h1 className="font-semibold tracking-wide text-xl mt-4 ml-3 ">
            Availability and Connections
          </h1>
          <div className="float-right font-light flex flex-col">
            <p>
              Date :
              {postgreeData &&
                new Date(
                  postgreeData?.["connection-details"].timestamp
                ).toLocaleDateString()}
            </p>
            <p>
              Time :
              {postgreeData &&
                new Date(
                  postgreeData?.["connection-details"].timestamp
                ).toLocaleTimeString()}
            </p>
          </div>
          <RechartPieChart
            active_connections={
              postgreeData?.["connection-details"].active_connections as number
            }
            connection_availability={
              postgreeData?.["connection-details"]
                .connection_availability as number
            }
          />
          <div className="float-right ">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#1F74C2]"></div>
              <h1>Active Connections</h1>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#01B27C]"></div>
              <h1>Available Connection</h1>
            </div>
          </div>
          <h1 className="p-10">
            *Maximum Connections:{" "}
            {postgreeData?.["connection-details"].max_connections}
          </h1>

          <div className="flex gap-5 w-full">
            <div className="rounded-md shadow-md w-full p-5 bg-[#D7E0E3]">
              <div className="flex text-xl">
                <h1>Transaction QPS :</h1>
                <p className="ml-2">
                  {postgreeData?.transaction_details.Transaction_QPS}
                </p>
              </div>
            </div>
            <div className="rounded-md shadow-md w-full p-5 bg-[#D7E0E3]">
              <div className="flex text-xl">
                <h1>Slow Queries :</h1>
                <p className="ml-2"> {postgreeData?.Slow_Query.slow_queries}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white w-full h-screen space-y-2 p-5 rounded-md">
          <h1 className="font-semibold tracking-wide text-xl mt-4  ">
            Tables Disk Usage
          </h1>
          <div className="flex flex-col float-right pb-6">
            <p className="font-light float-right ">
              Date :
              {postgreeData &&
                new Date(
                  Object.entries(
                    postgreeData?.["db-diskdetails"]
                  ).pop()?.[1] as string
                ).toLocaleDateString()}
            </p>
            <p className="font-light float-right ">
              Time :
              {postgreeData &&
                new Date(
                  Object.entries(
                    postgreeData?.["db-diskdetails"]
                  ).pop()?.[1] as string
                ).toLocaleTimeString()}
            </p>
          </div>

          {postgreeData &&
            Object.entries(postgreeData?.["db-diskdetails"])
              .slice(1, -1)
              .map((value, index) => (
                <div
                  key={index}
                  className="flex justify-between w-full p-5 px-20 bg-[#D7E0E3] rounded-md shadow-md"
                >
                  <p>{value[0]}</p>
                  <p>{value[1]}</p>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default PostgreDashboard;
