import { User } from '@prisma/client';

type SeedUser = Omit<User, 'creationDate' | 'updateDate'>;

export enum UserID {
  TestUser = '50e5297b-d775-4f76-b724-92f79662bf01',
  Szymon = '50e5297b-d775-4f76-b724-92f79662bf02',
  Patryk = '50e5297b-d775-4f76-b724-92f79662bf03',
}

export const users: SeedUser[] = [
  {
    id: UserID.TestUser,
    username: 'TestUser',
    email: 'testuser@quizer.pl',
    password: '123456',
  },
  {
    id: UserID.Szymon,
    username: 'Szymon Szczepański',
    email: 'szymon@quizer.pl',
    password: '123456',
  },
  {
    id: UserID.Patryk,
    username: 'Patryk Jakubowski',
    email: 'patryk@quizer.pl',
    password: '123456',
  },
];
