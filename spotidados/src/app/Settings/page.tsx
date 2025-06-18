"use client"
import SeasonPieChart from "@/components/SeasonGraphicus";

export default function Home() {
  return (
    <div className="bg-[url(/main_background.png)] bg-cover bg-center h-dvh text-black overflow-hidden">
      <div className="bg-[url(/background_before.png)] bg-center bg-contain bg-no-repeat h-[85%] overflow-hidden">
        <div className="ml-[3rem] flex flex-row items-center mt-[4rem]">
          <div className="bg-[url(/profile_frame.png)] bg-contain w-[140px] h-[140px] flex items-center justify-center mr-[1rem]">
            <img className="object-contain w-[92px]" src="/profile_picture.png" alt="Profile" />
          </div>
          <div className="text-center">
            <p className="text-[2rem] m-0">callax13</p>
            <button className="rounded-[10px] bg-[#D9D9D9] w-[10rem] h-[0.8rem] inset-shadow-sm inset-shadow-gray-400 m-0"></button>
            <p className="text-[1rem] m-0">User since 2006</p>
          </div>
        </div>

        <div className="ml-[4rem] mt-[2rem] text-[1.15rem]">
            <p className="mb-2">Email: ped********@gmail.com</p>
            <p className="mb-2">Membership Plan: None</p>
            <p className="mb-2">Status: Missed last payment</p>
        </div>
        <SeasonPieChart></SeasonPieChart>
      </div>

      <div className="bg-[url(/nav_bar.png)] bg-no-repeat bg-center bg-contain">
          <img className="relative top-[-20px]" src="/icon_nav.png" alt="Nav bar icon" />
      </div>
    </div>
  );
}