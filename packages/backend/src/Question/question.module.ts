import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';

@Module({
  imports: [],
  controllers: [QuestionController],
  providers: [
    QuestionService,
    PrismaService,
  ],
})
export class QuestionModule { }
