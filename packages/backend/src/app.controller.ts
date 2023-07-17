import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) { }

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
