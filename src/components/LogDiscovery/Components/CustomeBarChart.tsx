import { Bar } from "react-chartjs-2";
import { ChartOptions } from "chart.js";

export type HourlyLogCount = {
  hour: number;
  count: number;
};
export type CustomeBarChartProps = {
  chartData: HourlyLogCount[];
};

const CustomeBarChart = ({ chartData }: CustomeBarChartProps) => {
  const data = {
    labels: chartData.map((data) => `${data.hour} to ${data.hour + 1} hrs`),
    datasets: [
      {
        label: "Cluster Count",
        data: chartData.map((data) => data.count),
        backgroundColor: "#006E74",
        barThickness: 40,
      },
    ],
  };
  

  const options: ChartOptions<"bar"> = {
    plugins: {
      title: {
        display: true,
        text: "Cluster Log Counts by Hour",
      },
      legend: {
        display: true,
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `Cluster count: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Hour",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Count",
        },
      },
    },
    animation: {
      duration: 2000,
      easing: "easeInOutBounce",
    },
  };

  return (
   <div style={{ width: "800px", height: "400px" }}>
      <Bar data={data} options={options} width={1000} height={500} />
    </div>
  );
};

export default CustomeBarChart;
