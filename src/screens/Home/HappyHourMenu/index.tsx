import React from 'react';

import { FlatList } from 'react-native';

import { useRoute } from '@react-navigation/native';

import useMenu from '../../../hooks/useMenu';
import HappyHourPromotionCard from '../../../components/Home/PromotionCards/Countdown';
import { MenuItem } from '../../../types/MenuItem';
import MenuCard from '../../../components/Menu/MenuSwiper/MenuCards';

import TopBar from '../../../components/shared/TopBar';

import { PromotionCountdown } from '../../../types/Promotion';

import {
  HappyHourMenuContainer,
  HappyHourMenuSection,
  HappyHourMenuItemsContainer,
  HappyHourMenuHeader,
  SafeArea,
} from './styles';

interface HappyHourMenuProps {}

const HappyHourMenu: React.FunctionComponent<HappyHourMenuProps> = () => {
  const [menu] = useMenu();
  const route = useRoute();

  const { promotionItem } = route.params as { promotionItem: PromotionCountdown };

  const happyhourItems = menu.items.filter((item) => promotionItem.discountedItems.includes(item.id));

  const flatlistRender = ({ item }: { item: MenuItem }) => <MenuCard discount={promotionItem.discount} item={item} />;

  return (
    <SafeArea>
      <HappyHourMenuContainer>
        <TopBar back="HomePage" hideFilter title={promotionItem.title} />
        <HappyHourMenuHeader>
          <HappyHourPromotionCard disabled happyHour happyHourSize item={promotionItem} />
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
