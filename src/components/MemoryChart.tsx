import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

type MemoryChartProps = {
  memoryInfo: {
    available: number,
    total: number,
    used: number
  }
}
// const physicalMemoryData = {
//   available: "7054",
//   "buff/cache": "912",
//   free: "6466",
//   matrix: "Mem:",
//   shared: "56",
//   total: "7820",
//   used: "441",
// };


const MemoryChart: React.FC<MemoryChartProps> = ({ memoryInfo }) => {
  // / Extracting used and available memory data
  const usedMemory = Math.round(memoryInfo?.["used"]);
  const availableMemory = Math.round(memoryInfo?.["available"]);
  const totalMemory = Math.round(memoryInfo?.["total"]); // If needed for percentage calculation

  // Calculate percentage values for used and available memory
  const usedPercentage = (usedMemory / totalMemory) * 100;
  const availablePercentage = (availableMemory / totalMemory) * 100;

  // Chart data object with updated values
  const data: ChartData<"doughnut", number[], string> = {
    labels: ["Used", "Remaining"],
    datasets: [
      {
        label: "Memory Usage",
        data: [usedPercentage, availablePercentage],
        backgroundColor: ["#6ce5e8", "#41b8d5"],
        hoverBackgroundColor: ["#6ce5e8", "#41b8d5"],
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "CPU Performance",
      },
    },
    cutout: "50%", // Makes it a donut chart
  };

  return <Doughnut data={data} options={options} />;
};

export default MemoryChart;
