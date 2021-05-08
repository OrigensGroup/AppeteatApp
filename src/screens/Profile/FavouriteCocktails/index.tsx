import React from 'react';
import { Dimensions, View, FlatList } from 'react-native';

import FavCard from '../../../components/Profile/FavouriteCocktails/FavCard';
import TopBar from '../../../components/shared/TopBar';
import useMenu from '../../../hooks/useMenu';
import useUserData from '../../../hooks/useUserData';
import { t } from '../../../translations';
import { MenuItem } from '../../../types/MenuItem';
import { findMenuItems } from '../../../utils/menuUtils';

import { FavouriteCocktailsContainer, FavouriteCocktailsList } from './styles';

interface FavouriteCocktailsProps {}

const FavouriteCocktails: React.FunctionComponent<FavouriteCocktailsProps> = () => {
  const { width } = Dimensions.get('window');
  const [menu] = useMenu();
  const { userData } = useUserData();

  const renderItem = ({ item }: { item: MenuItem }) => (
    <View style={{ flex: 1, width: width / 2 - 16 }}>
      <FavCard item={item} />
    </View>
  );

  const favoriteCocktails = findMenuItems(menu, userData.favoriteCocktails);
  const numberColumn = favoriteCocktails.length === 1 ? 1 : 2;

  return (
    <FavouriteCocktailsContainer>
      <TopBar back="back" hideFilter title={t('profileTranslations.favouriteCocktailsPage.title')} showBorder />
      <FavouriteCocktailsList>
        <FlatList
          data={favoriteCocktails}
          horizontal={false}
          key={numberColumn}
          numColumns={numberColumn}
          renderItem={renderItem}
        />
      </FavouriteCocktailsList>
    </FavouriteCocktailsContainer>
  );
};

export default FavouriteCocktails;
