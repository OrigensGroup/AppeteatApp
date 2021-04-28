import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';

import useMenu from '../../../hooks/useMenu';

import type { MenuItem } from '../../../types/MenuItem';

import Text from '../../shared/Text';

import PromotionItemCard from './PromotionItemCard';

import { FeaturedItemsSection, FeaturedItemsTextContainer } from './styles';

interface FeaturedItemsProps {
  title: string;
  promotedItems: string[];
}

const FeaturedItems: React.FunctionComponent<FeaturedItemsProps> = ({ promotedItems, title }) => {
  const navigation = useNavigation();
  const [menu] = useMenu();

  const onCardClick = (item: MenuItem) => () => {
    navigation.navigate('Menu', {
      screen: 'SingleItem',
      params: { item },
      initial: false,
    });
  };

  const promotedItemsToShow = promotedItems
    .map((id) => menu.items.filter((item) => item.id === id)[0])
    .filter((item) => item);

  const flatlistItem = ({ item }: { item: MenuItem }) => <PromotionItemCard item={item} onClick={onCardClick(item)} />;

  return (
    <FeaturedItemsSection>
      <FeaturedItemsTextContainer>
        <Text color="primary" fontSize={20}>
          {title}
        </Text>
      </FeaturedItemsTextContainer>
      <FlatList
        contentContainerStyle={{ paddingRight: 16 }}
        data={promotedItemsToShow}
        horizontal
        renderItem={flatlistItem}
        showsHorizontalScrollIndicator={false}
      />
    </FeaturedItemsSection>
  );
};

export default FeaturedItems;
