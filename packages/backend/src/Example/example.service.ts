import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ExampleService {

  constructor(private prisma: PrismaService) { }

  async getExamples() {
    return await this.prisma.example.findMany();
  }

}
