import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import useTrack from "../hooks/useTrack";
import { filtrosSazonais } from "./filtrosSazonais";

const COLORS = ["#f9d005 ", // inver
                "#e97912 ", // primv
                "#0daff2", // verao
                "#29ab4d"  // outon
              ];

export default function SeasonGraphicus() {
  const tracks = useTrack();
  if (!tracks || tracks.length === 0) return <div>Loading...</div>;

  // Use your existing function
  const seasonHoursObj = filtrosSazonais(tracks);

  // Convert to array for recharts
  const data = Object.entries(seasonHoursObj).map(([season, value]) => ({
    season,
    value,
  }));

  let totalHours = 0; 

  for (let index = 0; index < data.length; index++) {
    totalHours += data[index].value
  }

  console.log(totalHours);

  const dataPercente = data.map((obj) => {
      obj.value = Math.round(100 * obj.value / totalHours * 10) / 10
  })
  
  console.log(data)

  return (
    <PieChart width={400} height={170}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="season"
        cx="50%"
        cy="50%"
        outerRadius={50}
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