
export default function SongCards({color,num,nameSong,nameArtist} : {color : string, num : number, nameSong : string, nameArtist: string}) {
  return (
    <div className="flex items-center text-black h-[85px]" style={{ backgroundColor : color }}>
      <span className="text-[24px] font-extrabold ml-5 mr-5">#{num}</span>
      <div className="w-[85px]">
        <img src="https://upload.wikimedia.org/wikipedia/en/8/89/Michael_jackson_thriller_12_inch_single_USA.jpg" alt="Triller" />
      </div>
      <div className="ml-5">
        <span className="text-[24px] font-extrabold drop-shadow-[2px_5px_5px_rgba(0,0,0,0.4)]">{nameSong}</span>
        <br />
        <span className="text-[16px]">{nameArtist}</span>
      </div>
    </div>
  );
}