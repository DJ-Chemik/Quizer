import { Body, Controller, Request, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) { }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('dummy/:pathParam')
  dummyConnector(
    @Query('queryParam') queryParam: number,
    @Param('pathParam') pathParam: number,
    @Body() body: { bodyParam: number },
  ): string {
    return `MULTIPLICATION ${queryParam * pathParam * body.bodyParam}`;
  }
}
