import { QuestionInput } from "./QuestionInput";

export type QuestionUpdateInput = Omit<QuestionInput, 'creatorId'>;
