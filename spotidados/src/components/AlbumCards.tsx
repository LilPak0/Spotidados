import { useRef, useEffect, useState } from "react";

interface Props {
  color: string;
  num: number;
  nameArtist: string;
  albumName: string;
  views: number;
  setOpenWindows: Dispatch<SetStateAction<string[]>>;
  setArtist: Dispatch<SetStateAction<string>>;
}


export default function AlbumCards({ color, num, nameArtist ,albumName, views, setOpenWindows, setArtist }: Props) {
  return (
    <div className="m-auto w-[100%] flex items-center text-black h-[80px]" style={{ backgroundColor: color }}>
      <span className="text-[24px] font-bold ml-3 min-w-[60px] flex-shrink-0">#{num}</span>
      <div className="w-[80px] flex-shrink-0">
        <img
          className="w-[70px] h-[70px] object-cover rounded-full"
          src="https://upload.wikimedia.org/wikipedia/en/8/89/Michael_jackson_thriller_12_inch_single_USA.jpg"
          alt="Thriller"
        />
      </div>
      <div className="ml-2 flex-1 overflow-hidden relative h-[54px] flex flex-col justify-center">
        {/*   marquee */}
        <div className="w-full overflow-hidden h-[28px] relative">
          <span
            className="absolute left-0 top-0 marquee text-[20px] font-extrabold drop-shadow-[2px_5px_5px_rgba(0,0,0,0.4)] whitespace-nowrap"
            style={{ minWidth: "100%" }}
          >
            {albumName}&nbsp;&nbsp;&nbsp;&nbsp;{albumName}
          </span>
        </div>
        {/*   static below */}
        <div onClick={() => {setArtist(nameArtist);
          setOpenWindows((prev) => [...prev, "ArtistStats"])}} className="w-full h-[24px] flex items-center mt-1">
          <span className="text-[16px] font-normal whitespace-nowrap mr-1.5">
            {nameArtist}
          </span>
          <span className="text-[16px] font-normal whitespace-nowrap">
            {views} plays
          </span>
        </div>
      </div>
    </div>
  );
}