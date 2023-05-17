import { Category } from "./Category";
import { Question } from "./Question";

export interface User {
  id: string;
  name: string;
  creationDate: Date;
  updateDate: Date;
  addedCategories: Category[];
  addedQuestions: Question[];
  approvedQuestions: Question[];
}
