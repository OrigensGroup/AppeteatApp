import React from 'react';
import { FlatList } from 'react-native';

import useMenu from '../../../hooks/useMenu';

import homeTranslations from '../../../translations/home';
import { MenuItem } from '../../../types/MenuItem';

import Text from '../../Shared/Text';
import PromotionItemCard from './PromotionItemCard';

import { FeaturedItemsSection, FeaturedItemsTextContainer } from './styles';

interface FeaturedItemsProps {}

const FeaturedItems: React.FunctionComponent<FeaturedItemsProps> = () => {
  const { menu } = useMenu();

  const promotedItems = menu.items.filter((menuItem) => menuItem.promoted);

  const flatlistItem = ({ item }: { item: MenuItem }) => <PromotionItemCard item={item} />;

  return (
    <FeaturedItemsSection>
      <FeaturedItemsTextContainer>
        <Text fontSize={20} color="primary">
          {homeTranslations.homepageScreen.popularItems.title}
        </Text>
      </FeaturedItemsTextContainer>
      <FlatList
        data={promotedItems}
        horizontal
        renderItem={flatlistItem}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 16 }}
      />
    </FeaturedItemsSection>
  );
};

export default FeaturedItems;
