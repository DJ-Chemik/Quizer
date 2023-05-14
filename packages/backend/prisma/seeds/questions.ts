import { Question } from '@prisma/client';
import { UserID } from './users';

type SeedQuestion = Omit<Question, 'creationDate' | 'updateDate'>;

export enum QuestionID {
  ID_1 = '3e5c6462-cb79-4a13-af8f-3efdcd301301',
}

export const questions: SeedQuestion[] = [
  {
    id: QuestionID.ID_1,
    name: 'TestQuestion',
    creatorId: UserID.TestUser,
    content: 'What\'s 2 + 2?',
    goodAnswer: '4',
    wrongAnswerOne: '5',
    wrongAnswerTwo: 'Fish',
    wrongAnswerThree: 'Mudkipz',
  },
];
