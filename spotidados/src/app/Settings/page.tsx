"use client"
import { useState } from "react";

export default function Home() {
  const profilePics = [
    "/profile_picture1.png",
    "/profile_picture2.jpeg",
    "/profile_picture3.jpg",
    "/profile_picture4.jpeg",
  ];

  const [picIndex, setPicIndex] = useState(0);

  const changeProfilePic = () => {
    setPicIndex((prev) => (prev + 1) % profilePics.length);
  };

  return (
    <div className="text-black p-5 w-full h-[58%]">
      <div className="bg-white rounded-2xl inset-shadow-sm inset-shadow-gray-900">
        <div className="ml-4 flex flex-row items-center mt-4">
          <div className="relative">
            <div className="bg-[url(/profile_frame.png)] bg-contain w-[140px] h-[140px] bg-no-repeat flex items-center justify-center mr-4">
              <img
                className="object-contain w-[92px] h-[92px]"
                src={profilePics[picIndex]}
                alt="Profile"
              />
            </div>
          </div>

          <div className="text-center">
            <p className="text-[2rem] m-0">callax13</p>
            <button className="rounded-[10px] bg-[#D9D9D9] w-40 h-2 inset-shadow-sm inset-shadow-gray-400 m-0" />
            <p className="text-[1rem] m-0">User since 2006</p>
          </div>
        </div>

        <div className="ml-4 mt-8 text-[1.15rem]">
          <p className="mb-2">Email: pedr********@gmail.com</p>
          <p className="mb-2">Membership Plan: None</p>
          <p className="mb-2">Status: Missed last payment</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl inset-shadow-sm inset-shadow-gray-900">
        <div className="ml-4 flex flex-row items-center mt-4">
          <div className="relative">
            {/* Botão para trocar entre duas imagens */}
            <button
              onClick={changeProfilePic}
              className="relative w-[200px] h-[30px] rounded-[20px] flex items-center justify-center bg-gradient-to-br from-[#d7dce1] to-[#a1a8ae] 
                    border-[2px] border-[#6c7176] mb-100 mt-5
                    shadow-[4px_4px_8px_rgba(0,0,0,0.4),inset_-2px_-2px_4px_#f0f0f0,inset_2px_2px_4px_#6e6e6e]
                    hover:shadow-[0_0_10px_#ffffff,inset_-1px_-1px_3px_#ffffff,inset_1px_1px_3px_#808080]
                    hover:bg-gradient-to-br hover:from-[#e4e8ec] hover:to-[#b1b8be]
                    active:translate-y-[2px] transition-all duration-100"
            >
              Change Profile Picture
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

