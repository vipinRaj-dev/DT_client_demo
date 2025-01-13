// src/components/PieChart.tsx
import React from "react";
import { Pie } from "react-chartjs-2";

interface LogData {
  timestamp: string;
  hostname: string;
  process: string;
  message: string;
  level?: string; // Level might not be present in all logs
  [key: string]: any; // Allow for any additional properties
}

interface PieChartProps {
  logs: LogData[];
}

const PieChart: React.FC<PieChartProps> = ({ logs }) => {
  // Group logs by level, excluding 'unknown'
  const logLevelCounts = logs.reduce(
    (acc: any, log) => {
      const level = log.level || "unknown";
      if (level !== "unknown") {
        acc[level] = (acc[level] || 0) + 1;
      }
      return acc;
    },
    { info: 0, warn: 0, error: 0 }
  );

  const chartData = {
    labels: ["Info", "Warning", "Error"],
    datasets: [
      {
        data: [logLevelCounts.info, logLevelCounts.warn, logLevelCounts.error],
        backgroundColor: ["#00CBE8", "#0097AC", "#006E74"],
        hoverBackgroundColor: ["#00CBE8", "#0097AC", "#006E74"],
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default PieChart;
