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
    name: 'TestUser',
  },
  {
    id: UserID.Szymon,
    name: 'Szymon Szczepański',
  },
  {
    id: UserID.Patryk,
    name: 'Patryk Jakubowski',
  },
];
