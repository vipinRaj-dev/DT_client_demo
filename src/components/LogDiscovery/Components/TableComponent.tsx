import React, { useState } from "react";

type LogEntry = {
  timestamp: string;
  hostname: string;
  process: string;
  message: string;
  source: string;
};

type LogTableProps = {
  logs: LogEntry[];
};

const TableComp: React.FC<LogTableProps> = ({ logs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const logsPerPage = 10;

  // Calculate the index of the first and last logs on the current page
  const indexOfLastLog = currentPage * logsPerPage;
  const indexOfFirstLog = indexOfLastLog - logsPerPage;
  const currentLogs = logs.slice(indexOfFirstLog, indexOfLastLog);

  const totalPages = Math.ceil(logs.length / logsPerPage);

  // Handlers for pagination
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const formatDate = (timestamp: string) => {
    const cleanedTimestamp = timestamp.replace(/\s+/g, "");
    const date = new Date(cleanedTimestamp);
    if (isNaN(date.getTime())) {
      return "Invalid Date";
    }
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    const time = date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    return `${day}${getOrdinalSuffix(day)} ${month} ${year}, ${time}`;
  };

  const getOrdinalSuffix = (day: number) => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return (
    <div className="flex flex-col w-full h-[53vh]">
      <div className="max-w-full bg-white border border-gray-300 rounded w-full overflow-auto">
        <table className="min-w-full w-full">
          <thead
            className="bg-white sticky top-0 z-10"
            style={{ backgroundColor: "#F2F7F8", color: "#003C51" }}
          >
            <tr>
              <th className="py-2 px-4 border-b">Timestamp</th>
              <th className="py-2 px-4 border-b">Hostname</th>
              <th className="py-2 px-4 border-b">Process</th>
              <th className="py-2 px-4 border-b">Message</th>
              <th className="py-2 px-4 border-b">Source</th>
            </tr>
          </thead>
          <tbody>
            {currentLogs.map((log, index) => (
              <tr key={index}>
                <td className="text-[13px] py-2 px-4 border-b">
                  {formatDate(log.timestamp)}
                </td>
                <td className="text-[13px] py-2 px-4 border-b">{log.hostname}</td>
                <td className="text-[13px] py-2 px-4 border-b">{log.process}</td>
                <td className="text-[13px] py-2 px-4 border-b">{log.message}</td>
                <td className="text-[13px] py-2 px-4 border-b">{log.source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination controls */}
      <div className="flex h-[40vh] w-[70vw] items-center justify-center space-x-2 overflow-hidden">
        <button
          onClick={handlePrevPage}
          className={`py-2 px-4 bg-gray-200 rounded hover:bg-gray-300 ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span>Page</span>
        <input
          type="number"
          value={currentPage}
          min={1}
          max={totalPages}
          onChange={(e) => handlePageChange(Number(e.target.value))}
          className="w-16 text-center border rounded"
        />

        <span>of {totalPages}</span>

        <button
          onClick={handleNextPage}
          className={`py-2 px-4 bg-gray-200 rounded hover:bg-gray-300 ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TableComp;