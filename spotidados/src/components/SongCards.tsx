"use client";

interface Props {
  color: string;
  num: number;
  nameSong: string;
  nameArtist: string;
  setOpenWindows: Dispatch<SetStateAction<string[]>>;
  setArtist: Dispatch<SetStateAction<string>>;
}

export default function SongCards({
  color,
  num,
  nameSong,
  nameArtist,
  setOpenWindows,
  setArtist
}: 
  Props) 
  {
  return (
    <div
      className="m-auto w-[100%] flex items-center text-black h-[80px]"
      style={{ backgroundColor: color }}
    >
      <span className="text-[24px] font-extrabold ml-3 min-w-[70px] flex-shrink-0">
        #{num}
      </span>
      <div className="w-[80px] flex-shrink-0">
        <img
          className="w-[70px] h-[60px] object-cover rounded-full"
          src="/michealjakson.png"
          alt="Thriller"
        />
      </div>
      <div className="ml-2 flex-1 overflow-hidden relative h-[54px] flex flex-col justify-center">
        {/* Song name marquee */}
        <div className="w-full overflow-hidden h-[28px] relative">
          <span
            className="absolute left-0 top-0 marquee text-[20px] font-extrabold drop-shadow-[2px_5px_5px_rgba(0,0,0,0.4)] whitespace-nowrap"
            style={{ minWidth: "100%" }}
          >
            {nameSong}&nbsp;&nbsp;&nbsp;&nbsp;{nameSong}
          </span>
        </div>
        {/* Artist name static below */}
        <div onClick={() => {setArtist(nameArtist);
          setOpenWindows((prev) => [...prev, "ArtistStats"])}} className="w-full h-[24px] flex items-center mt-1">
          <span className="text-[16px] font-normal whitespace-nowrap">
            {nameArtist}
          </span>
        </div>
      </div>
    </div>
  );
}