import React, { useEffect, useState } from 'react';
import superagent from 'superagent';
import { CategoriesList } from './CategoriesPane.styled';
import CategoryTile from './CategoryTile/CategoryTile';
import { CategoryOutput as Category, CategoryUpdateInput } from '@shared/interfaces';

const CategoriesPane = () => {
  const [categories, setCategories] = useState<Category[]>();

  const fetchCategories = async () => {
    let responseResult: Category[] | undefined = undefined;
    try {
      const response = await superagent
        .get(`${process.env.API_URL}/categories`);
      responseResult = response.body;
    } catch (e: unknown) {
      console.error('Fetching categories failed!', e);
    }

    if (responseResult) {
      setCategories(responseResult);
    }
  };

  const updateCategory = async (input: CategoryUpdateInput) => {
    let obtainedCategory: Category | undefined = undefined;
    try {
      const response = await superagent
        .post(`${process.env.API_URL}/categories/${input.id}`)
        .send({
          'input': input,
        });
      obtainedCategory = response.body;
    } catch (e: unknown) {
      console.error('Updating category failed!', e);
    }

    if (obtainedCategory && categories) {
      const newCategories = categories.filter(category => category.id !== obtainedCategory?.id);
      setCategories([...newCategories, obtainedCategory]);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if (!categories) {
    return <div>Kategorie nie zostały jeszcze pobrane</div>;
  }

  if (!categories.length) {
    return <div>Brak kategorii do wyświetlenia</div>;
  }

  return (
    <div>
      <div>Kategorie</div>
      <CategoriesList>
        {categories.map((category) => (
          <CategoryTile
            id={category.id}
            name={category.name}
            createdAt={category.creationDate}
            changedAt={category.updateDate}
            creatorName={category.creator.name}
            updateCategory={updateCategory}
          />
        ))}
      </CategoriesList>
    </div>
  );
};

export default CategoriesPane;
