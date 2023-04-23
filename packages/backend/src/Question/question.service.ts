import { Injectable } from '@nestjs/common';
import { QuestionInput, QuestionUpdateInput } from '@shared/interfaces';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class QuestionService {
  constructor(private prisma: PrismaService) { }

  async createQuestion(questionInput: QuestionInput) {
    return await this.prisma.question.create({
      data: {
        content: questionInput.content,
        goodAnswer: questionInput.goodAnswer,
        name: questionInput.name,
        wrongAnswerOne: questionInput.wrongAnswerOne,
        wrongAnswerTwo: questionInput.wrongAnswerTwo,
        wrongAnswerThree: questionInput.wrongAnswerThree,
        creator: { connect: { id: questionInput.creatorId }},
      },
    });
  }

  async getQuestions() {
    return await this.prisma.question.findMany();
  }

  async getQuestion(id: string) {
    return await this.prisma.question.findFirst({ where: { id }});
  }

  async updateQuestion(id: string, questionUpdateInput: QuestionUpdateInput) {
    return await this.prisma.question.update({
      where: { id },
      data: questionUpdateInput,
    });
  }

  async deleteQuestion(id: string) {
    return await this.prisma.question.delete({ where: { id }});
  }
}
