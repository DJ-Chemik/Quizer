import { PrismaClient } from '@prisma/client';
import { questions } from './seeds/questions';
import { users } from './seeds/users';
import { categories } from './seeds/categories';

const prisma = new PrismaClient();

const seedUsers = async () => {
  await prisma.user.createMany({
    data: users,
  });
};

const seedCategories = async () => {
  await prisma.category.createMany({
    data: categories,
  });
};

const seedQuestions = async () => {
  await prisma.question.createMany({
    data: questions,
  });
};

async function main() {
  await prisma.category.deleteMany();
  await prisma.question.deleteMany();
  await prisma.user.deleteMany();
  await seedUsers();
  await seedCategories();
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
