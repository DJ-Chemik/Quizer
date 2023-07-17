import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth.constants';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AuthController } from './auth.controller';
import { RefreshJWTStrategy } from './strategies/refreshToken.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: jwtConstants.accessTokenExpiresIn,
      },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, RefreshJWTStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule { }
