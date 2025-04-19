// src/lib/rbac.ts
import { getCurrentUserWithRole } from "@/lib/auth";
import { redirect } from "next/navigation";

export const requireRole = async (allowedRoles: string[]) => {
  const user = await getCurrentUserWithRole();

  if (!user || !allowedRoles.includes(user.role)) {
    return redirect("/unauthorized");
  }

  return user;
}; 