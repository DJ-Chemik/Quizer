import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ExampleController } from './example.controller';
import { ExampleService } from './example.service';

@Module({
  imports: [],
  controllers: [ExampleController],
  providers: [
    ExampleService,
    PrismaService,
  ],
})
export class ExampleModule { }
