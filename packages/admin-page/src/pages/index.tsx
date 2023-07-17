import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import DummyBackendConnector from '../components/DummyBackendConnector/DummyBackendConnector';
import CategoriesPane from '../components/CategoriesPane/CategoriesPane';

const pageStyles = {
  padding: 40,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <DummyBackendConnector />
      <CategoriesPane />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
