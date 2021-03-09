import React from 'react';

import currencyTranslations from '../../../../translations/currency';
import { MenuItem } from '../../../../types/MenuItem';
import Text from '../../../shared/Text';

import { ItemDescriptionContainer, ItemDescriptionTitle, ItemDescriptionDesc } from './styles';

interface ItemDescriptionProps {
  item: MenuItem;
}

const ItemDescription: React.FunctionComponent<ItemDescriptionProps> = ({ item }) => {
  return (
    <ItemDescriptionContainer>
      <ItemDescriptionTitle>
        <Text bold color="primary" fontSize={18}>
          {item.title}
        </Text>
        <Text bold color="primary" fontSize={18}>
          {currencyTranslations.currencyField.placeholder}
          {item.price}
        </Text>
      </ItemDescriptionTitle>
      <ItemDescriptionDesc>
        <Text color="primary" fontSize={16}>
          {item.description}
        </Text>
      </ItemDescriptionDesc>
    </ItemDescriptionContainer>
  );
};

export default ItemDescription;
