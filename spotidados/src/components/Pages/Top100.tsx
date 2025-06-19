"use client";
import ResolveTop100Albums from "@/components/ResolveTop100Albums";
import ResolveTop100Arts from "@/components/resolveTop100Arts";
import ResolveTop100Songs from "@/components/ResolveTop100Songs";
import { useRef, useState } from "react";

type Range = "4weeks" | "6months" | "1year" | "all";
type Mode = "artists" | "songs" | "albums";

interface Top100Props {
  setOpenWindows: Dispatch<SetStateAction<string[]>>;
  setArtist: Dispatch<SetStateAction<string>>;
}

export default function Top100({ setOpenWindows, setArtist }: Top100Props) {
  const [range, setRange] = useState<Range>("all");
  const [mode, setMode] = useState<Mode>("artists");
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleFilter = (newRange: Range) => {
    setRange(newRange);
    scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMode = (newMode: Mode) => {
    setMode(newMode);
    scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const retroBtnStyle = (active: boolean) =>
    `relative w-[88px] h-[40px] rounded-[12px] flex items-center justify-center
     text-xs font-semibold text-black 
     ${active ? "bg-gradient-to-br from-[#f3f4f6] to-[#a5aab0]" : "bg-gradient-to-br from-[#d9dce0] to-[#a1a8ae]"}
     border-[2px] border-[#6c7176]
     shadow-[3px_3px_8px_rgba(0,0,0,0.4),inset_-2px_-2px_3px_#ffffff,inset_2px_2px_3px_#808080]
     hover:shadow-[0_0_10px_#ffffff,inset_-1px_-1px_2px_#ffffff,inset_1px_1px_2px_#808080]
     hover:scale-[1.03] active:translate-y-[1px]
     transition-all duration-200`;

  return (
    <div className="text-black p-1">
      <div className="pt-[1rem]">
        <p className="text-[20px] font-bold text-center mb-[20px]">
          {mode === "artists"
            ? "Top 100 Artists"
            : mode === "songs"
            ? "Top 100 Songs"
            : "Top 100 Albums"}
        </p>

        {/* Mode Buttons */}
        <div className="flex justify-center gap-3 mb-3">
          <button className={retroBtnStyle(mode === "artists")} onClick={() => handleMode("artists")}>
            Artists
          </button>
          <button className={retroBtnStyle(mode === "songs")} onClick={() => handleMode("songs")}>
            Songs
          </button>
          <button className={retroBtnStyle(mode === "albums")} onClick={() => handleMode("albums")}>
            Albums
          </button>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-4 flex-wrap">
          <button className={retroBtnStyle(range === "4weeks")} onClick={() => handleFilter("4weeks")}>
            Last 4 Weeks
          </button>
          <button className={retroBtnStyle(range === "6months")} onClick={() => handleFilter("6months")}>
            Last 6 Months
          </button>
          <button className={retroBtnStyle(range === "1year")} onClick={() => handleFilter("1year")}>
            Last Year
          </button>
          <button className={retroBtnStyle(range === "all")} onClick={() => handleFilter("all")}>
            All Time
          </button>
        </div>

        {/* Scrollable Box */}
        <div
          ref={scrollRef}
          className="mx-auto w-full h-[610px] overflow-y-auto bg-transparent"
        >
          {mode === "artists" && <ResolveTop100Arts range={range} setOpenWindows={setOpenWindows} setArtist={setArtist}/>}
          {mode === "songs" && <ResolveTop100Songs range={range} setOpenWindows={setOpenWindows} setArtist={setArtist} />}
          {mode === "albums" && <ResolveTop100Albums range={range} setOpenWindows={setOpenWindows} setArtist={setArtist} />}
        </div>
      </div>
    </div>
  );
}
