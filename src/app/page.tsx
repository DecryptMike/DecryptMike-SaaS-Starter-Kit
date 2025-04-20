"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

// ✅ MatrixRain Component
const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  let animationFrameId: number;
  let resizeTimeout: NodeJS.Timeout;
  let drops: number[] = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789ﾊﾐﾋｰｳｼ...";
    const fontSize = 14;
    const primaryGreen = "#34d399";

    const initializeMatrix = () => {
      const columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(1);
    };

    const draw = () => {
      if (!canvas || !ctx) return;
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = primaryGreen;
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const container = canvas.parentElement;
        if (container) {
          canvas.width = container.clientWidth;
          canvas.height = container.clientHeight;
          initializeMatrix();
        }
      }, 250);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
};

// ✅ Final Home Page
export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      <MatrixRain />

      {/* Centered Black Box with Green Border */}
      <div
        className="relative z-10 text-center border border-[#34d399] p-10 rounded-xl shadow-lg"
        style={{ backgroundColor: "#000000", backdropFilter: "blur(2px)" }}
      >
        {/* Logo */}
        <Image
          src="/decryptmike-logo.png"
          alt="DecryptMike Logo"
          width={75}
          height={75}
          className="mx-auto mb-5"
        />

        {/* Title */}
        <h1
          className="text-2xl font-bold text-[#34d399] mb-4"
          style={{ textShadow: "0 0 8px #34d399" }}
        >
          Access Restricted – Please Sign In
        </h1>

<Link href="/signin">
  <button
    className="cursor-none mt-2 px-4 py-2 text-sm font-medium rounded bg-[#34d399] text-black shadow-md hover:bg-emerald-400 transition"
  >
    Sign In To Continue
  </button>
</Link>

      </div>
    </div>
  );
}
