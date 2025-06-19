"use client";
import SeasonGraphicus from "@/components/SeasonGraphicus";
import AcountStats from "@/app/AccountStats/page";
import Top100 from "@/app/Top100Artists/page";
import Settings from "@/app/Settings/page";
import { useState } from "react";
import { Rnd } from "react-rnd";

const icons = [
  { name: "Top100", src: "/iconBarras.png" },
  { name: "Home", src: "/iconCasa.png" },
  { name: "Settings", src: "/iconGear.png" },
  { name: "Search", src: "/iconLupa.png" },
  { name: "Stats", src: "/iconStats.png" },
];

function AnimatedWindow({ name, onClose, children }) {
  const [closing, setClosing] = useState(false);
  const width = 405;
  const height = 857;

  const handleClose = () => {
    setClosing(true);
    setTimeout(onClose, 300);
  };

  return (
    <Rnd
      default={{
        x: 17.5,
        y: 0,
        width,
        height,
      }}
      className="shadow-2xl"
      dragHandleClassName="drag-handle" // Only allow dragging by this class
      enableResizing={false}
      bounds="window"
    >
      <div
        className={`h-full w-full rounded-2xl border-[3px] border-gray-300 bg-gradient-to-b from-gray-200 to-gray-100 shadow-lg flex flex-col transition-transform duration-300 ease-in-out ${
          closing ? "scale-0" : "scale-100"
        }`}
      >
        <div className="relative flex items-center h-14 rounded-t-2xl bg-gradient-to-b from-gray-200 to-gray-300 border-b border-gray-300 px-4 drag-handle">
          {/* Added drag-handle class above */}
          <div className="flex-1 flex justify-center">
            <span className="font-semibold text-gray-700 text-lg">{name}</span>
          </div>
          <button
            onTouchStart={handleClose}
            onClick={handleClose}
            className="absolute right-3 top-2 w-8 h-8 flex items-center justify-center rounded-xl border border-gray-300 bg-gray-200 hover:bg-gray-300 shadow"
            aria-label="Close"
          >
            <span className="text-2xl text-gray-500 font-bold">&times;</span>
          </button>
        </div>
        <div className="flex-1 flex flex-col gap-2 p-2">
          {children}
        </div>
      </div>
    </Rnd>
  );
}

export default function Page() {
  const [openWindows, setOpenWindows] = useState<string[]>([]);

  const openWindow = (name: string) => {
    if (!openWindows.includes(name)) setOpenWindows([...openWindows, name]);
  };

  const closeWindow = (name: string) => {
    setOpenWindows((wins) => wins.filter((n) => n !== name));
  };

  return (
    <div className="relative min-h-screen">
      {/* Background image div */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/your-image.jpg')" }}
      />
      {/* Draggable icons */}
      <div className="relative w-full h-32">
        {icons.map((icon, idx) => (
          <Rnd
            key={icon.name}
            default={{
              x: 40 + idx * 90,
              y: 20,
              width: 60,
              height: 80,
            }}
            enableResizing={false}
            bounds="window"
          >
            <button
              onTouchEnd={() => openWindow(icon.name)}
              onClick={() => openWindow(icon.name)}
              className="flex flex-col items-center focus:outline-none"
            >
              <img
                src={icon.src}
                alt={icon.name}
                className="w-12 h-12 border-2 border-white rounded-xl shadow bg-black/50"
              />
              <span className="text-xs mt-1 text-white">{icon.name}</span>
            </button>
          </Rnd>
        ))}
      </div>
      {/* Windows */}
      {openWindows.map((name) => (
        <AnimatedWindow
          key={name}
          name={name}
          onClose={() => closeWindow(name)}
        >
          {name === "Stats" ? (
            <AcountStats></AcountStats>
          ) : (
            undefined
          )}

          {name === "Top100" ? (
            <Top100></Top100>
          ) : (
            undefined
          )}

          {name === "Settings" ? (
            <Settings></Settings>
          ) : (
            undefined
          )}

        </AnimatedWindow>
      ))}
    </div>
  );
}