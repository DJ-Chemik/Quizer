import { Question } from "../Models";

export type QuestionInput = Omit<Question, 'id' | 'creationDate' | 'updateDate'>;
