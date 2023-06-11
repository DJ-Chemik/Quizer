import { Injectable } from '@nestjs/common';
import { CategoryInput, CategoryUpdateInput } from '@shared/interfaces';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) { }

  async getCategories() {
    return await this.prisma.category.findMany({
      include: {
        creator: true,
      },
    });
  }

  async getCategory(id: string) {
    return await this.prisma.category.findFirst({ where: { id } });
  }

  async createCategory(input: CategoryInput) {
    return await this.prisma.category.create({
      data: {
        name: input.name,
        creator: { connect: { id: input.creatorId } },
      },
      include: {
        creator: true,
      },
    });
  }

  async updateCategory(id: string, input: CategoryUpdateInput) {
    return await this.prisma.category.update({
      where: { id },
      data: {
        name: input.name,
      },
      include: {
        creator: true,
      },
    });
  }

  async deleteCategory(id: string) {
    return await this.prisma.category.delete({ where: { id } });
  }
}
