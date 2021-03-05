import React from 'react';
import { MenuItem } from '../../../../types/MenuItem';
import Text from '../../../Shared/Text';

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
          £ {item.price}
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
