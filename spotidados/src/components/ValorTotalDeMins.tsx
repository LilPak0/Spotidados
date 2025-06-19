import useTrack from "../hooks/useTrack";

export default function ValorTotalDeMins(){
    const tracks = useTrack();
    const totalMs = tracks.reduce((sum, track) => sum + (track.msPlayed || 0), 0);
    const totalMinutes = Math.round(totalMs / 60000);

  return (
    <div>
      Total playtime: {totalMinutes} minutes
    </div>
  );
}