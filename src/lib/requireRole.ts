import { getCurrentUser } from "@/lib/getCurrentUser";

export async function requireRole(role: string) {
  const user = await getCurrentUser();

  if (!user) {
    throw new Error("Unauthorized: No session");
  }

  if (user.role !== role) {
    throw new Error("Unauthorized: Insufficient role");
  }

  return user;
}