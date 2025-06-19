import React, { useState } from "react";
import useTrack from "../hooks/useTrack";
import SongCards from "./SongCards";

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

interface Props {
  range: Range;
  setOpenWindows?: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function ResolveTop100Songs({ range, setOpenWindows }: Props) {
  const tracks = useTrack();

  if (!tracks || tracks.length === 0) return;

  // Filter tracks by selected range
  // After filtering by date, filter out tracks with missing artist
  const filteredTracks = filterTracksByRange(tracks, range).filter(
    (track) => track.artist && track.trackName
  );

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
  const top100 = sortedTracks.slice(0, 100);

  return (
    <>
      {top100.map(({ track, artist }, index) => (
        <SongCards
          key={`${track}-${artist}`}
          color={index % 2 === 0 ? "#D9D9D9" : "#FFF"}
          num={index + 1}
          nameSong={track}
          nameArtist={artist}
        />
      ))}
    </>
  );
}