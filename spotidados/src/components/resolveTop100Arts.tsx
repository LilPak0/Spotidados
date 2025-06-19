import React, { useState } from "react";
import useTrack from "../hooks/useTrack";
import ArtistCards from "./ArtistCards";
import { useRouter } from "next/navigation";

type ArtistCount = {
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
}

export default function ResolveTop100Arts({ range }: Props) {
  const tracks = useTrack();
  const router = useRouter();

  if (!tracks || tracks.length === 0) return;

  // Filter tracks by selected range
  const filteredTracks = filterTracksByRange(tracks, range);

  // Count appearances for each artist
  const artistMap: Record<string, number> = {};
  filteredTracks.forEach((track) => {
    const artist = track.artist;
    if (artist) {
      artistMap[artist] = (artistMap[artist] || 0) + 1;
    }
  });

  // Convert to array and sort by count descending
  const sortedArtists: ArtistCount[] = Object.entries(artistMap)
    .map(([artist, count]) => ({ artist, count }))
    .sort((a, b) => b.count - a.count);

  const top100 = sortedArtists.slice(0, 100);

  return (
    <>
      {top100.map(({ artist, count }, index) => (
        <div key={artist} onClick={() => router.push(`/ArtistPage/${encodeURIComponent(artist)}`)}>
          <ArtistCards
            color={index % 2 === 0 ? "#D9D9D9" : "#FFF"}
            num={index + 1}
            nameArtist={artist}
          />
        </div>
      ))}
    </>
  );
}