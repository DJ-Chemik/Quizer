import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User, UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

export interface LoginJWTPayload {
  username: string;
  sub: {
    id: string;
  },
}

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) { }

  async validateUser(username: string, givenPassword: string) {
    const user = await this.usersService.findOne(username);
    if (user && bcrypt.compareSync(givenPassword, user.password)) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  // eslint-disable-next-line require-await
  async login(user: User) {
    const payload: LoginJWTPayload = {
      username: user.username,
      sub: {
        id: user.id,
      },
    };
    return {
      // eslint-disable-next-line camelcase
      access_token: this.jwtService.sign(payload),
    };
  }

}
