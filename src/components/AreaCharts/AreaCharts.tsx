import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useUsersStore from "../../store/useUserStore";

const AreaCharts = () => {
  const { data } = useUsersStore();
  return (
    <ResponsiveContainer width="100%" height="70%" className={"mt-10"}>
      <AreaChart data={data} width={500} height={400}>
        <YAxis />
        <XAxis />
        <CartesianGrid strokeDasharray={"5 5"} />

        <Area
          type="monotone"
          dataKey="name_1"
          stroke="#8884d8"
          fill="#8884d8"
        />

        <Tooltip />
        <Legend />

        <Area
          type="monotone"
          dataKey="name_2"
          stroke="#47d926"
          fill="#47d926"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaCharts;
