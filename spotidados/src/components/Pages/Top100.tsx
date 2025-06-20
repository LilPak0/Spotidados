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
        <div className="flex justify-center gap-2 mb-3">
          <button
            className={`px-3 py-1 text-sm rounded-2xl font-semibold transition-colors border ${
              mode === "artists"
                ? "bg-green-600 text-white border-green-600"
                : "bg-white text-green-600 border-green-600"
            }`}
            onClick={() => handleMode("artists")}
          >
            Artists
          </button>
          <button
            className={`px-3 py-1 text-sm rounded-2xl font-semibold transition-colors border ${
              mode === "songs"
                ? "bg-green-600 text-white border-green-600"
                : "bg-white text-green-600 border-green-600"
            }`}
            onClick={() => handleMode("songs")}
          >
            Songs
          </button>
          <button
            className={`px-3 py-1 text-sm rounded-2xl font-semibold transition-colors border ${
              mode === "albums"
                ? "bg-green-600 text-white border-green-600"
                : "bg-white text-green-600 border-green-600"
            }`}
            onClick={() => handleMode("albums")}
          >
            Albums
          </button>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-1 mb-4 flex-wrap">
          <button
            className={`px-2 py-1 text-sm rounded-2xl font-semibold transition-colors border ${
              range === "4weeks"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-blue-600 border-blue-600"
            }`}
            onClick={() => handleFilter("4weeks")}
          >
            Last 4 Weeks
          </button>
          <button
            className={`px-2 py-1 text-sm rounded-2xl font-semibold transition-colors border ${
              range === "6months"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-blue-600 border-blue-600"
            }`}
            onClick={() => handleFilter("6months")}
          >
            Last 6 Months
          </button>
          <button
            className={`px-2 py-1 text-sm rounded-2xl font-semibold transition-colors border ${
              range === "1year"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-blue-600 border-blue-600"
            }`}
            onClick={() => handleFilter("1year")}
          >
            Last Year
          </button>
          <button
            className={`px-2 py-1 text-sm rounded-2xl font-semibold transition-colors border ${
              range === "all"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-blue-600 border-blue-600"
            }`}
            onClick={() => handleFilter("all")}
          >
            All Time
          </button>
        </div>

        {/* Scrollable Box */}
        <div
          ref={scrollRef}
          className="mx-auto w-full h-[560px] overflow-y-auto bg-transparent"
        >
          {mode === "artists" && <ResolveTop100Arts range={range} setOpenWindows={setOpenWindows} setArtist={setArtist}/>}
          {mode === "songs" && <ResolveTop100Songs range={range} setOpenWindows={setOpenWindows} setArtist={setArtist} />}
          {mode === "albums" && <ResolveTop100Albums range={range} setOpenWindows={setOpenWindows} setArtist={setArtist} />}
        </div>
      </div>
    </div>
  );
}
