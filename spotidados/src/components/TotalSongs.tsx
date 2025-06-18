import React from "react";
import useTrack from "../hooks/useTrack";

export default function TotalSongs() {
  const tracks = useTrack();

  if (!tracks || tracks.length === 0) return <span>Loading...</span>;

    const songs = tracks.filter(
    (track) => track.trackName !== null 
  );

  return (
    <span>{songs.length}</span>
  );
}