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
      const { email, name, image, emailVerified } = data;

      if (!email) throw new Error("Email is required for user creation");

      return prisma.user.create({
        data: {
          email,
          name,
          image,
          emailVerified,
          role,
        },
      });
    },
  };
}