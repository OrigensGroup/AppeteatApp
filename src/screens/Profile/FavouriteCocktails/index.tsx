import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

import Card from '../../../components/Profile/Card';
import useMenu from '../../../hooks/useMenu';
import { MenuItem } from '../../../types/MenuItem';

import { FavouriteCocktailsContainer } from './styles';

interface FavouriteCocktailsProps {}

const FavouriteCocktails: React.FunctionComponent<FavouriteCocktailsProps> = () => {
  const { menu } = useMenu();

  const favoriteCocktails = menu.items.filter((menuItem) => menuItem.promoted);

  const renderItem = ({ item }: { item: MenuItem }) => <Card item={item} />;

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
