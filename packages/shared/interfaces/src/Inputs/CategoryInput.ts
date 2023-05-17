import { Category } from "../Models/Category";

export type CategoryInput = Pick<Category, 'id' | 'name'> & {
  creatorId: string;
};