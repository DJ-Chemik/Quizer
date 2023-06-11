import React, { useState } from 'react';
import {
  ActionIcons, CategoryDetails,
  CategoryName,
  EditIcon, ExpandIcon,
} from '../CategoryTile/CategoryTile.styled';
import { CategoryInput } from '@shared/interfaces';
import { NewCategoryAdderContainer, PlusSquareButton, PlusSquareWrapper } from './NewCategoryAdder.styled';

interface NewCategoryAdderProps {
  createCategory: (input: CategoryInput) => void;
}

const NewCategoryAdder = (props: NewCategoryAdderProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isInEditMode, setIsInEditMode] = useState(false);
  const [input, setInput] = useState<CategoryInput>();

  const handleClickCancel = () => {
    setIsExpanded(false);
    setIsInEditMode(false);
    setInput(undefined);
  };

  const handleClickSave = () => {
    setIsInEditMode(false);
    if (input) {
      props.createCategory(input);
      setInput(undefined);
    }
    setIsExpanded(false);
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      name: event.target.value,
      creatorId: '50e5297b-d775-4f76-b724-92f79662bf01', //TODO Replace TestUserId by real id
    });
  };

  const handleClickAddCategory = () => {
    setIsInEditMode(true);
    setIsExpanded(true);
  };

  const renderCategoryDetails = () => {
    return (
      <CategoryDetails>
        <div>Utworzono: {new Date().toLocaleDateString()}</div>
        <div>Zmodyfikowano: {new Date().toLocaleDateString()}</div>
        <div>Twórca: Ty!</div>
      </CategoryDetails>
    );
  };

  return (
    <NewCategoryAdderContainer isExpanded={isExpanded}>
      <div>
        {isInEditMode && (
          <CategoryName>
            <input placeholder="Podaj nazwę kategorii" onChange={handleChangeName} />
          </CategoryName>
        )}
        {isExpanded ? renderCategoryDetails() : null}
      </div>
      {isInEditMode ? (
        <ActionIcons>
          <EditIcon onClick={handleClickSave}>Zapisz</EditIcon>
          <ExpandIcon onClick={handleClickCancel}>Anuluj</ExpandIcon>
        </ActionIcons >
      ) : (
        <PlusSquareWrapper>
          <PlusSquareButton onClick={handleClickAddCategory} />
        </PlusSquareWrapper>
      )}
    </NewCategoryAdderContainer >
  );
};

export default NewCategoryAdder;
