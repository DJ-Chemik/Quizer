import {
  CacheInterceptor,
  CacheKey,
  CacheTTL,
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { ExampleService } from './example.service';

const CACHE_TTL = 10;

@Controller('/examples')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) { }

  @UseInterceptors(CacheInterceptor)
  @CacheKey('example')
  @CacheTTL(CACHE_TTL)
  @Get()
  getExamples() {
    return this.exampleService.getExamples();
  }

}
