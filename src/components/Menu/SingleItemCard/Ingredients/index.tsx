import React from 'react';
import Text from '../../../Shared/Text'

import { IngredientWrapper } from './styles';

interface IngredientsProps {
  ingredient: string;
}

const Ingredients: React.FunctionComponent<IngredientsProps> = ({ ingredient }) => {
  return (
    <IngredientWrapper>
      <Text color='primary' fontSize={14}>{ingredient}</Text>
    </IngredientWrapper>
  );
};

export default Ingredients;
