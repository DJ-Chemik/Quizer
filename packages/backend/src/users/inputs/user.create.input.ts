import { IsEmail, IsString } from "class-validator";


export class CreateUserInput {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}