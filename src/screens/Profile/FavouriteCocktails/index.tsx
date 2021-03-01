import React from 'react';
import { Dimensions, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import Card from '../../../components/Profile/Card';
import FavCard from '../../../components/Profile/FavCard';
import useMenu from '../../../hooks/useMenu';
import { MenuItem } from '../../../types/MenuItem';

import { FavouriteCocktailsContainer } from './styles';

interface FavouriteCocktailsProps {}

const FavouriteCocktails: React.FunctionComponent<FavouriteCocktailsProps> = () => {
  const { width }=Dimensions.get("window")
 const { menu } = useMenu();
  const renderItem = ({ item }: { item: MenuItem }) => (
    <View style={{width: width/2}}><FavCard item={item} /></View>
  );

  const favoriteCocktails = menu.items.filter((menuItem) => menuItem.promoted);
    const numberColumn = menu.items.length ===1 ? 1  : 2;
    console.log(numberColumn);
  return (
    <FavouriteCocktailsContainer>
      <FlatList
        data={favoriteCocktails}
        horizontal={false}
        numColumns={numberColumn}
        renderItem={renderItem}
      />
    </FavouriteCocktailsContainer>
  );
};

export default FavouriteCocktails;
