"use client";
import ArtistStats from "@/components/ArtistStats";
import { useParams } from "next/navigation";

export default function ArtistPage() {
  const params = useParams();
  const artistName = decodeURIComponent(params.artist as string);

  return (
    <div className="bg-[url(/main_background.png)] bg-cover bg-center h-dvh text-black">
        <div className="bg-[url(/background_before.png)] bg-center bg-contain bg-no-repeat h-[85%]">
            <div className=" flex flex-col items-center">
                <ArtistStats artistName={artistName} />
            </div>
        </div>
    </div>
  );
}