import { useEffect, useState } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  Label,
} from "recharts";

type ChartPattern = {
  strokeColor: string;
  Datakey: string;
  YaxisValue: string;
};

type RechartBarChartSingleProps = {
  barData: any;
  pattern: ChartPattern;
  interval: string | undefined;
};

// const dummyData = [
//   {
//     Bytes_received: 702694,
//     Bytes_sent: 0,
//     traffic_timestamp: "2024-12-20 07:35:17",
//   },
//   {
//     Bytes_received: 705880,
//     Bytes_sent: 0,
//     traffic_timestamp: "2024-12-20 07:35:26",
//   },
//   {
//     Bytes_received: 705880,
//     Bytes_sent: 0,
//     traffic_timestamp: "2024-12-20 07:35:27",
//   },
//   {
//     Bytes_received: 712253,
//     Bytes_sent: 0,
//     traffic_timestamp: "2024-12-20 07:35:44",
//   },
//   {
//     Bytes_received: 712253,
//     Bytes_sent: 0,
//     traffic_timestamp: "2024-12-20 07:35:45",
//   },
// ];

const BarChartSingle = ({
  barData,
  interval,
}: RechartBarChartSingleProps) => {
  const [dynamicData, setDynamicData] = useState(barData);

  useEffect(() => {
    let count = 0;
    const timer = setInterval(() => {
      setDynamicData((prev: any) => {
        const lastData = prev[prev.length - 1];
        const lastTimestamp = new Date(lastData.timestamp); // Parse the timestamp
        count++;
        return [
          ...prev.slice(1),
          {
            timestamp: interval
              ? new Date(
                  lastTimestamp.getTime() + Number(interval) * 1000
                ).toISOString()
              : "2024-12-20 07:35:45",
            free_memory_mb: lastData.free_memory_mb,
            total_memory_used_mb:
              count % 10 === 0
                ? 1000
                : lastData.total_memory_used_mb +
                  Math.floor(Math.random() * 1000),
          },
        ];
      });
    }, Number(interval) * 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          //   barCategoryGap="30%"
          data={dynamicData}
          margin={{
            top: 10,
            right: 30,
            left: -10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey={"timestamp"}
            tickFormatter={(date) => new Date(date).toLocaleTimeString()}
          >
            <Label value="Time interval" offset={-3} position="insideBottom" />
          </XAxis>
          <YAxis />
          <Tooltip />
          <Legend />
          {/* <Bar
            dataKey="Bytes_received"
            fill="#01B27C"
            barSize={30}
            activeBar={<Rectangle stroke="#01B27C" />}
          /> */}

          <Bar dataKey="total_memory_used_mb" stackId="a" fill="#8884d8" />
          <Bar dataKey="free_memory_mb" stackId="a" fill="#82ca9d" />
          {/* <Bar
            dataKey="Bytes_sent"
            fill="#01B27C"
            activeBar={<Rectangle stroke="#01B27C" />}
          /> */}
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default BarChartSingle;
