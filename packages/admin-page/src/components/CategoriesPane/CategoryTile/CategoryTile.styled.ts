import styled from 'styled-components';

interface CategoryTileContainerProps {
  isExpanded: boolean;
}

export const CategoryTileContainer = styled.div<CategoryTileContainerProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  height: ${({ isExpanded }) => (isExpanded ? '5rem' : '2rem')};
  width: 20rem;
  padding: 0.5rem;
  padding-top: ${({ isExpanded }) => (isExpanded ? '0' : '0.5rem')};
  margin: 0.5rem;
  border: 1px solid black;
`;

export const CategoryName = styled.div`
  margin-top: 0.5rem;
`;

export const CategoryDetails = styled.div`
  margin: 0.5rem 0;
`;

export const ActionIcons = styled.div`
  display: flex;
  position: absolute;
  right: 0;
`;

export const DeleteIconWrapper = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const ActionButton = styled.div`
  height: 1rem;
  padding: 0.25rem;
  margin: 0.25rem;
  border: 1px solid black;
  cursor: pointer;
`;
