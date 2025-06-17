import SongCards from "@/components/SongCards";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[url(/main_background.png)] bg-cover bg-center h-dvh text-black">
      <div className="bg-[url(/background_before.png)] bg-center bg-cover h-[95%]">
        <p className="text-[20px] font-bold text-center">Top 100 Artists</p>
        <SongCards  num={1} nameSong={"Thriller"} nameArtist={"Michael Jackson"} color={"#D9D9D9"}  />  
        <SongCards  num={2} nameSong={"Feel Good Inc."} nameArtist={"Gorillaz"} color={"#FFF"}  /> 
        <SongCards  num={3} nameSong={"My Own Summer (Shove it)"} nameArtist={"Deftones"} color={"#D9D9D9"}  /> 
        <SongCards  num={4} nameSong={"I Wonder"} nameArtist={"Kanye West"} color={"#FFF"}  />   

        
      </div>
      <div className="bg-[url(/nav_bar.png)] bg-no-repeat bg-center bg-contain">
          <img src="/icon_nav.png" alt="Nav bar icon" />
      </div>
    </div>
  );
}
