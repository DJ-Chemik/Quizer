import { Question } from "./Question";
import { User } from "./User";

export interface Category {
  id: string;
  name: string;
  creationDate: Date;
  updateDate: Date;
  questions: Question[];
  creator: User;
}
