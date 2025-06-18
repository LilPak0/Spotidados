import React from "react";
import useTrack from "../hooks/useTrack";

export default function AvgTimePlayed() {
  const tracks = useTrack();

  if (!tracks || tracks.length === 0) return <div>Loading...</div>;

  // Filter tracks that haven't been skipped
  const notSkipped = tracks.filter((track) => !track.skipped && track.msPlayed);

  // Calculate average time played in minutes
  const avgMinutes =
    notSkipped.length > 0
      ? notSkipped.reduce((sum, track) => sum + (track.msPlayed || 0), 0) /
        notSkipped.length /
        1000 /
        60
      : 0;

  return (
      <div>`${avgMinutes.toFixed(2)}`</div>
  );
}