import React from 'react';
import { Dimensions, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import Card from '../../../components/Profile/Card';
import useMenu from '../../../hooks/useMenu';
import { MenuItem } from '../../../types/MenuItem';

import { FavouriteCocktailsContainer } from './styles';

interface FavouriteCocktailsProps {}

const FavouriteCocktails: React.FunctionComponent<FavouriteCocktailsProps> = () => {
  const { width }=Dimensions.get("window")
 const { menu } = useMenu();
  const renderItem = ({ item }: { item: MenuItem }) => (
    <View style={{width: width/2}}><Card item={item} /></View>
  );

  const favoriteCocktails = menu.items.filter((menuItem) => menuItem.promoted);

  return (
    <FavouriteCocktailsContainer>
      <FlatList
        columnWrapperStyle={{
          backgroundColor: 'red',
          display: 'flex',
          justifyContent: 'center',
        }}
        data={favoriteCocktails}
        horizontal={false}
        numColumns={2}
        renderItem={renderItem}
      />
    </FavouriteCocktailsContainer>
  );
};

export default FavouriteCocktails;
