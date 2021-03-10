import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';

import useMenu from '../../../hooks/useMenu';

import homeTranslations from '../../../translations/home';
import { MenuItem } from '../../../types/MenuItem';

import Text from '../../shared/Text';

import PromotionItemCard from './PromotionItemCard';

import { FeaturedItemsSection, FeaturedItemsTextContainer } from './styles';

interface FeaturedItemsProps {}

const FeaturedItems: React.FunctionComponent<FeaturedItemsProps> = () => {
  const navigation = useNavigation();
  const { menu } = useMenu();

  const onCardClick = (item: MenuItem) => () => {
    navigation.navigate('Menu', { screen: 'SingleItem', params: { item }, initial: false });
  };

  const promotedItems = menu.items.filter((menuItem) => menuItem.promoted);

  const flatlistItem = ({ item }: { item: MenuItem }) => <PromotionItemCard item={item} onClick={onCardClick(item)} />;

  return (
    <FeaturedItemsSection>
      <FeaturedItemsTextContainer>
        <Text color="primary" fontSize={20}>
          {homeTranslations.homepageScreen.popularItems.title}
        </Text>
      </FeaturedItemsTextContainer>
      <FlatList
        contentContainerStyle={{ paddingRight: 16 }}
        data={promotedItems}
        horizontal
        renderItem={flatlistItem}
        showsHorizontalScrollIndicator={false}
      />
    </FeaturedItemsSection>
  );
};

export default FeaturedItems;
