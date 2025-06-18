import { useEffect, useState } from "react";

type TrackItem = {
  _id?: { $oid?: string };
  ts?: string;
  ms_played?: number;
  master_metadata_track_name?: string;
  master_metadata_album_artist_name?: string;
  master_metadata_album_album_name?: string;
  episode_name?: string | null;
  episode_show_name?: string | null;
  reason_start?: string;
  reason_end?: string;
  shuffle?: boolean;
  skipped?: boolean | null;
};

type Track = {
  entryId: string | undefined;
  playedAt?: string;
  msPlayed?: number;
  trackName?: string;
  artist?: string;
  album?: string;
  episodeName?: string | null;
  showName?: string | null;
  reasonStart?: string;
  reasonEnd?: string;
  shuffle?: boolean;
  skipped?: boolean | null;
};

export default function useTrack() {
  const [tracks, setTracks] = useState<Track[]>([]);

  useEffect(() => {
    fetch("/data/history.json")
      .then((res) => res.json())
      .then((data: TrackItem[] | TrackItem) => {
        const items = Array.isArray(data) ? data : [data];
        const mappedTracks = items.map((item) => ({
          entryId: item._id?.$oid,
          playedAt: item.ts,
          msPlayed: item.ms_played,
          trackName: item.master_metadata_track_name,
          artist: item.master_metadata_album_artist_name,
          album: item.master_metadata_album_album_name,
          episodeName: item.episode_name,
          showName: item.episode_show_name,
          reasonStart: item.reason_start,
          reasonEnd: item.reason_end,
          shuffle: item.shuffle,
          skipped: item.skipped,
        }));
        setTracks(mappedTracks);
      })
      .catch(console.error);
  }, []);

  return tracks;
}

/*
 example of use

import useTrack from "../hooks/useTrack";

export default function TrackComponent() {
  const track = useTrack();

  if (!track) return <div>Loading...</div>;

  return (
    <div>
      <div>Track: {track.trackName}</div>
      <div>Artist: {track.artist}</div>
      <div>Album: {track.album}</div>
      <div>Played At: {track.playedAt}</div>
      // Use other mapped values as needed 
    </div>
  );
}



*/