import {
  Body,
  CacheInterceptor,
  CacheKey,
  CacheTTL,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionInput, QuestionUpdateInput } from '@shared/interfaces';

const CACHE_TTL = 10;

@Controller('/questions')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) { }

  @Post()
  createQuestion(@Body() questionInput: QuestionInput) {
    return this.questionService.createQuestion(questionInput);
  }

  @UseInterceptors(CacheInterceptor)
  @CacheKey('questions')
  @CacheTTL(CACHE_TTL)
  @Get()
  getQuestions() {
    return this.questionService.getQuestions();
  }

  @Get(':id')
  getQuestion(@Param('id') id: string) {
    return this.questionService.getQuestion(id);
  }

  @Post(':id')
  updateQuestion(@Param('id') id: string, @Body() questionUpdateInput: QuestionUpdateInput) {
    return this.questionService.updateQuestion(id, questionUpdateInput);
  }

  @Delete(':id')
  deleteQuestion(@Param('id') id: string) {
    return this.questionService.deleteQuestion(id);
  }
}
