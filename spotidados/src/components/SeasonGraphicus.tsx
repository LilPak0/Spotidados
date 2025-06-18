import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import useTrack from "../hooks/useTrack";
import { filtrosSazonais } from "./filtrosSazonais";

<<<<<<< HEAD
const COLORS = ["#f9d005 ", // inver
                "#e97912 ", // primv
                "#0daff2", // verao
                "#29ab4d"  // outon
              ];
=======
const COLORS = [
  "#FFBB28", // Winter
  "#FF8042", // Spring
  "#0088FE", // Summer
  "#00C49F", // Autumn
];
>>>>>>> ccd6386c0b67d94a047b1be8d5623c6f57d52ee3

export default function SeasonPieChart() {
  const tracks = useTrack();
  if (!tracks || tracks.length === 0) return <div>Loading...</div>;

  // Get hours per season
  const seasonHoursObj = filtrosSazonais(tracks);

  // Calculate total hours
  const totalHours = Object.values(seasonHoursObj).reduce((a, b) => a + b, 0);

  // Convert to array with percentage
  const data = Object.entries(seasonHoursObj).map(([season, value]) => ({
    season,
    value: totalHours > 0 ? (value / totalHours) * 100 : 0,
  }));

  return (
    <PieChart width={400} height={300}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="season"
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        label={({ name, percent }) =>
          `${name}: ${(percent * 100).toFixed(1)}%`
        }
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip formatter={(value: number) => `${value.toFixed(1)}%`} />
      <Legend />
    </PieChart>
  );
}