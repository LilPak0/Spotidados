

export default function Home() {
  return (
    <div className="bg-[url(/main_background.png)] bg-cover bg-center h-dvh text-black">
      <div className="bg-[url(/background_before.png)] bg-center bg-contain bg-no-repeat h-[85%]">
        <div className="">
            <div className="bg-[url(/profile_frame.png)] relative top-[200px] w-[70px] h-[70px]">
                <img className="" width={"50px"} src="/profile_picture.png" alt="" />
            </div>
            <div className="pt-[200px]">
                <p className="text-[20px] font-bold text-center mb-[20px]">Top 100 Songs</p>
            </div>
        </div>
      </div>
      <div className="bg-[url(/nav_bar.png)] bg-no-repeat bg-center bg-contain">
          <img className="relative top-[-20px]" src="/icon_nav.png" alt="Nav bar icon" />
      </div>
    </div>
  );
}