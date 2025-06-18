import React from "react";
import useTrack from "../hooks/useTrack";

type ArtistCount = {
  artist: string;
  count: number;
};

export default function TopArtists() {
  const tracks = useTrack();

  if (!tracks || tracks.length === 0) return <div>Loading...</div>;

  // Count appearances for each artist
  const artistMap: Record<string, number> = {};
  tracks.forEach((track) => {
    const artist = track.artist;
    if (artist) {
      artistMap[artist] = (artistMap[artist] || 0) + 1;
    }
  });

  // Convert to array and sort by count descending
  const sortedArtists: ArtistCount[] = Object.entries(artistMap)
    .map(([artist, count]) => ({ artist, count }))
    .sort((a, b) => b.count - a.count);

  return (
    <div>
      <h2>Top Artists</h2>
      <ul>
        {sortedArtists.map(({ artist, count }) => (
          <li key={artist}>
            {artist}: {count} plays
          </li>
        ))}
      </ul>
    </div>
  );
}