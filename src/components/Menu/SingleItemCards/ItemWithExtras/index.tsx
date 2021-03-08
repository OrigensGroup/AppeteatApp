import React, { useState } from 'react';
import { MenuItem } from '../../../../types/MenuItem';
import CardsHeader from '../CardsHeader';
import ItemPicture from '../ItemPicture';
import ItemDescription from '../ItemDescription';
import AddToBasketButton from '../AddToBasketButton';
import UpgradeSection from '../UpgradeSection';

import { ItemWithExtrasContainer } from './styles';

interface ItemWithExtrasProps {
  item: MenuItem;
}

const ItemWithExtras: React.FunctionComponent<ItemWithExtrasProps> = ({ item }) => {
  const [extras, setExtras] = useState([]);

  return (
    <ItemWithExtrasContainer>
      <CardsHeader item={item} />
      <ItemPicture item={item} />
      <ItemDescription item={item} />
      <UpgradeSection item={item} updateExtras={setExtras} />
      <AddToBasketButton item={item} extras={extras} />
    </ItemWithExtrasContainer>
  );
};

export default ItemWithExtras;