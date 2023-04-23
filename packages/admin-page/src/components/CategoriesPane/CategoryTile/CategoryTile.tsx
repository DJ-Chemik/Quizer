import React, { useState } from 'react';
import { ActionIcons, CategoryDetails, CategoryName, CategoryTileContainer, EditIcon, ExpandIcon } from './CategoryTile.styled';

interface CategoryTileProps {
  name: string;
  createdAt: Date;
  changedAt: Date;
  creator: string;
}

const CategoryTile = (props: CategoryTileProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClickExpand = () => {
    setIsExpanded((previous) => !previous);
  };

  const renderCategoryDetails = () => {
    return (
      <CategoryDetails>
        <div>Utworzono: {props.createdAt.toLocaleDateString()}</div>
        <div>Zmodyfikowano: {props.changedAt.toLocaleDateString()}</div>
        <div>Twórca: {props.creator}</div>
      </CategoryDetails>
    );
  };

  return (
    <CategoryTileContainer isExpanded={isExpanded}>
      <div>
        <CategoryName>{props.name}</CategoryName>
        {isExpanded ? renderCategoryDetails() : null}
      </div>
      <ActionIcons>
        <EditIcon>Edit</EditIcon>
        <ExpandIcon onClick={handleClickExpand}>Expand</ExpandIcon>
      </ActionIcons>
    </CategoryTileContainer>
  );
};

export default CategoryTile;
