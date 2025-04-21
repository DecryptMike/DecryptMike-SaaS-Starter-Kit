// src/lib/auth.ts
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

// ✅ This is the only export needed here
export const auth = () => getServerSession(authOptions);
