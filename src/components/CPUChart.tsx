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

type CPUChartProps = {
  cpuInfo: {
    remaining: number;
    used: number;
  };
};

const CPUChart: React.FC<CPUChartProps> = ({ cpuInfo }) => {
  // Extract and convert data to numbers
  const cpu_rem = Math.round(cpuInfo?.["remaining"]);
  const cpu_used = Math.round(cpuInfo?.["used"]);

  // Chart data object with updated values
  const data: ChartData<"doughnut", number[], string> = {
    labels: ["Used", "Remaining"],
    datasets: [
      {
        label: "CPU Usage",
        data: [cpu_used, cpu_rem],
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

export default CPUChart;
