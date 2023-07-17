import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class RefreshJwtAuthGuard extends AuthGuard('jwt-refresh') {
  canActivate(context: ExecutionContext) {
    // Custom authentication logic here
    return super.canActivate(context);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleRequest<TUser = unknown>(err: unknown, user: TUser, info: unknown) {
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}
