import { useEffect, useState } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

type ChartPattern = {
  strokeA: string;
  strokeB: string;
  Datakey1: string;
  Datakey2: string;
  YaxisValue: string;
};

type RechartAreaChartProps = {
  AreaData: any;
  pattern: ChartPattern;
  interval: string | undefined;
};

// const data = [
//   {
//     name: 1,
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 2,
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 3,
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 4,
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 5,
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 6,
//     uv: 3200,
//     pv: 2500,
//     amt: 2600,
//   },
//   {
//     name: 7,
//     uv: 4500,
//     pv: 3100,
//     amt: 2800,
//   },
//   {
//     name: 8,
//     uv: 3800,
//     pv: 2100,
//     amt: 2900,
//   },
//   {
//     name: 9,
//     uv: 4000,
//     pv: 2700,
//     amt: 3000,
//   },
//   {
//     name: 10,
//     uv: 4200,
//     pv: 2900,
//     amt: 3100,
//   },
//   {
//     name: 6,
//     uv: 3200,
//     pv: 2500,
//     amt: 2600,
//   },
//   {
//     name: 7,
//     uv: 4500,
//     pv: 3100,
//     amt: 2800,
//   },
//   {
//     name: 8,
//     uv: 3800,
//     pv: 2100,
//     amt: 2900,
//   },
//   {
//     name: 9,
//     uv: 4000,
//     pv: 2700,
//     amt: 3000,
//   },
//   {
//     name: 10,
//     uv: 4200,
//     pv: 2900,
//     amt: 3100,
//   },
// ];

// const dummydata = [
//   {
//     Innodb_buffer_pool_bytes_data: 19938,
//     Innodb_buffer_pool_bytes_dirty: 200300,
//     timestamp: "2024-12-20 07:35:00",
//   },
//   {
//     Innodb_buffer_pool_bytes_data: 19939,
//     Innodb_buffer_pool_bytes_dirty: 400400,
//     timestamp: "2024-12-20 07:35:05",
//   },
//   {
//     Innodb_buffer_pool_bytes_data: 939328,
//     Innodb_buffer_pool_bytes_dirty: 130000,
//     timestamp: "2024-12-20 07:35:10",
//   },
//   {
//     Innodb_buffer_pool_bytes_data: 39328,
//     Innodb_buffer_pool_bytes_dirty: 338000,
//     timestamp: "2024-12-20 07:35:15",
//   },
//   {
//     Innodb_buffer_pool_bytes_data: 39328,
//     Innodb_buffer_pool_bytes_dirty: 338000,
//     timestamp: "2024-12-20 07:35:20",
//   },
// ];

const RechartAreaChart = ({
  AreaData, 
  pattern,
  interval,
}: RechartAreaChartProps) => {
  const [dynamicData, setDynamicData] = useState(AreaData);

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
      setDynamicData((prev : any) => {
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
            [pattern.Datakey1]:
              count % 10 === 0
                ? 2000
                : lastData[pattern.Datakey1] + Math.floor(Math.random() * 1000),
            [pattern.Datakey2]:
              count % 10 === 0
                ? 1000
                : lastData[pattern.Datakey2] + Math.floor(Math.random() * 2000),
          },
        ];
      });
    }, Number(interval) * 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <ResponsiveContainer width="100%" height="78%">
        <AreaChart
          data={dynamicData}
          margin={{ top: 10, right: 30, left: -15, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={pattern.strokeA} stopOpacity={0.8} />
              <stop offset="95%" stopColor={pattern.strokeA} stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={pattern.strokeB} stopOpacity={0.8} />
              <stop offset="95%" stopColor={pattern.strokeB} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="timestamp"
            tickFormatter={(date) => new Date(date).toLocaleTimeString()}
          />
          <YAxis
            tickFormatter={DataFormater}
            // label={{
            //   value: `${pattern.YaxisValue}`,
            //   position: "insideBottomLeft",
            //   angle: -90,
            // }}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey={pattern.Datakey1}
            stroke={pattern.strokeA}
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey={pattern.Datakey2}
            stroke={pattern.strokeB}
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default RechartAreaChart;
