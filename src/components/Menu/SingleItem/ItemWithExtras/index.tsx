import React, { useState } from 'react';

import { MenuItem, SelectionExtras } from '../../../../types/MenuItem';
import CardsHeader from '../CardsHeader';
import ItemPicture from '../ItemPicture';
import ItemDescription from '../ItemDescription';
import AddToBasketButton from '../AddToBasketButton';
import UpgradeSection from '../UpgradeSection';

import { Discount } from '../../../../types/DiscountRules';

import withFeatureFlag from '../../../../HOC/withFeatureFlag';

import {
  ItemWithExtrasContainer,
  ItemContainer,
  ItemWithExtraSafeAreaTop,
  ItemWithExtraSafeAreaBottom,
} from './styles';

interface ItemWithExtrasProps {
  item: MenuItem;
  discount?: Discount;
  goBackTo?: string;
}

const AddToBasketWithFlag = withFeatureFlag(AddToBasketButton, 'FEAT_ORDERING');
const ItemWithExtraSafeAreaBottomWithFlag = withFeatureFlag(ItemWithExtraSafeAreaBottom, 'FEAT_ORDERING');

const ItemWithExtras: React.FunctionComponent<ItemWithExtrasProps> = ({ discount, goBackTo, item }) => {
  const [upgradeSelections, setUpgradeSelections] = useState<SelectionExtras>();

  return (
    <ItemWithExtrasContainer>
      <ItemWithExtraSafeAreaTop />
      <CardsHeader goBackTo={goBackTo} item={item} />
      <ItemContainer showsVerticalScrollIndicator={false}>
        <ItemPicture item={item} />
        <ItemDescription discount={discount} item={item} />
        <UpgradeSection item={item} updateExtras={setUpgradeSelections} />
      </ItemContainer>
      {!item.soldout && <AddToBasketWithFlag discount={discount} selectionExtras={upgradeSelections} item={item} />}
      <ItemWithExtraSafeAreaBottomWithFlag />
    </ItemWithExtrasContainer>
  );
};

export default ItemWithExtras;
