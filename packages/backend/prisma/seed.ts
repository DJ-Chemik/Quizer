import { PrismaClient } from '@prisma/client';
import { questions } from './seeds/questions';
import { users } from './seeds/users';

const prisma = new PrismaClient();

const seedUsers = async () => {
  await prisma.user.createMany({
    data: users,
  });
};

const seedQuestions = async () => {
  await prisma.question.deleteMany();
  await prisma.question.createMany({
    data: questions,
  });
};

async function main() {
  await seedUsers();
  await seedQuestions();
}

const CODE = 1;

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(CODE);
  });
