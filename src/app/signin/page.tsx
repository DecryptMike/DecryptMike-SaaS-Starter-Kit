"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

// ✅ MatrixRain Component (Canvas Based)
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
      if (!canvas) return;
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
        if (!canvas) return;
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

// ✅ Sign In Page
export default function SignInPage() {
  return (
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden font-sans">
      {/* Matrix Rain Background */}
      <MatrixRain />

      {/* Sign In Box */}
      <div
        className="relative z-10 flex flex-col items-center justify-center border rounded-lg px-10 py-8 shadow-xl"
        style={{
          borderColor: "#34d399",
          backgroundColor: "#000000",
          width: "360px",
        }}
      >
        {/* Logo */}
        <Image
          src="/decryptmike-logo.png"
          alt="DecryptMike Logo"
          width={75}
          height={75}
          className="mb-5"
        />

        {/* Title */}
        <h1
          className="text-2xl font-bold mb-4 text-center"
          style={{ color: "#34d399", textShadow: "0 0 8px #34d399" }}
        >
          Sign In To Decrypt Mike
        </h1>

        {/* GitHub Button */}
        <button
  onClick={() => signIn("github", { callbackUrl: "/dashboard", redirect: true })}
  className="cursor-none mt-2 px-4 py-2 text-sm font-medium rounded bg-[#34d399] text-black hover:bg-[#2dd4bf]"
>
  Sign In With Github
</button>
      </div>
    </div>
  );
}
