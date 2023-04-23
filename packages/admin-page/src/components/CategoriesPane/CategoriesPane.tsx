import React from 'react';
import { CategoriesList } from './CategoriesPane.styled';
import CategoryTile from './CategoryTile/CategoryTile';

interface Category {
  name: string;
  createdAt: Date;
  changedAt: Date;
  creator: string;
}

const MOCKED_CATEGORIES: Category[] = [
  {
    name: 'Tesowanie End-to-End',
    createdAt: new Date(),
    changedAt: new Date(),
    creator: 'Szymon Szczepański',
  },
  {
    name: 'React',
    createdAt: new Date(),
    changedAt: new Date(),
    creator: 'Szymon Szczepański',
  },
  {
    name: 'Zarządzanie stanem',
    createdAt: new Date(),
    changedAt: new Date(),
    creator: 'Szymon Szczepański',
  },
  {
    name: 'Obsługa błędów',
    createdAt: new Date(),
    changedAt: new Date(),
    creator: 'Szymon Szczepański',
  },
  {
    name: 'Redux',
    createdAt: new Date(),
    changedAt: new Date(),
    creator: 'Szymon Szczepański',
  },
];

const CategoriesPane = () => {

  return (
    <div>
      <div>Categories</div>
      <CategoriesList>
        {MOCKED_CATEGORIES.map((category) => (
          <CategoryTile
            name={category.name}
            createdAt={category.createdAt}
            changedAt={category.changedAt}
            creator={category.creator}
          />
        ))}
      </CategoriesList>
    </div>
  );
};

export default CategoriesPane;
