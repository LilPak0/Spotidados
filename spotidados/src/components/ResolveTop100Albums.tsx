import React, { useState } from "react";
import useTrack from "../hooks/useTrack";
import AlbumCards from "./AlbumCards";

type AlbumCount = {
  album: string;
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
  setOpenWindows: Dispatch<SetStateAction<string[]>>;
  setArtist: Dispatch<SetStateAction<string>>;
}

export default function ResolveTop100Albums({ range, setOpenWindows, setArtist }: Props) {
  const tracks = useTrack();

  if (!tracks || tracks.length === 0) return <div>Loading...</div>;

  // Filter tracks by selected range
  const filteredTracks = filterTracksByRange(tracks, range).filter(
    (track) => track.album && track.artist
  );;

  // Count appearances for each album (album name + artist for uniqueness)
  const albumMap: Record<string, { album: string; artist: string; count: number }> = {};
  filteredTracks.forEach((track) => {
    const albumName = track.album || "Unknown Album";
    const artistName = track.artist || "Unknown Artist";
    const key = `${albumName} - ${artistName}`;
    if (!albumMap[key]) {
      albumMap[key] = { album: albumName, artist: artistName, count: 0 };
    }
    albumMap[key].count += 1;
  });

  // Convert to array and sort by count descending, take top 100
  const sortedAlbums: AlbumCount[] = Object.values(albumMap)
    .sort((a, b) => b.count - a.count)
    .slice(0, 100);

  return (
    <>
      {sortedAlbums.map(({ album, artist, count }, index) => (
        <AlbumCards
          color={index % 2 === 0 ? "#D9D9D9" : "#FFF"}
          num={index + 1}
          albumName={album}
          views={count} 
          nameArtist={artist} 
          setOpenWindows={setOpenWindows} 
          setArtist={setArtist}        />
      ))}
    </>
  );
}