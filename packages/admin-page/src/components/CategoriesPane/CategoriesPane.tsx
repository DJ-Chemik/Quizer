import React, { useEffect, useState } from 'react';
import superagent from 'superagent';
import { CategoriesList } from './CategoriesPane.styled';
import CategoryTile from './CategoryTile/CategoryTile';
import { CategoryOutput as Category } from '@shared/interfaces';

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
            name={category.name}
            createdAt={category.creationDate}
            changedAt={category.updateDate}
            creatorName={category.creator.name}
          />
        ))}
      </CategoriesList>
    </div>
  );
};

export default CategoriesPane;
