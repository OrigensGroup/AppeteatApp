import React from 'react';
import { t } from '../../../../translations';

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
      {item.ingredients && (
        <>
          <TitleRow>
            <IngredientsTitle>
              <Text bold color="primary" fontSize={14}>
                {t('menuTranslations.singleItemPage.ingredients.title')}
              </Text>
            </IngredientsTitle>
            <CustomiseTitle onPress={onClick}>
              <Text color="tertiary" fontSize={14}>
                {t('menuTranslations.singleItemPage.customise.title')}
              </Text>
            </CustomiseTitle>
          </TitleRow>
          {item.ingredients.map((ingredient) => (
            <Ingredient key={ingredient}>
              <Text color="quartiary" fontSize={14}>
                {ingredient}
              </Text>
            </Ingredient>
          ))}
        </>
      )}
    </CustomiseSectionContainer>
  );
};

export default CustomiseSection;
