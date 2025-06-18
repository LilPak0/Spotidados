import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import useTrack from "../hooks/useTrack";
import { filtrosSazonais } from "./filtrosSazonais";

const COLORS = ["#0daff2", // inver
                "#29ab4d", // primv
                "#f9d005", // verao
                "#e97912"  // outon
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