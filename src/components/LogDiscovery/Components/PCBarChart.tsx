// src/components/ProcessLogCountChart.tsx
import React from "react";
import { Bar } from "react-chartjs-2";

interface LogData {
  timestamp: string;
  hostname: string;
  process: string;
  message: string;
  [key: string]: any; // Allow for any additional properties
}

interface ProcessLogCountChartProps {
  logs: LogData[];
}

const PCBarChart: React.FC<ProcessLogCountChartProps> = ({ logs }) => {
  // Group logs by process
  const processCounts = logs.reduce((acc: any, log) => {
    acc[log.process] = (acc[log.process] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(processCounts).map(label =>
      label
    ),
    datasets: [
      {
        label: "Logs per Process",
        data: Object.values(processCounts),
        backgroundColor: "#00CBE8",
        borderColor: "#00CBE8",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          autoSkip: false,
          maxRotation: 90,
          minRotation: 10,
          font: {
            size: 10, // Adjust font size for better readability
            family: 'Arial, sans-serif', // Change font family if desired
          },
          padding: 5, // Add padding between labels and the axis
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 10,
            family: 'Arial, sans-serif',
          },
        },
      },
    }
  };

  return <Bar data={chartData} options={options} />;
};

export default PCBarChart;
