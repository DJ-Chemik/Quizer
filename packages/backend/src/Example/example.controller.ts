import { CacheKey, CacheTTL, Controller, Get } from '@nestjs/common';
import { ExampleService } from './example.service';

@Controller('/examples')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) { }

  @Get()
  @CacheKey('example')
  @CacheTTL(10)
  getExamples() {
    return this.exampleService.getExamples();
  }

}
