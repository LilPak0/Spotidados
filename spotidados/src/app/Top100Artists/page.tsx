import ArtistCards from "@/components/ArtistCards";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white h-dvh">
          <ArtistCards  num={1} nameArtist={"Michael Jackson"} color={"#D9D9D9"}  />  
          <ArtistCards  num={2} nameArtist={"Gorillaz"} color={"#FFF"}  /> 
          <ArtistCards  num={3} nameArtist={"Deftones"} color={"#D9D9D9"}  /> 
          <ArtistCards  num={4} nameArtist={"Kanye West"} color={"#FFF"}  />   
    </div>
  );
}