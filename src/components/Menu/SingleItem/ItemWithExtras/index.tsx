import React, { useState } from 'react';

import { DataItem, MenuItem } from '../../../../types/MenuItem';
import CardsHeader from '../CardsHeader';
import ItemPicture from '../ItemPicture';
import ItemDescription from '../ItemDescription';
import AddToBasketButton from '../AddToBasketButton';
import UpgradeSection from '../UpgradeSection';

import { Discount } from '../../../../types/DiscountRules';

import withFeatureFlag from '../../../../HOC/withFeatureFlag';

import { ItemWithExtrasContainer, ItemContainer, MarginBottom } from './styles';

interface ItemWithExtrasProps {
  item: MenuItem;
  discount?: Discount;
}

const AddToBasketWithFlag = withFeatureFlag(AddToBasketButton, 'FEAT_ORDERING');
const MarginBottomWithFlag = withFeatureFlag(MarginBottom, 'FEAT_ORDERING');

const ItemWithExtras: React.FunctionComponent<ItemWithExtrasProps> = ({ discount, item }) => {
  const [extras, setExtras] = useState<DataItem[]>([]);

  return (
    <ItemWithExtrasContainer>
      <CardsHeader item={item} />
      <ItemContainer>
        <ItemPicture item={item} />
        <ItemDescription discount={discount} item={item} />
        <UpgradeSection item={item} updateExtras={setExtras} />
      </ItemContainer>
      <MarginBottomWithFlag />
      {!item.soldout && <AddToBasketWithFlag discount={discount} extras={extras} item={item} />}
    </ItemWithExtrasContainer>
  );
};

export default ItemWithExtras;
