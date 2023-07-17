import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserInput } from './inputs/user.create.input';
import { Prisma, User as UserEntity } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';
import { bcryptConstants } from 'src/auth/auth.constants';

export type User = Pick<UserEntity, 'id' | 'username' | 'email' | 'password'>;

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async findOne(username: string): Promise<User | undefined> {
    return await this.prisma.user.findFirst({
      where: {
        username,
      },
    });
  }

  async register(input: CreateUserInput) {
    try {
      const result = await this.prisma.user.create({
        data: {
          username: input.username,
          email: input.email,
          password: bcrypt.hashSync(input.password, bcryptConstants.numberOfRounds),
        },
      })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...userInfo } = result;
      return userInfo;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        console.error(`Error while creating user "${input.username}" with code: ${error.code}. Meta: "${error.meta?.target}"`);
      } else {
        console.error('Unknown error while creating user');
      }
      throw new HttpException('User can not be created!', 500);
    }
  }
}
