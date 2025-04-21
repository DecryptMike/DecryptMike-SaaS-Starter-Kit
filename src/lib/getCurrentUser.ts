// src/lib/getCurrentUser.ts
"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const getCurrentUser = async () => {
  const session = await auth();

  console.log("🔍 Checking session in getCurrentUser", session); // ✅ Add this line

  if (!session?.user?.email) return null;

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  return user;
};