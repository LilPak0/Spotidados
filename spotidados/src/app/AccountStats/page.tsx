"use client"
import { useRouter } from "next/navigation";
import AvgTimePlayed from "@/components/AvgTimePlay";
import TotalSongs from "@/components/TotalSongs";
import TotalDifferentSongs from "@/components/TotalDifferentSongs";
import SeasonPieChart from "@/components/SeasonGraphicus";

export default function Home() {
  const router = useRouter();
  return ( 
    <div className="text-black p-5">
      <div className=" flex flex-col items-center mt-[2rem]">
        <div className="bg-[url(/profile_frame.png)] bg-contain w-[180px] h-[180px] flex items-center justify-center">
          <img className="object-contain w-[118px]" src="/profile_picture.png" alt="Profile" />
        </div>
        <p className="text-[32px] mt-4">Hi, Callax13</p>
      </div>

      <div className="flex flex-col items-center gap-2 p-2">
        <div className="h-5 w-[400px] bg-gradient-to-b from-gray-200 to-gray-300 mb-4 rounded-lg mr-5 mx-auto" />
      </div>

      <div className="mt-[3rem] flex flex-col justify-center items-center px-8 w-full max-w-md">
        <div className="space-y-6 text-center">
          <div>
            <p className="text-[1.12rem]">You've played <strong><TotalSongs></TotalSongs></strong> songs</p>
            <p className="text-[1.12rem]">A total of <strong><TotalDifferentSongs></TotalDifferentSongs></strong> different tracks</p>
          </div>

          <div>
            <p className="text-[1.12rem]">You've heard <strong>12</strong> minutes</p>
            <p className="text-[1.12rem]">An average of <strong><AvgTimePlayed></AvgTimePlayed></strong> minutes per day</p>
          </div>

          <div>
            <p className="text-[1.12rem]">You prefer to listen to music at: </p>
            <p className="text-[1.12rem]">Your <strong>Summer</strong> is always full of music</p>
          </div>
        </div>
        <SeasonPieChart></SeasonPieChart>
      </div>
    </div>
  );
}

