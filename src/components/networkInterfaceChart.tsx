import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LogarithmicScale,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LogarithmicScale
);

interface NetworkInterfaceData {
  collision: string;
  interface: string;
  rx_bytes: string;
  tx_bytes: string;
  rx_dropped: string;
  tx_dropped: string;
  rx_errors: string;
  tx_errors: string;
  rx_packets: string;
  tx_packets: string;
}

interface NetworkInterfaceChartProps {
  data: NetworkInterfaceData;
}

const NetworkInterfaceChart: React.FC<NetworkInterfaceChartProps> = ({
  data,
}) => {
  const labels = ["Bytes", "Dropped", "Errors", "Packets"];
  const rxBytes = parseInt(data.rx_bytes, 10);
  const txBytes = parseInt(data.tx_bytes, 10);
  const rxDropped = parseInt(data.rx_dropped, 10);
  const txDropped = parseInt(data.tx_dropped, 10);
  const rxErrors = parseInt(data.rx_errors, 10);
  const txErrors = parseInt(data.tx_errors, 10);
  const rxPackets = parseInt(data.rx_packets, 10);
  const txPackets = parseInt(data.tx_packets, 10);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Received",
        data: [rxBytes, rxDropped, rxErrors, rxPackets],
        backgroundColor: "#6ce5e8",
      },
      {
        label: "Transmitted",
        data: [txBytes, txDropped, txErrors, txPackets],
        backgroundColor: "#41b8d5",
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: `Network Metrics for ${data.interface}`,
      },
    },
    scales: {
      x: {
        display: true,
      },
      y: {
        display: true,
        type: "logarithmic",
      },
    },
  };

  return (
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
        {data.interface}
      </h5>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default NetworkInterfaceChart;
