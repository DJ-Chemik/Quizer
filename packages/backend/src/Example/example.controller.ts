import {
  CacheInterceptor,
  CacheKey,
  CacheTTL,
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { ExampleService } from './example.service';

@Controller('/examples')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) { }

  @UseInterceptors(CacheInterceptor)
  @CacheKey('example')
  @CacheTTL(10)
  @Get()
  getExamples() {
    return this.exampleService.getExamples();
  }

}
