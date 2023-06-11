import styled, { css } from 'styled-components';
import { CategoryTileContainer } from '../CategoryTile/CategoryTile.styled';

export const NewCategoryAdderContainer = styled(CategoryTileContainer)`
  padding-top: 0;
  ${({ isExpanded }) => !isExpanded && css`
    padding-left: 0;
    border: none;
  `}
`;

export const PlusSquareWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: left;
  width: 100%;
`;

export const PlusSquareButton = styled.div`
  --b: 0.5rem;
  width: 2.75rem;
  height: 2.75rem;
  aspect-ratio: 1;
  border: 1px solid #000;
  background:
    conic-gradient(from 90deg at var(--b) var(--b),#fff 90deg,#444 0) 
    calc(100% + var(--b)/2) calc(100% + var(--b)/2)/
    calc(50%  + var(--b))   calc(50%  + var(--b));
`;
