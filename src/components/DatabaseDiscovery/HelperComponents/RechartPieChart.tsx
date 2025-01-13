import { Pie, Tooltip, ResponsiveContainer, PieChart } from "recharts";

type NewDataType = {
  name: string;
  value: number;
  fill: string;
};
const RechartPieChart = ({
  active_connections,
  connection_availability,
}: {
  active_connections: number;
  connection_availability: number;
}) => {
  const data: NewDataType[] = [
    { name: "Active connections", value: active_connections, fill: "#1F74C2" },
    {
      name: "Available connections",
      value: connection_availability,
      fill: "#01B27C",
    },
  ];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <ResponsiveContainer width="60%" height="40%">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={120}
          labelLine={false}
          label={renderCustomizedLabel}
        />

        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default RechartPieChart;
