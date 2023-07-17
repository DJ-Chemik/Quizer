import { User } from "../Models/User";

export interface CategoryOutput {
  id: string;
  name: string;
  creationDate: string;
  updateDate: string;
  creator: Pick<User, 'id' | 'name'>;
}
