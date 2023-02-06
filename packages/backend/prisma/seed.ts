import { PrismaClient } from '@prisma/client'
import { examples } from './seeds/examples';

const prisma = new PrismaClient()

const seedExamples = async () => {
  await prisma.example.deleteMany();
  await prisma.example.createMany({
    data: examples,
  });
};


async function main() {
  await seedExamples();
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })