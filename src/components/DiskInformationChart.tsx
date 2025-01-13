import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type DriveDetails = {
  fileSystemLabel: string;
  Mounted:string;
  used: string;
  sizeRemaining: string;
  size:string;
  healthStatus:string;
};

type DriveUsageChartProps = {
  driveDetails: DriveDetails[];
};

const DriveUsageChart: React.FC<DriveUsageChartProps> = ({ driveDetails }) => {
  // Extracting data for the chart
  const labels: string[] = [];
  const usedData: number[] = [];
  const availableData: number[] = [];

  // Process driveDetails to populate labels, usedData, and availableData
  function convertToGB(value: string) {
    const unit = value.slice(-1).toUpperCase(); // Get the last character (K, M, G, etc.)
    const num = parseFloat(value.slice(0, -1)); // Get the numerical part
  
    switch (unit) {
      case 'K':
        return num / 1000000; // Convert KB to GB
      case 'M':
        return num / 1000;     // Convert MB to GB
      case 'G':
        return num;             // GB remains as is
      case 'T':
        return num * 1000;     // Convert TB to GB
      default:
        return parseFloat(value); // Assume already in GB or no unit
    }
  }
  
  // Process driveDetails to populate labels, usedData, and availableData
  driveDetails?.forEach((drive) => {
    labels.push(drive.fileSystemLabel);
    usedData.push(convertToGB(drive.used));          // Convert used to GB
    availableData.push(convertToGB(drive.sizeRemaining)); // Convert available to GB
    console.log(drive);
  });

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Used",
        data: usedData,
        backgroundColor: "#6ce5e8",
        barThickness: 15,
        // maxBarThickness: 20,
        barPercentage: 0.5,
        categoryPercentage: 0.8,
        position:"top"
      },
      {
        label: "Available",
        data: availableData,
        backgroundColor: "#41b8d5",
        barThickness: 15,
        // maxBarThickness: 20,
        barPercentage: 0.5,
        categoryPercentage: 0.8,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        // text: "Drive Usage",
      },
    },
  };

  return (
    <div>
      <h2 className="text-teal-600 text-xl mb-4">Disk Information</h2>
      <Bar data={data} options={options} height={450} width={650} />
    </div>
  );
};

export default DriveUsageChart;
