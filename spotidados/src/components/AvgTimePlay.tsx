import React from "react";
import useTrack from "../hooks/useTrack";

function getDayString(dateStr?: string) {
  if (!dateStr) return "";
  return dateStr.split("T")[0]; // "YYYY-MM-DD"
}

export default function AvgMinutesPerDay() {
  const tracks = useTrack();

  if (!tracks || tracks.length === 0) return <span>Loading...</span>;

  // 1. Filter unskipped tracks
  const notSkipped = tracks.filter(
    (track) => !track.skipped && track.msPlayed && track.playedAt
  );

  // 2. Group by day and sum minutes
  const minutesPerDay: Record<string, number> = {};
  notSkipped.forEach((track) => {
    const day = getDayString(track.playedAt);
    const minutes = (track.msPlayed || 0) / 1000 / 60;
    minutesPerDay[day] = (minutesPerDay[day] || 0) + minutes;
  });

  // 3. Calculate average minutes per day
  const dayCounts = Object.keys(minutesPerDay).length;
  const totalMinutes = Object.values(minutesPerDay).reduce((a, b) => a + b, 0);
  const avgMinutesPerDay = dayCounts > 0 ? totalMinutes / dayCounts : 0;

  return (
    <span>
<<<<<<< HEAD
      {avgMinutesPerDay.toFixed(2)}
=======
      {Math.floor(avgMinutesPerDay)}
>>>>>>> 14e9efcb0652f086be5a8284fe98f8554457891a
    </span>
  );
}