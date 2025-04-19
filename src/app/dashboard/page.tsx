import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";
import { requireRole } from "@/lib/rbac"; // ✅ NEW
import DashboardClient from "./DashboardClient";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin");
  }

  // ✅ Require the user to have "admin" or "user" role
  await requireRole(["admin", "user"]);

  return <DashboardClient />;
}
