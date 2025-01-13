import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface DiskPerformanceData {
  Device: string;
  iops_read: string;
  iops_write: string;
  tps: string;
}

interface DiskPerformanceChartProps {
  data: DiskPerformanceData;
}

const DiskPerformanceMatrix: React.FC<DiskPerformanceChartProps> = ({
  data,
}) => {
  const labels = ["Write IOPS", "Read IOPS", "Throughput"];
  const write = parseInt(data.iops_write, 10);
  const read = parseInt(data.iops_read, 10);
  const throughput = parseInt(data.tps, 10);

  const chartData = {
    labels,
    datasets: [
      {
        label: data.Device,
        data: [write, read, throughput],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
        text: `Disk Performance for ${data.Device}`,
      },
    },
    scales: {
      r: {
        grid: {
          circular: true,
        },
        suggestedMin: 0,
        suggestedMax: Math.max(write, read, throughput) * 1.1, // Adjust the max value to add some padding
      },
    },
  };

  return (
    // <div className="card p-4 rounded-lg bg-white m-2" style={{ width: "310px" }}>
    //   <h3 className="text-lg font-semibold mb-4">{data.Device}</h3>
    //   <Radar data={chartData} options={options} />
    // </div>
    <div
      className="card p-4 rounded-lg bg-white m-2"
      style={{ width: "300px", border: "1px solid #fef3f3" }}
    >
      <h5
        className="text-sm font-semibold mb-4"
        style={{
          color: "#003C51",
          backgroundColor: "#F2F7F8",
          padding: "5px 10px",
          borderRadius: "8px 8px 0px 0px",
          marginTop: "-17px",
          marginLeft: "-17px",
          width: "300px",
        }}
      >
        {data.Device}
      </h5>
      <Radar data={chartData} options={options} />
    </div>
  );
};

export default DiskPerformanceMatrix;
