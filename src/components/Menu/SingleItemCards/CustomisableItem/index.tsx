import React from 'react';

import { MenuItem } from '../../../../types/MenuItem';
import CardsHeader from '../CardsHeader';
import ItemPicture from '../ItemPicture';
import ItemDescription from '../ItemDescription';
import AddToBasketButton from '../AddToBasketButton';

import CustomiseSection from '../CustomiseSection';

import { CustomisableItemContainer } from './styles';

interface CustomisableItemProps {
  item: MenuItem;
}

const CustomisableItem: React.FunctionComponent<CustomisableItemProps> = ({ item }) => {
  return (
    <CustomisableItemContainer>
      <CardsHeader item={item} />
      <ItemPicture item={item} />
      <ItemDescription item={item} />
      <AddToBasketButton item={item} />
      <CustomiseSection item={item} />
    </CustomisableItemContainer>
  );
};

export default CustomisableItem;
