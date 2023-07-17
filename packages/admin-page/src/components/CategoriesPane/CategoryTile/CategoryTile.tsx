import React, { useState } from 'react';
import { ActionIcons, CategoryDetails, CategoryName, CategoryTileContainer, DeleteIconWrapper, ActionButton } from './CategoryTile.styled';
import { CategoryUpdateInput } from '@shared/interfaces';

interface CategoryTileProps {
  id: string;
  name: string;
  createdAt: string;
  changedAt: string;
  creatorName: string;
  updateCategory: (input: CategoryUpdateInput) => void;
  deleteCategory: (id: string) => void;
}

const CategoryTile = (props: CategoryTileProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isInEditMode, setIsInEditMode] = useState(false);
  const [input, setInput] = useState<CategoryUpdateInput>();

  const handleClickCancel = () => {
    setIsInEditMode(false);
    setInput(undefined);
  };

  const handleClickSave = () => {
    setIsInEditMode(false);
    if (input) {
      props.updateCategory(input);
      setInput(undefined);
    }
    setIsExpanded(false);
  };

  const handleClickExpand = () => {
    setIsExpanded((previous) => !previous);
  };

  const handleClickEdit = () => {
    setIsExpanded(true);
    setIsInEditMode(true);
  };

  const handleClickDelete = () => {
    props.deleteCategory(props.id);
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      id: props.id,
      name: event.target.value,
    });
  };

  const renderCategoryDetails = () => {
    return (
      <CategoryDetails>
        <div>Utworzono: {new Date(props.createdAt).toLocaleDateString()}</div>
        <div>Zmodyfikowano: {new Date(props.changedAt).toLocaleDateString()}</div>
        <div>Twórca: {props.creatorName}</div>
      </CategoryDetails>
    );
  };

  return (
    <CategoryTileContainer isExpanded={isExpanded}>
      <div>
        <CategoryName>
          {isInEditMode ? (
            <input defaultValue={props.name} onChange={handleChangeName} />
          ) : props.name}
        </CategoryName>
        {isExpanded ? renderCategoryDetails() : null}
      </div>
      {isInEditMode ? (
        <ActionIcons>
          <ActionButton onClick={handleClickSave}>Zapisz</ActionButton>
          <ActionButton onClick={handleClickCancel}>Anuluj</ActionButton>
        </ActionIcons >
      ) : (
        <>
          <ActionIcons>
            <ActionButton onClick={handleClickEdit}>Edytuj</ActionButton>
            <ActionButton onClick={handleClickExpand}>Rozwiń</ActionButton>
          </ActionIcons >
          {isExpanded && (
            <DeleteIconWrapper>
              <ActionButton onClick={handleClickDelete}>Usuń</ActionButton>
            </DeleteIconWrapper>
          )}
        </>
      )}
    </CategoryTileContainer >
  );
};

export default CategoryTile;
