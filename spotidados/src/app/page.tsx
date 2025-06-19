"use client"
import { useRouter } from "next/navigation";
import { useRef, useState, useEffect } from "react";

const ORIGINAL_SPEED = 0.3;

export default function Home() {
  const router = useRouter();
  const [angle, setAngle] = useState(0);
  const [speed, setSpeed] = useState(ORIGINAL_SPEED);
  const [spinning, setSpinning] = useState(true);
  const lastY = useRef<number | null>(null);
  const animationRef = useRef<number | null>(null);

  // Animation loop
  useEffect(() => {
    function animate() {
      if (spinning) {
        setAngle(prev => prev + speed);
      }
      animationRef.current = requestAnimationFrame(animate);
    }
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [spinning, speed]);

  // Gradually return to original speed when spinning and speed is not original
  useEffect(() => {
    if (!spinning) return;
    if (speed === ORIGINAL_SPEED) return;

    const interval = setInterval(() => {
      setSpeed(prev => {
        // Move speed towards ORIGINAL_SPEED
        if (Math.abs(prev - ORIGINAL_SPEED) < 0.01) return ORIGINAL_SPEED;
        return prev + (ORIGINAL_SPEED - prev) * 0.02;
      });
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [spinning, speed]);

  // Touch handlers
  function handleTouchStart(e: React.TouchEvent) {
    setSpinning(false);
    lastY.current = e.touches[0].clientY;
  }

  function handleTouchMove(e: React.TouchEvent) {
    const currentY = e.touches[0].clientY;
    if (lastY.current !== null) {
      const deltaY = currentY - lastY.current;
      if (Math.abs(deltaY) > 5) {
        if (deltaY > 0) {
          setSpeed(s => Math.min(s + 0.5, 10)); // swipe down: faster
        } else {
          setSpeed(s => Math.max(s - 0.5, -10)); // swipe up: reverse
        }
      }
      lastY.current = currentY;
    }
  }

  function handleTouchEnd() {
    setSpinning(true);
    lastY.current = null;
  }

  return (
    <div className="bg-cover bg-center h-dvh">
      <div className="relative top-[147px] left-[-327px] w-[635px] ">
        <img
          style={{ transform: `rotate(${angle}deg)` }}
          width={"635px"}
          src="/cd_text.png"
          alt="cd turning with text inside"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          draggable={false}
        />
      </div>
      <div className="absolute top-[782px] left-[180px] flex justify-center">
        <button
          onClick={() => router.push('/TestWindow')}
          className="relative w-[90px] h-[90px] rounded-[20px] flex items-center justify-center bg-gradient-to-br from-[#d7dce1] to-[#a1a8ae] 
                    border-[2px] border-[#6c7176] 
                    shadow-[4px_4px_8px_rgba(0,0,0,0.4),inset_-2px_-2px_4px_#f0f0f0,inset_2px_2px_4px_#6e6e6e]
                    hover:shadow-[0_0_10px_#ffffff,inset_-1px_-1px_3px_#ffffff,inset_1px_1px_3px_#808080]
                    hover:bg-gradient-to-br hover:from-[#e4e8ec] hover:to-[#b1b8be]
                    active:translate-y-[2px] transition-all duration-200"
        >
          <img
            src="/play_icon.png"
            alt="Play"
            width="40"
            className="drop-shadow-[0_0_2px_black] saturate-150 contrast-125"
          />
        </button>
      </div>
    </div>
  );
}
