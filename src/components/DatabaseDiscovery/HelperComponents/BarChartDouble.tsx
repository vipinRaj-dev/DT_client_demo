import { useEffect, useState } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Rectangle,
  Bar,
  Label,
} from "recharts";

const dummyData = [
  {
    Bytes_received: 1000,
    Bytes_sent: 2000,
    traffic_timestamp: "2024-12-20 07:35:00",
  },
  {
    Bytes_received: 2000,
    Bytes_sent: 3000,
    traffic_timestamp: "2024-12-20 07:35:05",
  },
  {
    Bytes_received: 500,
    Bytes_sent: 5000,
    traffic_timestamp: "2024-12-20 07:35:10",
  },
  {
    Bytes_received: 8000,
    Bytes_sent: 6000,
    traffic_timestamp: "2024-12-20 07:35:15",
  },
  {
    Bytes_received: 5122,
    Bytes_sent: 7500,
    traffic_timestamp: "2024-12-20 07:35:20",
  },
];

const BarChartDouble = ({ interval }: { interval: string | undefined }) => {
  const [dynamicData, setDynamicData] = useState(dummyData);
  const DataFormater = (number: number) => {
    // console.log(number);

    if (number > 1000000000) {
      return (number / 1000000000).toString() + "B";
    } else if (number > 1000000) {
      return (number / 1000000).toString() + "M";
    } else if (number > 1000) {
      return (number / 1000).toString() + "K";
    } else {
      return number.toString();
    }
  };

  useEffect(() => { 
    let count = 0;
    const timer = setInterval(() => {
      setDynamicData((prev) => {
        const lastData = prev[prev.length - 1];
        const lastTimestamp = new Date(lastData.traffic_timestamp); // Parse the timestamp
        count++;
        return [
          ...prev.slice(1),
          {
            traffic_timestamp: interval
              ? new Date(
                  lastTimestamp.getTime() + Number(interval) * 1000
                ).toISOString()
              : "2024-12-20 07:35:45",
            Bytes_received:
              count % 10 === 0
                ? 1000
                : lastData.Bytes_received + Math.floor(Math.random() * 1000),
            Bytes_sent:
              count % 10 === 0
                ? 1000
                : lastData.Bytes_sent + Math.floor(Math.random() * 1000),
          },
        ];
      });
    }, Number(interval) * 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={dynamicData}
          margin={{
            top: 10,
            right: 30,
            left: -20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey={"traffic_timestamp"}
            tickFormatter={(date) => new Date(date).toLocaleTimeString()}
          >
            <Label value="Time interval" offset={-3} position="insideBottom" />
          </XAxis>
          <YAxis
            tickFormatter={DataFormater}
            // label={{
            //   value: "Bytes",
            //   position: "insideLeft",
            //   angle: -90,
            // }}
          />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="Bytes_received"
            fill="#1F74C2"
            activeBar={<Rectangle stroke="#1F74C2" />}
          />
          <Bar
            dataKey="Bytes_sent"
            fill="#01B27C"
            activeBar={<Rectangle stroke="#01B27C" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default BarChartDouble;
