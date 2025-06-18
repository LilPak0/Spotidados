import AvgTimePlayed from "@/components/AvgTimePlay";

export default function Home() {
  return (
    <div className="bg-[url(/main_background.png)] bg-cover bg-center h-dvh text-black">
      <div className="bg-[url(/background_before.png)] bg-center bg-contain bg-no-repeat h-[85%] overflow-hidden">
        <div className=" flex flex-col items-center mt-[5rem]">
          <div className="bg-[url(/profile_frame.png)] bg-contain w-[180px] h-[180px] flex items-center justify-center">
            <img className="object-contain w-[118px]" src="/profile_picture.png" alt="Profile" />
          </div>
          <p className="text-[32px] mt-4">Hi, Callax13</p>
        </div>

        <div className="mt-[5rem] flex flex-col justify-center items-center px-8 w-full max-w-md">
           <div className="space-y-6 text-center">
             <div>
               <p className="text-[1.12rem]">You've played <strong>number</strong> songs</p>
               <p className="text-[1.12rem]">A total of <strong>number</strong> different tracks</p>
             </div>

             <div>
               <p className="text-[1.12rem]">You've heard <strong><AvgTimePlayed></AvgTimePlayed></strong> minutes</p>
               <p className="text-[1.12rem]">An average of <strong>235</strong> minutes per day</p>
              </div>

             <div>
               <p className="text-[1.12rem]">You prefer to listen to music at: </p>
               <p className="text-[1.12rem]">Your <strong>Summer</strong> is always full of music</p>
             </div>
           </div>
        </div>
      </div>

      <div className="bg-[url(/nav_bar.png)] bg-no-repeat bg-center bg-contain">
          <img className="relative top-[-20px]" src="/icon_nav.png" alt="Nav bar icon" />
      </div>
    </div>
  );
}

