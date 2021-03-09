import React from 'react';
import { Dimensions, View, FlatList } from 'react-native';

import FavCard from '../../../components/Profile/FavCard';
import useMenu from '../../../hooks/useMenu';
import { MenuItem } from '../../../types/MenuItem';

import { FavouriteCocktailsContainer } from './styles';

interface FavouriteCocktailsProps {}

const FavouriteCocktails: React.FunctionComponent<FavouriteCocktailsProps> = () => {
  const { width } = Dimensions.get('window');
  const { menu } = useMenu();

  const renderItem = ({ item }: { item: MenuItem }) => (
    <View style={{ width: width / 2 }}>
      <FavCard item={item} />
    </View>
  );

  const favoriteCocktails = menu.items.filter((menuItem) => menuItem.promoted);
  const numberColumn = menu.items.length === 1 ? 1 : 2;

  return (
    <FavouriteCocktailsContainer>
      <FlatList data={favoriteCocktails} horizontal={false} numColumns={numberColumn} renderItem={renderItem} />
    </FavouriteCocktailsContainer>
  );
};

export default FavouriteCocktails;
