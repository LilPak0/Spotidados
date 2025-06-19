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
    <div className="bg-[url(/main_background.png)] bg-cover bg-center h-dvh">
      <div className="relative top-[147px] left-[-318px] w-[635px]">
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
      <div className="absolute top-[782px] left-[180px] flex justify-center ">
        <button
          onClick={() => router.push('/AccountStats')}
          className="relative bg-gradient-to-br from-gray-700 to-gray-300 w-[80px] h-[80px] rounded-[15%] flex items-center justify-center shadow-[2px_5px_5px_rgba(0,0,0,0.4)] overflow-hidden">
          <img width={"47px"} src="/play_icon.png" alt="Icon of a play button" />
        </button>
      </div>
    </div>
  );
}
