"use client";

import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { MatrixRain } from "@/app/dashboard/MatrixRain";

export default function SuccessPage() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden">
      <MatrixRain />

      <div className="relative z-10 text-center p-6 rounded-lg shadow-lg">
        <CheckCircle className="w-16 h-16 text-[#34d399] animate-pulse mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-[#34d399] animate-pulse mb-2">
          Subscription Successful
        </h1>
        <p className="text-[#34d399] text-lg mb-6">
          Welcome To Behind The Scenes Of Decrypt Mike!
        </p>

        <Link href="/dashboard">
          <button
            className="border border-[#34d399] text-[#34d399] px-5 py-2 rounded transition-colors duration-300"
            style={{ backgroundColor: "#000000" }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#34d399";
              e.currentTarget.style.color = "#000000";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#000000";
              e.currentTarget.style.color = "#34d399";
            }}
          >
            Return To Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
}
