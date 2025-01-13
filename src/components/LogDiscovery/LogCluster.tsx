import React, {  useState } from "react";

import LogCard from "./Components/LogCard";
import { logs, LogEntry } from "./Constants";
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import NavBar from "../navBar";
const LogCluster: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const logsPerPage = 8;

  // useEffect(() => {
  //   axios
  //     .get("http://10.2.0.26:5000/invoke_get_cluster")
  //     .then((response) => {
  //       console.log( JSON.parse(response.data))
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
// console.log('logs',logs);

  const filteredLogs = logs.filter(
    (log) =>
      log['Cluster Sample'].toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.hostname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.count.toString().includes(searchQuery.toLowerCase()) ||
      log.cluster.toString().includes(searchQuery.toLowerCase())
  );

  const indexOfLastLog = currentPage * logsPerPage;
  const indexOfFirstLog = indexOfLastLog - logsPerPage;
  const currentLogs = filteredLogs.slice(indexOfFirstLog, indexOfLastLog);

  const totalPages = Math.ceil(filteredLogs.length / logsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-LightTealBackground min-h-screen">
      <NavBar />
      <div className="w-5/6 mx-auto ">
        <h1 className="font-semibold text-2xl tracking-wide py-5 text-[#006E74]">
          Log Cluster
        </h1>
        <div className="w-[30%] ml-auto mr-0">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Enter the Cluster Details..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <div className="flex flex-wrap justify-between mt-4">
          {currentLogs.map((log: LogEntry) => {
            return <LogCard key={log.cluster} log={log} />;
          })}
        </div>
        <div className="flex justify-between mt-4">
          <div>
            <h1>Total Clusters : {filteredLogs.length}</h1>
          </div>
          <div className="space-x-2">
            <button
              className="btn btn-xs"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              <FaLessThan />
            </button>
            <span>
              {currentPage} of {totalPages}
            </span>
            <button
              className="btn btn-xs"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              <FaGreaterThan />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogCluster;
