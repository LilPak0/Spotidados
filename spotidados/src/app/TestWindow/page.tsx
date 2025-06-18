"use client";
import SeasonGraphicus from "@/components/SeasonGraphicus";
import { useState } from "react";
import { Rnd } from "react-rnd";

export default function TestPage() {
  const [visible, setVisible] = useState(true);
  const width = 405;
  const height = 857;

  if (!visible) return null;

  return (
    <Rnd
      default={{
        x: 17.5,
        y: 0,
        width,
        height,
      }}
      className="shadow-2xl"
      disableDragging={false}
      enableResizing={false}
    >
      <div className="h-full w-full rounded-2xl border-[3px] border-gray-300 bg-gradient-to-b from-gray-200 to-gray-100 shadow-lg flex flex-col">
        {/* Top bar */}
        <div className="relative flex items-center h-14 rounded-t-2xl bg-gradient-to-b from-gray-200 to-gray-300 border-b border-gray-300 px-4">
          {/* Close button */}
          <button
            onClick={() => setVisible(false)}
            className="absolute right-3 top-2 w-8 h-8 flex items-center justify-center rounded-xl border border-gray-300 bg-gray-200 hover:bg-gray-300 shadow"
            aria-label="Close"
          >
            <span className="text-2xl text-gray-500 font-bold">&times;</span>
          </button>
        </div>
        {/* Content */}
        <div className="flex-1 flex flex-col gap-2 p-2">
          <div className="flex-1 rounded-xl border border-gray-300 bg-white mb-2">
          </div>
          <div className="flex-1 rounded-xl border border-gray-300 bg-white" />
        </div>
      </div>
    </Rnd>
  );
}