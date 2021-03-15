import React from 'react';

import { FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import useMenu from '../../../hooks/useMenu';
import useUserData from '../../../hooks/useUserData';
import { MenuItem } from '../../../types/MenuItem';
import accountTranslations from '../../../translations/account';

import Text from '../../shared/Text';

import Card from './Card';

import { FavouriteCocktailsContainer, TitleContainer, ShowButton, TextContainer } from './styles';

interface FavouriteCocktailsProps {}

const FavouriteCocktails: React.FunctionComponent<FavouriteCocktailsProps> = () => {
  const { findMenuItems } = useMenu();
  const { userData } = useUserData();

  const navigation = useNavigation();

  const navigate = () => navigation.navigate('FavouriteCocktails');

  const favoriteCocktails = findMenuItems(userData.favoriteCocktails);

  const flatlistRenderItem = ({ item }: { item: MenuItem }) => <Card item={item} />;

  return (
    <FavouriteCocktailsContainer>
      <TextContainer>
        <TitleContainer>
          <Text color="primary" fontSize={18}>
            {accountTranslations.accountPage.myFavouriteCoctails}
          </Text>
          <ShowButton onPress={navigate}>
            <Text color="tertiary" fontSize={16}>
              {accountTranslations.accountPage.showButton}
            </Text>
          </ShowButton>
        </TitleContainer>
      </TextContainer>
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
