import { User } from '@prisma/client';

type SeedUser = Omit<User, 'creationDate' | 'updateDate'>;

export const users: SeedUser[] = [
  {
    id: '50e5297b-d775-4f76-b724-92f79662bf01',
    name: 'TestUser',
  },
];
