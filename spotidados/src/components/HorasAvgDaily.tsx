import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";
import useTrack from "../hooks/useTrack";

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
    const avg = msList.length > 0 ? msList.reduce((a, b) => a + b, 0) / msList.length / 60000 : 0;
    result.push({
      hour: `${hour}:00`,
      avgMinutes: Number(avg.toFixed(2)),
    });
  }
  return result;
}

export default function HorasAvgDaily() {
  const tracks = useTrack();
  const data = getHourlyAverages(tracks);

  return (
    <div style={{ width: "100%", height: 500 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ left: 40, right: 20, top: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            type="number"
            label={{ value: "Avg Minutes", position: "insideBottom", offset: -5 }}
          />
          <YAxis
            dataKey="hour"
            type="category"
            label={{ value: "Hour of Day", angle: -90, position: "insideLeft" }}
            tick={{ fontSize: 12 }}
            width={60}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="avgMinutes" fill="#8884d8" name="Avg Minutes" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}