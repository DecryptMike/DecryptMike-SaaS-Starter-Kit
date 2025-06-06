// src/app/api/auth/github/route.ts
import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

const handler = NextAuth(authOptions);

export const GET = handler;
export const POST = handler;
