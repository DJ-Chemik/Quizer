import { Body, Controller, Request, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
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
