import { Category } from "../Models/Category";

export type CategoryUpdateInput = Pick<Category, 'id' | 'name'>;