import React from 'react';

import menuTranslations from '../../../../translations/menu';
import { MenuItem } from '../../../../types/MenuItem';
import Text from '../../../shared/Text';

import { CustomiseSectionContainer, CustomiseTitle, IngredientsTitle, TitleRow, Ingredient } from './styles';

interface CustomiseSectionProps {
  item: MenuItem;
  onClick: () => void;
}

const CustomiseSection: React.FunctionComponent<CustomiseSectionProps> = ({ item, onClick }) => {
  return (
    <CustomiseSectionContainer>
      <TitleRow>
        <IngredientsTitle>
          <Text bold color="primary" fontSize={14}>
            {menuTranslations.singleItemPage.ingredients.title}
          </Text>
        </IngredientsTitle>
        <CustomiseTitle onPress={onClick}>
          <Text color="tertiary" fontSize={14}>
            {menuTranslations.singleItemPage.customise.title}
          </Text>
        </CustomiseTitle>
      </TitleRow>
      {item.ingredients &&
        item.ingredients.map((ingredient) => (
          <Ingredient key={ingredient}>
            <Text color="primary" fontSize={14}>
              {ingredient}
            </Text>
          </Ingredient>
        ))}
    </CustomiseSectionContainer>
  );
};

export default CustomiseSection;
