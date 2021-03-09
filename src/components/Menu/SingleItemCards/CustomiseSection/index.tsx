import React from 'react';

import menuTranslations from '../../../../translations/menu';
import { MenuItem } from '../../../../types/MenuItem';
import Text from '../../../shared/Text';

import {
  CustomiseSectionContainer,
  CustomiseTitle,
  IngredientsList,
  IngredientsTitle,
  TitleRow,
  Ingredient,
} from './styles';

interface CustomiseSectionProps {
  item: MenuItem;
}

const CustomiseSection: React.FunctionComponent<CustomiseSectionProps> = ({ item }) => {
  const ingredientRender = ({ item }: { item: string }) => (
    <Ingredient>
      <Text color="primary" fontSize={14}>
        {item}
      </Text>
    </Ingredient>
  );

  return (
    <CustomiseSectionContainer>
      <TitleRow>
        <IngredientsTitle>
          <Text bold color="primary" fontSize={14}>
            {menuTranslations.singleItem.ingredients.title}
          </Text>
        </IngredientsTitle>
        <CustomiseTitle>
          <Text color="tertiary" fontSize={14}>
            {menuTranslations.singleItem.customise.title}
          </Text>
        </CustomiseTitle>
      </TitleRow>
      {item.ingredients && (
        <IngredientsList data={item.ingredients} keyExtractor={(item) => item} renderItem={ingredientRender} />
      )}
    </CustomiseSectionContainer>
  );
};

export default CustomiseSection;
