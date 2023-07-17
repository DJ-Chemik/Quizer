import { Category } from "../Models/Category";

export type CategoryInput = Pick<Category, 'name'> & {
  creatorId: string;
};