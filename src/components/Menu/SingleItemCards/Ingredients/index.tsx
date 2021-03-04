import React from 'react';

import { IngredientText, IngredientWrapper } from './styles';

interface IngredientsProps {
  ingredient: string;
}

const Ingredients: React.FunctionComponent<IngredientsProps> = ({ ingredient }) => {
  return (
    <IngredientWrapper>
      <IngredientText>{ingredient}</IngredientText>
    </IngredientWrapper>
  );
};

export default Ingredients;
