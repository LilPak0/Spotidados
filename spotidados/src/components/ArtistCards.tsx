import { useRef, useEffect, useState } from "react";

export default function ArtistCards({ color, num, nameArtist }: { color: string, num: number, nameArtist: string }) {
  return (
    <div className="m-auto w-[100%] flex items-center text-black h-[80px]" style={{ backgroundColor: color }}>
      <span className="text-[24px] font-bold ml-3 min-w-[60px] flex-shrink-0">#{num}</span>
      <div className="w-[80px] flex-shrink-0">
        <img
          className="w-[70px] h-[70px] object-cover rounded-full"
          src="/michealjakson.png"
          alt="Thriller"
        />
      </div>
      <div className="ml-2 flex-1 overflow-hidden relative h-[28px]">
        <span
          className="absolute left-0 top-0 marquee text-[20px] font-extrabold drop-shadow-[2px_5px_5px_rgba(0,0,0,0.4)] whitespace-nowrap"
          style={{ minWidth: "100%" }}
        >
          {nameArtist}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{nameArtist}
        </span>
      </div>
    </div>
  );
}