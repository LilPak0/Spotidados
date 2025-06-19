
export default function ArtistCards({color,num,nameArtist} : {color : string, num : number, nameArtist: string}) {
  return (
    <div className="m-auto w-[80%] flex items-center text-black h-[80px]" style={{ backgroundColor : color }}>
      <span className="text-[24px] font-bold ml-5 w-[70px]">#{num}</span>
      <div className="w-[80px]">
        <img src="https://upload.wikimedia.org/wikipedia/en/8/89/Michael_jackson_thriller_12_inch_single_USA.jpg" alt="Thriller" />
      </div>
      <div className="ml-5">
        <span className="text-[20px] font-extrabold drop-shadow-[2px_5px_5px_rgba(0,0,0,0.4)]">{nameArtist}</span>
      </div>
    </div>
  );
}