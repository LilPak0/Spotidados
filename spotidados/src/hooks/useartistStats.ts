import useTrack from "./useTrack";

export default function useArtistStats(artistName: string) {
  const tracks = useTrack();

  // Filter tracks for the given artist (case-insensitive)
  const artistTracks = tracks.filter(
    (track) =>
      track.artist &&
      track.artist.toLowerCase() === artistName.toLowerCase()
  );

  // Total songs played (number of plays)
  const totalSongs = artistTracks.length;

  // Number of different tracks
  const differentTracks = new Set(
    artistTracks.map((track) => track.trackName)
  ).size;

  // Total minutes listened
  const minutes = Math.round(
    artistTracks.reduce((sum, track) => sum + (track.msPlayed || 0), 0) / 60000
  );

  // Percentage of listening (artist plays / total plays)
  const percent =
    tracks.length > 0
      ? Math.round((totalSongs / tracks.length) * 100 * 100) / 100
      : 0;

  // Find the most common season for this artist
  function getSeason(date: Date) {
    const month = date.getMonth() + 1;
    if ([12, 1, 2].includes(month)) return "Winter";
    if ([3, 4, 5].includes(month)) return "Spring";
    if ([6, 7, 8].includes(month)) return "Summer";
    return "Autumn";
  }
  const seasonCount: Record<string, number> = {};
  artistTracks.forEach((track) => {
    if (track.playedAt) {
      const season = getSeason(new Date(track.playedAt));
      seasonCount[season] = (seasonCount[season] || 0) + 1;
    }
  });
  const season =
    Object.entries(seasonCount).sort((a, b) => b[1] - a[1])[0]?.[0] || "Unknown";

  // Top 20 most listened songs for this artist
  const songCount: Record<string, number> = {};
  artistTracks.forEach((track) => {
    const songName = track.trackName || "Unknown Song";
    songCount[songName] = (songCount[songName] || 0) + 1;
  });
  const topSongs = Object.entries(songCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20)
    .map(([name, count]) => ({
      name,
      count,
    }));

  return {
    totalSongs,
    differentTracks,
    minutes,
    percent,
    season,
    topSongs, // array of { name, count }
  };
}