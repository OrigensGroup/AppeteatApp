import React from 'react';
import menuTranslations from '../../../../translations/menu';
import { MenuItem } from '../../../../types/MenuItem';
import Text from '../../../Shared/Text';
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
      <Text fontSize={14} color="primary">
        {item}
      </Text>
    </Ingredient>
  );

  return (
    <CustomiseSectionContainer>
      <TitleRow>
        <IngredientsTitle>
          <Text fontSize={14} bold color="primary">
            {menuTranslations.singleItem.ingredients.title}
          </Text>
        </IngredientsTitle>
        <CustomiseTitle>
          <Text fontSize={14} color="tertiary">
            {menuTranslations.singleItem.customise.title}
          </Text>
        </CustomiseTitle>
      </TitleRow>
      {item.ingredients && (
        <IngredientsList keyExtractor={(item) => item} data={item.ingredients} renderItem={ingredientRender} />
      )}
    </CustomiseSectionContainer>
  );
};

export default CustomiseSection;
