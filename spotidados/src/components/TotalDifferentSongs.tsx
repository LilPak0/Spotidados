import React from "react";
import useTrack from "../hooks/useTrack";

export default function TotalDifferentSongs() {
  const tracks = useTrack();

  if (!tracks || tracks.length === 0) return <span>Loading...</span>;

    const songs = tracks.filter(
    (track) => track.trackName !== null 
  );

  console.log(songs.length)

  const noRepeat = new Set(songs.map((track) => track.trackName))
  console.log(noRepeat)

  return (
    <span>{noRepeat.size}</span>
  );
}