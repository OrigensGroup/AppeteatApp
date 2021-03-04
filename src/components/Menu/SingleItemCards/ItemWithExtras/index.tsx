import React from 'react';
import { MenuItem } from '../../../../types/MenuItem';
import CardsHeader from '../CardsHeader';
import ItemPicture from '../ItemPicture';
import ItemDescription from '../ItemDescription';
import AddToBasketButton from '../AddToBasketButton';

import { ItemWithExtrasContainer } from './styles';

interface ItemWithExtrasProps {
  item: MenuItem;
}

const ItemWithExtras: React.FunctionComponent<ItemWithExtrasProps> = ({ item }) => {
  return (
    <ItemWithExtrasContainer>
      <CardsHeader item={item} />
      <ItemPicture item={item} />
      <ItemDescription item={item} />
      <AddToBasketButton item={item} />
    </ItemWithExtrasContainer>
  );
};

export default ItemWithExtras;
