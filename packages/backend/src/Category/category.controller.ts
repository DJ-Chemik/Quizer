import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryInput, CategoryUpdateInput } from '@shared/interfaces';

@Controller('/categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  @Get()
  getCategories() {
    return this.categoryService.getCategories();
  }

  @Get(':id')
  getCategory(@Param('id') id: string) {
    return this.categoryService.getCategory(id);
  }

  @Post()
  createQuestion(@Body() input: CategoryInput) {
    return this.categoryService.createCategory(input);
  }

  @Post(':id')
  updateCategory(@Param('id') id: string, @Body() input: CategoryUpdateInput) {
    return this.categoryService.updateCategory(id, input);
  }

  @Delete(':id')
  deleteQuestion(@Param('id') id: string) {
    return this.categoryService.deleteCategory(id);
  }
}
