import React from 'react';
import { FlatList } from 'react-native';

import type { TabDiscount } from '../../../../../types/DiscountRules';
import type { MenuItem } from '../../../../../types/MenuItem';

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
      <FlatList
        contentContainerStyle={{ paddingBottom: 40 }}
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </Wrapper>
  );
};

export default SwiperPage;
