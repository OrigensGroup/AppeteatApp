import React from 'react';
import { Dimensions, View, FlatList } from 'react-native';

import FavCard from '../../../components/Profile/FavouriteCocktails/FavCard';
import useMenu from '../../../hooks/useMenu';
import useUserData from '../../../hooks/useUserData';
import { MenuItem } from '../../../types/MenuItem';
import { findMenuItems } from '../../../utils/menuUtils';

import { FavouriteCocktailsContainer } from './styles';

interface FavouriteCocktailsProps {}

const FavouriteCocktails: React.FunctionComponent<FavouriteCocktailsProps> = () => {
  const { width } = Dimensions.get('window');
  const [menu] = useMenu();
  const { userData } = useUserData();

  const renderItem = ({ item }: { item: MenuItem }) => (
    <View style={{ width: width / 2 }}>
      <FavCard item={item} />
    </View>
  );

  const favoriteCocktails = findMenuItems(menu, userData.favoriteCocktails);
  const numberColumn = favoriteCocktails.length === 1 ? 1 : 2;

  return (
    <FavouriteCocktailsContainer>
      <FlatList data={favoriteCocktails} horizontal={false} numColumns={numberColumn} renderItem={renderItem} />
    </FavouriteCocktailsContainer>
  );
};

export default FavouriteCocktails;
