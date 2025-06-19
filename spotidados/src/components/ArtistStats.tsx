import useArtistStats from "@/hooks/useartistStats";

export default function ArtistStats({ artistName }: { artistName: string }) {
  const stats = useArtistStats(artistName);

  return (
    <div>
      <div className="flex flex-col items-center mt-[5rem]">
        <div className="bg-[url(/profile_frame.png)] bg-contain w-[180px] h-[180px] flex items-center justify-center">
          <img
            className="object-contain w-[118px]"
            src="/profile_picture.png"
            alt="Profile"
          />
        </div>
        <p className="text-[32px] mt-4">{artistName}</p>
      </div>
      <div className="mt-[5rem] flex flex-col justify-center items-center px-15 w-full max-w-md">
        <div className="space-y-6 text-center">
          <div>
            <p className="text-[1.12rem]">
              You’ve played{" "}
              <strong>{stats.totalSongs}</strong> songs
            </p>
            <p className="text-[1.12rem]">
              A total of{" "}
              <strong>{stats.differentTracks}</strong> different tracks
            </p>
          </div>
          <div>
            <p className="text-[1.12rem]">
              You've heard <strong>{stats.minutes}</strong> minutes
            </p>
            <p className="text-[1.12rem]">
              This artist is <strong>{stats.percent}%</strong> of your listening
            </p>
          </div>
          <div>
            <p className="text-[1.12rem]">
              It seems like <strong>{artistName}</strong> is always included in
              your headphones in the <strong>{stats.season}</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}