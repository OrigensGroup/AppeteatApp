import React from 'react';

import { FlatList } from 'react-native';

import { useRoute } from '@react-navigation/native';

import useMenu from '../../../hooks/useMenu';
import HappyHourPromotionCard from '../../../components/Home/PromotionCards/HappyHourPromotionCard';
import { MenuItem } from '../../../types/MenuItem';
import MenuCard from '../../../components/Menu/MenuSwiper/MenuCards';

import MenuTopBar from '../../../components/Menu/MenuTopBar';

import { Promotion } from '../../../types/Promotion';

import {
  HappyHourMenuContainer,
  HappyHourMenuSection,
  HappyHourMenuItemsContainer,
  HappyHourMenuHeader,
  SafeArea,
} from './styles';

interface HappyHourMenuProps {}

const HappyHourMenu: React.FunctionComponent<HappyHourMenuProps> = () => {
  const { menu } = useMenu();

  const happyhourItems = menu.items.filter((item) => item.promoted);

  const flatlistRender = ({ item }: { item: MenuItem }) => <MenuCard item={item} />;

  const route = useRoute();

  const { item } = route.params as { item: Promotion };

  return (
    <SafeArea>
      <HappyHourMenuContainer>
        <MenuTopBar hideFilter title={item.title} />
        <HappyHourMenuHeader>
          <HappyHourPromotionCard disabled happyHour happyHourSize item={item} />
        </HappyHourMenuHeader>
        <HappyHourMenuSection>
          <HappyHourMenuItemsContainer>
            <FlatList data={happyhourItems} renderItem={flatlistRender} />
          </HappyHourMenuItemsContainer>
        </HappyHourMenuSection>
      </HappyHourMenuContainer>
    </SafeArea>
  );
};

export default HappyHourMenu;
