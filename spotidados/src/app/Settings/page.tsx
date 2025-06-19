"use client"

export default function Home() {
  return (
    <div className="text-black p-5">
      <div className="ml-[1rem] flex flex-row items-center mt-[1rem]">
        <div className="bg-[url(/profile_frame.png)] bg-contain w-[140px] h-[140px] bg-no-repeat flex items-center justify-center mr-[1rem]">
          <img className="object-contain w-[92px]" src="/profile_picture.png" alt="Profile" />
        </div>
        <div className="text-center">
          <p className="text-[2rem] m-0">callax13</p>
          <button className="rounded-[10px] bg-[#D9D9D9] w-[10rem] h-[0.8rem] inset-shadow-sm inset-shadow-gray-400 m-0"></button>
          <p className="text-[1rem] m-0">User since 2006</p>
        </div>
      </div>

      <div className="ml-[1rem] mt-[2rem] text-[1.15rem]">
        <p className="mb-2">Email: pedr********@gmail.com</p>
        <p className="mb-2">Membership Plan: None</p>
        <p className="mb-2">Status: Missed last payment</p>
      </div>
      <div className="flex items-center gap-2 p-2">
        <div className="h-3 w-[100%] bg-gradient-to-b from-gray-200 to-gray-300 mx-auto" />
      </div>
    </div>
  );
}