import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/getCurrentUser";

export async function requireRole(roles: string[]) {
  const user = await getCurrentUser();

  console.log("🔐 Fetched User:", user); // ✅ Debug line

  if (!user || !roles.includes(user.role)) {
    return redirect("/unauthorized");
  }

  return user;
}