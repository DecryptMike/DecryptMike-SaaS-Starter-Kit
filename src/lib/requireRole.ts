// src/lib/rbac.ts
import { getCurrentUser } from "@/lib/getCurrentUser";

export async function requireRole(roles: string[]) {
  const user = await getCurrentUser();

  if (!user) {
    throw new Error("Unauthorized: No session");
  }

  if (!roles.includes(user.role)) {
    throw new Error("Unauthorized: Insufficient role");
  }

  return user;
}