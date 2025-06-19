"use client";
import ResolveTop100Albums from "@/components/ResolveTop100Albums";
import ResolveTop100Arts from "@/components/resolveTop100Arts";
import ResolveTop100Songs from "@/components/ResolveTop100Songs";
import Image from "next/image";
import { useRef, useState } from "react";

type Range = "4weeks" | "6months" | "1year" | "all";
type Mode = "artists" | "songs" | "albums";

export default function Home() {
  const [range, setRange] = useState<Range>("all");
  const [mode, setMode] = useState<Mode>("artists");
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleFilter = (newRange: Range) => {
    setRange(newRange);
    // Scroll to top of the artist list
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  };

  const handleMode = (newMode: Mode) => {
    setMode(newMode);
    // Scroll to top of the artist list
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
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
          {/* Toggle buttons */}
          <div className="flex justify-center gap-2 mb-2">
            <button
              className={`px-3 py-1 text-sm rounded-full font-semibold transition-colors ${
                mode === "artists"
                  ? "bg-green-600 text-white"
                  : "bg-white text-green-600 border border-green-600"
              }`}
              onClick={() => handleMode("artists")}
            >
              Artists
            </button>
            <button
              className={`px-3 py-1 text-sm rounded-full font-semibold transition-colors ${
                mode === "songs"
                  ? "bg-green-600 text-white"
                  : "bg-white text-green-600 border border-green-600"
              }`}
              onClick={() => handleMode("songs")}
            >
              Songs
            </button>
            <button
              className={`px-3 py-1 text-sm rounded-full font-semibold transition-colors ${
                mode === "albums"
                  ? "bg-green-600 text-white"
                  : "bg-white text-green-600 border border-green-600"
              }`}
              onClick={() => handleMode("albums")}
            >
              Albums
            </button>
          </div>
          {/* Filter buttons */}
          <div className="flex justify-center gap-2 mb-4">
            <button
              className={`px-1 py-1 text-sm rounded-full font-semibold transition-colors ${
                range === "4weeks"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600 border border-blue-600"
              }`}
              onClick={() => handleFilter("4weeks")}
            >
              Last 4 Weeks
            </button>
            <button
              className={`px-2 py-1 text-sm rounded-full font-semibold transition-colors ${
                range === "6months"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600 border border-blue-600"
              }`}
              onClick={() => handleFilter("6months")}
            >
              Last 6 Months
            </button>
            <button
              className={`px-2 py-1 text-sm rounded-full font-semibold transition-colors ${
                range === "1year"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600 border border-blue-600"
              }`}
              onClick={() => handleFilter("1year")}
            >
              Last Year
            </button>
            <button
              className={`px-2 py-1 text-sm rounded-full font-semibold transition-colors ${
                range === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600 border border-blue-600"
              }`}
              onClick={() => handleFilter("all")}
            >
              All Time
            </button>
          </div>
          {/* Scrollable box */}
          <div
            ref={scrollRef}
            className="mx-auto w-full h-[400px] overflow-y-auto bg-transparent"
          >
            {mode === "artists" && <ResolveTop100Arts range={range} />}
            {mode === "songs" && <ResolveTop100Songs range={range} />}
            {mode === "albums" && <ResolveTop100Albums range={range} />}
          </div>
        </div>
      </div>
  );
}