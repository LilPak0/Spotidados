import React, { useState } from "react";
import useTrack from "../hooks/useTrack";

type TrackCount = {
  track: string;
  artist: string;
  count: number;
};

type Range = "4weeks" | "6months" | "1year" | "all";

// Helper to filter tracks by date range
function filterTracksByRange(tracks: any[], range: Range) {
  const now = new Date("2024-01-20"); // Current date as per your prompt
  let from: Date | null = null;

  switch (range) {
    case "4weeks":
      from = new Date(now);
      from.setDate(now.getDate() - 28);
      break;
    case "6months":
      from = new Date(now);
      from.setMonth(now.getMonth() - 6);
      break;
    case "1year":
      from = new Date(now);
      from.setFullYear(now.getFullYear() - 1);
      break;
    case "all":
    default:
      return tracks;
  }

  return tracks.filter(
    (track) =>
      track.playedAt &&
      new Date(track.playedAt) >= from! &&
      new Date(track.playedAt) <= now
  );
}

export default function ResolveTop100Songs() {
  const tracks = useTrack();
  const [range, setRange] = useState<Range>("all");

  if (!tracks || tracks.length === 0) return <div>Loading...</div>;

  // Filter tracks by selected range
  const filteredTracks = filterTracksByRange(tracks, range);

  // Count appearances for each track (song name + artist for uniqueness)
  const trackMap: Record<string, { track: string; artist: string; count: number }> = {};
  filteredTracks.forEach((track) => {
    const trackName = track.trackName || "Unknown Track";
    const artistName = track.artist || "Unknown Artist";
    const key = `${trackName} - ${artistName}`;
    if (!trackMap[key]) {
      trackMap[key] = { track: trackName, artist: artistName, count: 0 };
    }
    trackMap[key].count += 1;
  });

  // Convert to array and sort by count descending
  const sortedTracks: TrackCount[] = Object.values(trackMap).sort((a, b) => b.count - a.count);

  return (
    <div>
      <h2>Top Tracks</h2>
      <div>
        <button onClick={() => setRange("4weeks")}>Last 4 Weeks</button>
        <button onClick={() => setRange("6months")}>Last 6 Months</button>
        <button onClick={() => setRange("1year")}>Last Year</button>
        <button onClick={() => setRange("all")}>All Time</button>
      </div>
      <ul>
        {sortedTracks.map(({ track, artist, count }) => (
          <li key={`${track} - ${artist}`}>
            {track} — {artist}: {count} plays
          </li>
        ))}
      </ul>
    </div>
  );
}