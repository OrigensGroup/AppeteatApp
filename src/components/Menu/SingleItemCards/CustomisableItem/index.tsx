import React from 'react';
import { ScrollView } from 'react-native';

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
      <ScrollView>
        <ItemPicture item={item} />
        <ItemDescription item={item} />
        <CustomiseSection item={item} />
        <AddToBasketButton item={item} />
      </ScrollView>
    </CustomisableItemContainer>
  );
};

export default CustomisableItem;
