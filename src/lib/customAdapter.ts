// src/lib/customAdapter.ts
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import type { Adapter, AdapterUser } from "next-auth/adapters";

type CustomUser = Omit<AdapterUser, "id"> & { role?: string };

export function CustomPrismaAdapter(): Adapter {
  const originalAdapter = PrismaAdapter(prisma);

  return {
    ...originalAdapter,
    async createUser(data: CustomUser) {
      const role = data.role ?? "user";
      return prisma.user.create({
        data: {
          ...data,
          role,
        },
      });
    },
  };
}