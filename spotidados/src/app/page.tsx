"use client"
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="bg-[url(/main_background.png)] bg-cover bg-center h-dvh">
      <div className="relative top-[147px] left-[-318px] w-[635px]">
        <img width={"635px"} src="/cd_text.png" alt="cd turning with text inside" />
      </div>
      <div className="absolute top-[782px] left-[180px] flex justify-center ">
        <button onClick={() => router.push('/AccountStats')} className="bg-gradient-to-br from-gray-700 to-gray-300 w-[80px] h-[80px] rounded-[15%] flex items-center justify-center shadow-[2px_5px_5px_rgba(0,0,0,0.4)]">
          <img width={"47px"} src="/play_icon.png" alt="Icon of a play button" />
        </button>
      </div>
    </div>
  );
}
