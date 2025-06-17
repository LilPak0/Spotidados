import ArtistCards from "@/components/ArtistCards";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[url(/main_background.png)] bg-cover bg-center h-dvh text-black">
          <div className="bg-[url(/background_before.png)] bg-center bg-contain bg-no-repeat h-[85%]">
            <div className="pt-[200px]">
              <p className="text-[20px] font-bold text-center mb-[20px]">Top 100 Artists</p>
              <ArtistCards  num={1} nameArtist={"Michael Jackson"} color={"#D9D9D9"}  />  
              <ArtistCards  num={2} nameArtist={"Gorillaz"} color={"#FFF"}  /> 
              <ArtistCards  num={3} nameArtist={"Deftones"} color={"#D9D9D9"}  /> 
              <ArtistCards  num={4} nameArtist={"Kanye West"} color={"#FFF"}  /> 
              <ArtistCards  num={5} nameArtist={"Deftones"} color={"#D9D9D9"}  /> 
              <ArtistCards  num={6} nameArtist={"Kanye West"} color={"#FFF"}  /> 
            </div>
          </div>
          <div className="bg-[url(/nav_bar.png)] bg-no-repeat bg-center bg-contain">
              <img className="relative top-[-20px]" src="/icon_nav.png" alt="Nav bar icon" />
          </div>
        </div>
  );
}