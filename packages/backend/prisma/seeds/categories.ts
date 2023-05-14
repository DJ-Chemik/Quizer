import { Category } from '@prisma/client';
import { UserID } from './users';

type SeedCategory = Omit<Category, 'creationDate' | 'updateDate'>;

export enum CategoryID {
  ID_1 = 'f350a09b-7a75-440d-8393-9fe7f67c3f01',
  ID_2 = 'f350a09b-7a75-440d-8393-9fe7f67c3f02',
  ID_3 = 'f350a09b-7a75-440d-8393-9fe7f67c3f03',
  ID_4 = 'f350a09b-7a75-440d-8393-9fe7f67c3f04',
  ID_5 = 'f350a09b-7a75-440d-8393-9fe7f67c3f05',
  ID_6 = 'f350a09b-7a75-440d-8393-9fe7f67c3f06',
}

export const categories: SeedCategory[] = [
  {
    id: CategoryID.ID_1,
    name: 'TypeScript',
    creatorId: UserID.Szymon,
  },
  {
    id: CategoryID.ID_2,
    name: 'Testowanie Jednostkowe',
    creatorId: UserID.Szymon,
  },
  {
    id: CategoryID.ID_3,
    name: 'React',
    creatorId: UserID.Szymon,
  },
  {
    id: CategoryID.ID_4,
    name: 'React Contexts',
    creatorId: UserID.Szymon,
  },
  {
    id: CategoryID.ID_5,
    name: 'Redux',
    creatorId: UserID.Szymon,
  },
  {
    id: CategoryID.ID_6,
    name: 'Maszyny Stanowe',
    creatorId: UserID.Szymon,
  },
];
