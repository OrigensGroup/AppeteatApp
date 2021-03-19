import React from 'react';
import { FlatList } from 'react-native';

import { TabDiscount } from '../../../../types/DiscountRules';

import { MenuItem } from '../../../../types/MenuItem';
import MenuCard from '../MenuCards';

import { Wrapper } from './styles';

interface SwiperProps {
  menuItems: MenuItem[];
  discount?: TabDiscount;
}

const SwiperPage: React.FunctionComponent<SwiperProps> = ({ discount, menuItems }) => {
  const renderItem = ({ item }: { item: MenuItem }) => <MenuCard discount={discount} item={item} />;

  return (
    <Wrapper>
      <FlatList data={menuItems} keyExtractor={(item) => item.id} renderItem={renderItem} />
    </Wrapper>
  );
};

export default SwiperPage;
