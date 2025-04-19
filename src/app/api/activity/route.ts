import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const activities = await prisma.recentActivity.findMany({
    orderBy: { createdAt: "desc" },
    take: 10,
  });

  const messages = activities.map((a) => a.message);
  return NextResponse.json(messages);
}
