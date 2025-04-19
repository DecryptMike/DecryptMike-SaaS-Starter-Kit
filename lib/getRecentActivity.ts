// lib/getRecentActivity.ts
import { prisma } from "@/lib/prisma";

export const getRecentActivity = async () => {
  const activity = await prisma.recentActivity.findMany({
    orderBy: { createdAt: "desc" },
    take: 10,
  });

  return activity;
};