import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend, Cell } from "recharts";
import useTrack from "../hooks/useTrack";

// Helper to assign color based on hour
function getBarColor(hour) {
  // Night: 0-5, 22-23; Morning: 6-11; Afternoon: 12-17; Evening: 18-21
  if (hour >= 0 && hour <= 5) return "#459ed6"; // dark blue
  if (hour >= 6 && hour <= 11) return "#459ed6"; // light beige
  if (hour >= 12 && hour <= 17) return "#459ed6"; // soft purple
  if (hour >= 18 && hour <= 21) return "#459ed6"; // medium dark
  return "#459ed6"; // fallback for 22-23
}

// Group by hour of day and calculate average play time per hour
function getHourlyAverages(tracks) {
  const hourMap = new Map<number, number[]>();
  tracks.forEach((track) => {
    if (!track.playedAt || !track.msPlayed) return;
    const hour = new Date(track.playedAt).getHours(); // 0-23
    if (!hourMap.has(hour)) hourMap.set(hour, []);
    hourMap.get(hour)!.push(track.msPlayed);
  });

  const result = [];
  for (let hour = 0; hour < 24; hour++) {
    const msList = hourMap.get(hour) || [];
    const avg = msList.length > 0 ? msList.reduce((a, b) => a + b, 0) / msList.length / 6000 : 0;
    result.push({
      hour: `${hour}:00`,
      avgMinutes: Number(avg.toFixed(2)),
      color: getBarColor(hour),
      hourNum: hour,
    });
  }
  return result;
}

export default function HorasAvgDaily() {
  const tracks = useTrack();
  const data = getHourlyAverages(tracks);

  return (
    <div style={{ width: "100%", height: 700 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          layout="vertical"
          barSize={50} // wider bars
          margin={{ left: 0, right: 20, top: 20, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            type="number"
          />
          <YAxis
            dataKey="hour"
            type="category"
            tick={{ fontSize: 16 }}
            width={80}
          />
          <Tooltip />
          
          <Bar dataKey="avgMinutes" name="Avg Minutes">
            {data.map((entry, idx) => (
              <Cell key={`cell-${idx}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}