import React from 'react';

import { FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import useMenu from '../../../hooks/useMenu';
import { MenuItem } from '../../../types/MenuItem';
import accountTranslations from '../../../translations/account';

import Text from '../../shared/Text';

import Card from './Card';

import { FavouriteCocktailsContainer, TitleContainer, ShowButton } from './styles';

interface FavouriteCocktailsProps {}

const FavouriteCocktails: React.FunctionComponent<FavouriteCocktailsProps> = () => {
  const { menu } = useMenu();

  const favoriteCocktails = menu.items.filter((favoriteItem) => favoriteItem.promoted);

  const flatlistRenderItem = ({ item }: { item: MenuItem }) => (
    <Card
      item={item}
      onClick={() => {
        return {};
      }}
    />
  );

  const navigation = useNavigation();

  return (
    <FavouriteCocktailsContainer>
      <TitleContainer>
        <Text color="primary" fontSize={18}>
          {accountTranslations.accountPage.myFavouriteCoctails}
        </Text>
        <ShowButton onPress={() => navigation.navigate('FavouriteCocktails')}>
          <Text color="tertiary" fontSize={16}>
            {accountTranslations.accountPage.showButton}
          </Text>
        </ShowButton>
      </TitleContainer>
      <FlatList
        contentContainerStyle={{ paddingRight: 16 }}
        data={favoriteCocktails}
        horizontal
        renderItem={flatlistRenderItem}
        showsHorizontalScrollIndicator={false}
      />
    </FavouriteCocktailsContainer>
  );
};

export default FavouriteCocktails;
