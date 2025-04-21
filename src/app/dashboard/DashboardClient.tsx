"use client";

import React, { useRef, useEffect, useState } from "react";
import { getCurrentUser } from "@/lib/getCurrentUser";
import CheckoutButton from "@/components/ui/CheckoutButton";
import { signOut, useSession } from "next-auth/react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  BarChart,
  Bar
} from "recharts";
import {
  LayoutDashboard,
  BarChart2,
  FileText,
  Settings,
  Lock,
  ChevronRight,
  Code
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const DashboardClient = () => {
  const { data: session, status } = useSession();
  const [role, setRole] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);
  const [activity, setActivity] = useState<string[]>([]);

  useEffect(() => {
    console.log("🧠 Session Info:", session);
    console.log("📡 Status:", status);
  }, [session, status]);

  useEffect(() => {
    async function fetchUser() {
      const user = await getCurrentUser();
      if (user) {
        setUser(user);
        setRole(user.role);
      }
    }
    fetchUser();
  }, []);

  const growthData = [
    { name: "Jan", users: 2 },
    { name: "Feb", users: 1 },
    { name: "Mar", users: 2 },
    { name: "Apr", users: 3 },
    { name: "May", users: 1 },
    { name: "Jun", users: 2 },
    { name: "Jul", users: 1 },
    { name: "Aug", users: 1 },
    { name: "Sep", users: 1 },
    { name: "Oct", users: 1 },
    { name: "Nov", users: 1 },
    { name: "Dec", users: 1 }
  ];

  const salesData = [
    { name: "Jan", sales: 1200 },
    { name: "Feb", sales: 980 },
    { name: "Mar", sales: 240 },
    { name: "Apr", sales: 760 },
    { name: "May", sales: 1630 },
    { name: "Jun", sales: 480 },
    { name: "Jul", sales: 660 },
    { name: "Aug", sales: 2000 },
    { name: "Sep", sales: 950 },
    { name: "Oct", sales: 1300 },
    { name: "Nov", sales: 880 },
    { name: "Dec", sales: 500 }
  ];

  const primaryGreen = "#34d399";
  const backgroundAlpha = 0.9;
  const backgroundColorRgba = `rgba(0, 0, 0, ${backgroundAlpha})`;
  const textGreenBase = `text-[${primaryGreen}]`;
  const textOpacityHigh = "1";
  const textOpacityMedium = "0.85";
  const textOpacityLow = "0.70";
  const borderColorRgba = `rgba(52, 211, 153, 0.5)`;
  const textGlowStyle = { textShadow: `0 0 6px rgba(52, 211, 153, 0.7)` };
  const textGlowStrongStyle = {
    textShadow: `0 0 8px rgba(52, 211, 153, 0.9)`
  };

  const MatrixRain = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    let animationFrameId: number;
    let resizeTimeout: ReturnType<typeof setTimeout>;
    let drops: number[] = [];

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789ﾊﾐﾋｰｳｼ...";
      const fontSize = 14;

      const initializeMatrix = () => {
        const columns = Math.floor(canvas.width / fontSize);
        drops = Array(columns).fill(1);
      };

      const draw = () => {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = primaryGreen;
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
          const text = characters.charAt(
            Math.floor(Math.random() * characters.length)
          );
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
          const container = canvas.parentElement as HTMLElement | null;
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
          zIndex: 0
        }}
      />
    );
  };

  return (
    <div className="relative min-h-screen w-full p-4 md:p-8 bg-black flex items-center justify-center font-sans overflow-hidden">
      <MatrixRain />
      <div
        className="relative z-10 flex w-full max-w-6xl h-[80vh] max-h-[700px] rounded-xl overflow-hidden shadow-2xl shadow-emerald-500/10 border"
        style={{ backgroundColor: backgroundColorRgba, borderColor: borderColorRgba }}
      >
        {/* Sidebar */}
        <div
          className="w-56 border-r p-4 flex flex-col justify-between"
          style={{ backgroundColor: backgroundColorRgba, borderColor: borderColorRgba }}
        >
          <div className="flex flex-col items-start w-full">
            <ul className="space-y-3 list-none p-0 m-0 w-full">
              {[{ label: "Dashboard", icon: LayoutDashboard }, { label: "Analytics", icon: BarChart2 }, { label: "Billings", icon: FileText }, { label: "Settings", icon: Settings }].map(({ label, icon: Icon }, index) => (
                <li key={index}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "flex items-center justify-start py-2 text-sm rounded-md",
                      "hover:bg-[#112] transition"
                    )}
                    style={{
                      color: primaryGreen,
                      opacity: textOpacityLow,
                      position: "relative",
                      left: "-30px",
                      width: "calc(100% - 25px)"
                    }}
                  >
                    <Icon className="mr-3 h-5 w-5" /> {label}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-1 pl-2">
            <p className={`text-xs flex items-center ${textGreenBase}`} style={{ opacity: textOpacityLow }}>
              <ChevronRight className="w-3 h-3 mr-1" /> Next.js
            </p>
            <p className={`text-xs flex items-center ${textGreenBase}`} style={{ opacity: textOpacityLow }}>
              <Code className="w-3 h-3 mr-1" /> TailwindCSS
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col flex-1 overflow-hidden" style={{ backgroundColor: backgroundColorRgba }}>
          <div className="flex-grow p-5 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className={`text-xl font-semibold ${textGreenBase}`} style={{ opacity: textOpacityHigh, ...textGlowStrongStyle }}>
                  Dashboard
                </h2>
                <p className="text-sm text-green-400 mt-2">Role: {role}</p>
              </div>
              <div className="flex items-center space-x-2">
                <img src="/decryptmike-logo.png" alt="DecryptMike Logo" className="w-3 h-3 rounded-full border-2 animate-pulse-glow" style={{ borderColor: primaryGreen }} />
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: primaryGreen }} />
              </div>
            </div>

            {/* Revenue + Growth */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <Card style={{ backgroundColor: backgroundColorRgba, borderColor: borderColorRgba }}>
                <CardHeader className="pb-2 pt-4 px-4 border border-[#34d399]">
                  <CardTitle className={`${textGreenBase} text-xl`} style={{ opacity: textOpacityHigh, ...textGlowStrongStyle }}>
                    Total Revenue
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4 border border-[#34d399]">
                  <p className={`text-3xl font-bold ${textGreenBase}`} style={{ opacity: textOpacityLow, ...textGlowStrongStyle }}>
                    $12,345
                  </p>
                </CardContent>
              </Card>
              <Card style={{ backgroundColor: backgroundColorRgba, borderColor: borderColorRgba }}>
                <CardHeader className="pb-2 pt-4 px-4 border border-[#34d399]">
                  <CardTitle className={`${textGreenBase} text-xl`} style={{ opacity: textOpacityHigh, ...textGlowStrongStyle }}>
                    Users Growth
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4 border border-[#34d399]">
                  <ResponsiveContainer width="100%" height={150}>
                    <AreaChart data={growthData}>
                      <defs>
                        <linearGradient id="userGrowthGradientBlack" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor={primaryGreen} stopOpacity={0.4} />
                          <stop offset="95%" stopColor={primaryGreen} stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <Area type="monotone" dataKey="users" stroke={primaryGreen} strokeWidth={2} fill="url(#userGrowthGradientBlack)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Activity + Sales */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
              <Card className="lg:col-span-3" style={{ backgroundColor: backgroundColorRgba, borderColor: borderColorRgba }}>
                <CardHeader className="pb-2 pt-4 px-4 border border-[#34d399]">
                  <CardTitle className={`${textGreenBase} text-xl`} style={{ opacity: textOpacityHigh, ...textGlowStrongStyle }}>
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4 border border-[#34d399]">
                  <ScrollArea className="h-36">
                    <div className="space-y-1.5">
                      {activity.map((msg, index) => (
                        <p key={index} className={`${textGreenBase} text-[14px]`} style={{ opacity: textOpacityLow }}>
                          {msg}
                        </p>
                      ))}
                    </div>
                  </ScrollArea>

                  {role === "admin" && (
                    <div className="mt-4 border-t border-[#34d399] pt-4">
                      <h3 className={`${textGreenBase} text-lg mb-2`} style={textGlowStrongStyle}>
                        Admin Panel
                      </h3>
                      <p className={`${textGreenBase} text-sm`} style={{ opacity: textOpacityMedium }}>
                        Welcome, admin. You now have access to privileged tools and features.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="lg:col-span-2 flex flex-col" style={{ backgroundColor: backgroundColorRgba, borderColor: borderColorRgba }}>
                <CardHeader className="pb-2 pt-4 px-4 border border-[#34d399]">
                  <CardTitle className={`${textGreenBase} text-xl`} style={{ opacity: textOpacityHigh, ...textGlowStrongStyle }}>
                    Sales
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4 border border-[#34d399]">
                  <ResponsiveContainer width="100%" height={150}>
                    <BarChart data={salesData}>
                      <Bar dataKey="sales" fill={primaryGreen} radius={[2, 2, 0, 0]} barSize={12} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-auto w-full flex justify-between items-end px-4 pb-4">
            <div className="flex items-center gap-4">
              <CheckoutButton />
              <div style={{ width: "8px", backgroundColor: "black" }} />
              <form action="/api/stripe/manage" method="POST">
                <button
                  type="submit"
                  className="text-sm font-medium px-4 py-2 rounded border border-[#34d399] bg-[#34d399] text-black hover:bg-transparent hover:text-[#34d399] transition cursor-none ml-auto"
                >
                  Manage Billing
                </button>
              </form>
              <div style={{ width: "8px", backgroundColor: "black" }} />
              {user && (
                <p className="text-xs text-[#34d399] ml-4" style={{ opacity: 0.8 }}>
                  Plan: {user.stripeCustomerId ? "Pro Plan (Active)" : "Free Plan"}
                </p>
              )}
            </div>
            <div className="flex flex-col items-end space-y-2">
              <button
                onClick={() => signOut({ callbackUrl: "/signin" })}
                className="text-sm border border-[#34d399] px-4 py-1 rounded transition"
                style={{ backgroundColor: "#000000", color: "#34d399" }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#34d399";
                  e.currentTarget.style.color = "#000000";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#000000";
                  e.currentTarget.style.color = "#34d399";
                }}
              >
                Log out
              </button>
              <div className="flex items-center space-x-2">
                <Lock className={`w-4 h-4 ${textGreenBase}`} style={{ opacity: textOpacityMedium }} />
                <span className={`${textGreenBase} text-xs font-medium`} style={{ opacity: textOpacityMedium }}>
                  Built by DecryptMike
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   );
  };
  
  export default DashboardClient;