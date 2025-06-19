"use client"
import { useRouter } from "next/navigation";
import AvgTimePlayed from "@/components/AvgTimePlay";
import TotalSongs from "@/components/TotalSongs";
import TotalDifferentSongs from "@/components/TotalDifferentSongs";
import SeasonPieChart from "@/components/SeasonGraphicus";
import ValorTotalDeMins from "@/components/ValorTotalDeMins";

export default function Home() {
  const router = useRouter();
  return ( 
    <div className="text-black p-1">
      <div className=" flex flex-col items-center mt-[2rem] bg-white rounded-2xl inset-shadow-sm inset-shadow-gray-900">
        <div className="bg-[url(/profile_frame.png)] bg-contain w-[180px] h-[180px] flex items-center justify-center">
          <img className="object-contain w-[118px]" src="/profile_picture.png" alt="Profile" />
        </div>
        <p className="text-[32px] mt-4">xXCallax13Xx</p>
      </div>

      <div className="flex items-center gap-2 p-2.5">
        
      </div>

      <div className="bg-white rounded-2xl inset-shadow-sm inset-shadow-gray-900 h-120">
        <div className="space-y-6 text-center">
          <div>
            <p className="text-[1.12rem] pt-5">You've played <strong><TotalSongs></TotalSongs></strong> songs</p>
            <p className="text-[1.12rem]">A total of <strong><TotalDifferentSongs></TotalDifferentSongs></strong> different tracks</p>
          </div>

          <div>
            <p className="text-[1.12rem]"> <ValorTotalDeMins/> </p>
            <p className="text-[1.12rem]">An average of <strong><AvgTimePlayed></AvgTimePlayed></strong> minutes per day</p>
          </div>

          <div>
            <p className="text-[1.12rem] pb-5">Your <strong>Summer</strong> is always full of music</p>
          </div>
        </div>
        <SeasonPieChart></SeasonPieChart>
      </div>
    </div>
  );
}

