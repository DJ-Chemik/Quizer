import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
  imports: [],
  controllers: [CategoryController],
  providers: [
    PrismaService,
    CategoryService,
  ],
})
export class CategoryModule { }
