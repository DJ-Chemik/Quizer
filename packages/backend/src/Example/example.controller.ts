import { Controller, Get } from '@nestjs/common';
import { ExampleService } from './example.service';

@Controller('/examples')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) { }

  @Get()
  getModules() {
    return this.exampleService.getExamples();
  }

}
