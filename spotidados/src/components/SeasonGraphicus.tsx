import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import useTrack from "../hooks/useTrack";
import { filtrosSazonais } from "./filtrosSazonais";

const COLORS = ["#f9d005 ", // inver
                "#e97912 ", // primv
                "#0daff2", // verao
                "#29ab4d"  // outon
              ];

export default function SeasonPieChart() {
  const tracks = useTrack();
  if (!tracks || tracks.length === 0) return <div>Loading...</div>;

  // Use your existing function
  const seasonHoursObj = filtrosSazonais(tracks);

  // Convert to array for recharts
  const data = Object.entries(seasonHoursObj).map(([season, value]) => ({
    season,
    value,
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
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}