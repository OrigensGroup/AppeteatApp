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
        <Text bold fontSize={18} color="primary">
          {item.title}
        </Text>
        <Text bold fontSize={18} color="primary">
          {currencyTranslations.currencyField.placeholder}
          {item.price}
        </Text>
      </ItemDescriptionTitle>
      <ItemDescriptionDesc>
        <Text fontSize={16} color="primary">
          {item.description}
        </Text>
      </ItemDescriptionDesc>
    </ItemDescriptionContainer>
  );
};

export default ItemDescription;
