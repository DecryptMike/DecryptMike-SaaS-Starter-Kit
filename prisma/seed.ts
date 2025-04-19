import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.transaction.createMany({
    data: [
      { amount: 1200 }, { amount: 350 }, { amount: 740 }, { amount: 1800 }
    ]
  });

  await prisma.userGrowth.createMany({
    data: [
      { month: 'Jan', users: 200 }, { month: 'Feb', users: 150 }, { month: 'Mar', users: 300 },
    ]
  });

  await prisma.sale.createMany({
    data: [
      { month: 'Jan', sales: 50 }, { month: 'Feb', sales: 40 }, { month: 'Mar', sales: 60 }
    ]
  });
}

main()
  .then(() => console.log('✅ Seeded DB'))
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());