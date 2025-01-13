import sqlImg from "../../../assets/mysqlImage.png";
import { IoInformationCircleOutline } from "react-icons/io5";
import RechartBarChart from "../HelperComponents/BarChartDouble";
import { useEffect, useState } from "react";
import RechartAreaChart from "../HelperComponents/RechartAreaChart";
import { newData, NewDataType } from "../Types";
import { useParams } from "react-router-dom";

const SqlDashBoard = () => {
  const [Availability, setAvailability] = useState(0);

  const [LiveData, ] = useState<NewDataType>(newData);
  const [areaData] = useState<NewDataType["memory-size"]>(newData["memory-size"]);

  const { time_interval } = useParams();

  // const removeDuplicatesAndPushDistinctValues = <
  //   T extends { timestamp?: string }
  // >(
  //   incomingArr: T[],
  //   currentData: T[],
  //   setData: (data: T[]) => void
  // ) => {
  //   // Combine existing data with incoming data
  //   const combinedArr = [...currentData, ...incomingArr];

  //   // Filter unique elements based on `timestamp`
  //   const uniqueElements = combinedArr.reduce((acc, item) => {
  //     if (
  //       item.timestamp &&
  //       !acc.some((el) => el.timestamp === item.timestamp)
  //     ) {
  //       acc.push(item);
  //     }
  //     return acc;
  //   }, [] as T[]);

  //   // Update the state with the last 5 unique elements
  //   setData(uniqueElements.slice(-5));
  // };

  // const fetchLivedata = async () => {
  //   await axios
  //     .get<NewDataType>("http://10.2.0.26:5006/mysql_overview_data")
  //     .then((res) => {
  //       console.log("fetchdata res", res.data);
  //       removeDuplicatesAndPushDistinctValues(
  //         res.data["traffic-info"],
  //         bardata,
  //         setBarData
  //       );

  //       removeDuplicatesAndPushDistinctValues(
  //         res.data["memory-size"],
  //         areaData,
  //         setAreadata
  //       );

  //       // setAreadata(res.data["memory-size"]);
  //       setLiveData(res.data);
  //       setAvailability(res.data.uptime.availability );
  //     })
  //     .catch((err) => {
  //       console.log("fetchdata err : ", err);
  //     });
  // };

  // useEffect(() => {
  //   fetchLivedata();
  //   let interval = setInterval(() => {
  //     fetchLivedata();
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);

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
  return (
    <div className="h-full">
      <h2 className="text-[#006E74] text-2xl font-normal py-3">
        DB Discovery Configuration
      </h2>

      {/* heading part  */}
      <div className="flex justify-between bg-white p-3 shadow-lg rounded-md">
        <div className="flex gap-3 space-y-4">
          <div>
            <img className="h-20" src={sqlImg} alt="" />
          </div>
          <div>
            <h1 className="text-xl font-semibold tracking-wide">
              Server Details
            </h1>
            <div className="flex gap-3 ">
              <div>
                <p className="font-thin  text-slate-600">
                  Name: {LiveData?.server_details["Server Name (VM Name)"]}
                </p>
                <p className="font-thin  text-slate-600">
                  IP Address: {LiveData?.server_details.IP_Address}
                </p>
              </div>
              <div>
                <p className="font-thin  text-slate-600">
                  Port : {LiveData?.server_details.port}
                </p>
                <p className="font-thin  text-slate-600">
                  Version : {LiveData?.server_details.VERSION}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="tracking-wide text-slate-600 space-y-1">
          <p>Start Time: {LiveData.uptime.mysql_start_time}</p>
          <div className="flex items-center gap-1">
            <p>Up Time: {LiveData.uptime.Uptime}</p>
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
                style={{ width: `${Availability}%` }}
                className="h-5 bg-green-500 rounded-md flex items-center justify-center"
              >
                <div className="absolute text-white">{Availability}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* middle part  */}
      <div className="flex gap-5 mt-5 h-1/3">
        <div className="bg-white w-full shadow-lg rounded-md ">
          <h1 className=" font-semibold tracking-wide text-lg ml-5 mb-1">
            Memory Usage Status
          </h1>
          <RechartAreaChart
            AreaData={areaData}
            pattern={{
              strokeA: "#77CD68",
              strokeB: "#FC6A59",
              Datakey1: "Innodb_buffer_pool_bytes_data",
              Datakey2: "Innodb_buffer_pool_bytes_dirty",
              YaxisValue: "Innodb buffer pool bytes",
            }}
            interval = {time_interval}
          />
          <div className="flex gap-5 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#FC6A59]"></div>
              <p>Innodb buffer Pool Bytes Data</p>
              <span
                className="tooltip"
                data-tip="Memory used for InnoDB buffer pool data."
              >
                <IoInformationCircleOutline />
              </span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-[#77CD68]"></div>
              <p>Innodb buffer Pool Bytes Dirty</p>
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
          <h1 className=" font-semibold tracking-wide text-lg ml-5 mb-1">
            Transaction Statistics
          </h1>
          <RechartBarChart interval={time_interval} />
        </div>
      </div>

      {/* footer portion */}
      <div className="flex justify-between gap-5 mt-5 h-full ">
        <div className="bg-white w-full h-48 shadow-lg rounded-md flex items-center">
          <div className="w-3/5 ml-8">
            <h1 className="font-semibold text-lg tracking-wide mb-3">
              Database Disk Usage
            </h1>
            <p className="text-slate-500 ">MySQL:</p>
            <p className="text-slate-500">Information Schema:</p>
            <p className="text-slate-500">Performance Schema:</p>
            <p className="text-slate-500">Sys:</p>
            <p className="text-slate-500">Discovery Tool: </p>
          </div>
          <div className="w-2/5 ">
            <p className="text-slate-500 font-thin mb-4">
              Timestamp: {LiveData["db-diskdetails"].timestamp}
            </p>
            <p className="text-slate-500">
              {LiveData["db-diskdetails"].mysql} GB
            </p>
            <p className="text-slate-500">
              {LiveData["db-diskdetails"].information_schema} GB
            </p>
            <p className="text-slate-500">
              {LiveData["db-diskdetails"].performance_schema} GB
            </p>
            <p className="text-slate-500">
              {LiveData["db-diskdetails"].sys} GB
            </p>
            <p className="text-slate-500">
              {LiveData["db-diskdetails"].discoverytool} GB
            </p>
          </div>
        </div>
        <div className="bg-white w-full h-48  shadow-lg rounded-md">
          <div className="flex h-full justify-around items-center">
            <div className=" space-y-8 ">
              <div className="flex flex-col items-center space-y-2">
                <h1 className="font-semibold tracking-wide text-xl">Latency</h1>
                <p className="text-slate-400 ">
                  Timestamp:{LiveData.latency.timestamp}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <h1 className="font-semibold tracking-wide text-xl">
                  Slow Queries
                </h1>
                <h1 className="text-2xl text-green-600">
                  {LiveData.latency.Slow_queries}
                </h1>
              </div>
            </div>
            <div className=" space-y-8">
              <div className=" flex flex-col items-center space-y-2">
                <h1 className="font-semibold tracking-wide text-xl">
                  Throughput(QPS)
                </h1>
                <p className="text-slate-400 ">
                  Timestamp: {LiveData.throughput.timestamp}
                </p>
              </div>
              <div className=" flex flex-col items-center space-y-2">
                <h1 className="font-semibold tracking-wide text-xl">Queries</h1>
                <h1 className="text-2xl text-blue-600">
                  {LiveData.throughput.Queries}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SqlDashBoard;
