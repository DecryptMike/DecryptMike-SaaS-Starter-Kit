// src/lib/auth.ts
// src/lib/auth.ts
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const auth = () => getServerSession(authOptions);

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getCurrentUserWithRole = async () => {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return null;

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  return user;
};
