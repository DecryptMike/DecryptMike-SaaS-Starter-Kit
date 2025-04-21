import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";
import { requireRole } from "@/lib/rbac"; // ✅ NEW
import DashboardClient from "./DashboardClient";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  console.log("🧠 Server Session:", session); // 🔍 Check if session exists

  if (!session) {
    console.log("❌ No session found. Redirecting...");
    return redirect("/signin");
  }

  const user = await requireRole(["admin", "user"]);
  console.log("✅ Authorized User:", user); // 🔍 Check if role passed

  return <DashboardClient />;
}
