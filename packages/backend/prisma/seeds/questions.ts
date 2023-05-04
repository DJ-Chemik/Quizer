import { Question } from '@prisma/client';

type SeedQuestion = Omit<Question, 'creationDate' | 'updateDate'>;

export const questions: SeedQuestion[] = [
  {
    id: '3e5c6462-cb79-4a13-af8f-3efdcd301301',
    name: 'TestQuestion',
    creatorId: '50e5297b-d775-4f76-b724-92f79662bf01',
    content: 'What\s 2 + 2?',
    goodAnswer: '4',
    wrongAnswerOne: '5',
    wrongAnswerTwo: 'Fish',
    wrongAnswerThree: 'Mudkipz',
  },
];
