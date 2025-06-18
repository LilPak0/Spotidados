type Track = {
  playedAt?: string;
  msPlayed?: number;
  // ...other properties
};

function getSeason(month: number): string {
  if ([12, 1, 2].includes(month)) return "Winter";
  if ([3, 4, 5].includes(month)) return "Spring";
  if ([6, 7, 8].includes(month)) return "Summer";
  if ([9, 10, 11].includes(month)) return "Autumn";
  return "Unknown";
}

export function filtrosSazonais(tracks: Track[]) {
  const seasonHours: Record<string, number> = {};

  tracks.forEach((track) => {
    if (!track.playedAt || !track.msPlayed) return;
    const month = new Date(track.playedAt).getMonth() + 1; // getMonth() is 0-based
    const season = getSeason(month);
    const hours = track.msPlayed / 1000 / 60 / 60;
    seasonHours[season] = (seasonHours[season] || 0) + hours;
  });

  return seasonHours;
}

/*exemplo de uso

import useTrack from "../hooks/useTrack";
import { getHoursPlayedPerSeason } from "../utils/seasonUtils";

export default function HoursPerSeason() {
  const tracks = useTrack();
  if (!tracks || tracks.length === 0) return <div>Loading...</div>;

  const seasonHours = getHoursPlayedPerSeason(tracks);

  return (
    <ul>
      {Object.entries(seasonHours).map(([season, hours]) => (
        <li key={season}>
          {season}: {hours.toFixed(2)} hours
        </li>
      ))}
    </ul>
  );
}

*/