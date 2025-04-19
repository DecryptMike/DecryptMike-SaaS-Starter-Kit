import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.recentActivity.createMany({
    data: [
      { message: "User john@example.com logged in" },
      { message: "User jane@example.com signed up" },
      { message: "Admin updated billing settings" },
      { message: "User deleted account" },
      { message: "Payment received: $49.00" },
      { message: "User upgraded to Pro Plan" },
    ],
  });

  console.log("✅ Seeded recent activity!");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});