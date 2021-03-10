import React from 'react';

import { FlatList } from 'react-native';

import useMenu from '../../../hooks/useMenu';
import HappyHourPromotionCard from '../../../components/Home/PromotionCards/HappyHourPromotionCard';
import { MenuItem } from '../../../types/MenuItem';
import MenuCard from '../../../components/Menu/MenuSwiper/MenuCards';

import {
  HappyHourMenuContainer,
  HappyHourMenuSection,
  HappyHourMenuItemsContainer,
  HappyHourMenuHeader,
} from './styles';

interface HappyHourMenuProps {}

const HappyHourMenu: React.FunctionComponent<HappyHourMenuProps> = () => {
  const { menu } = useMenu();

  const happyhourItems = menu.items.filter((item) => item.promoted);

  const flatlistRender = ({ item }: { item: MenuItem }) => <MenuCard item={item} onClick={() => console.log('test')} />;

  return (
    <HappyHourMenuContainer>
      <HappyHourMenuHeader>
        <HappyHourPromotionCard endDate="Wed Feb 10 2021 15:36:55 GMT+0000" />
      </HappyHourMenuHeader>
      <HappyHourMenuSection>
        <HappyHourMenuItemsContainer>
          <FlatList data={happyhourItems} renderItem={flatlistRender} />
        </HappyHourMenuItemsContainer>
      </HappyHourMenuSection>
    </HappyHourMenuContainer>
  );
};

export default HappyHourMenu;
