import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { useTheme } from 'styled-components';

import { MenuItem } from '../../../../types/MenuItem';

import IconButton from '../../../shared/IconButton';
import Text from '../../../shared/Text';

import useUserData from '../../../../hooks/useUserData';

import { TitleWrapper, CardsHeaderContainer } from './styles';

interface CardsHeaderProps {
  item: MenuItem;
}

const CardsHeader: React.FunctionComponent<CardsHeaderProps> = ({ item }) => {
  const theme = useTheme();
  const { addNewFavoriteCocktail, userData } = useUserData();
  const navigation = useNavigation();

  const navigate = () => {
    navigation.goBack();
  };

  const addNew = (item: MenuItem) => () => {
    addNewFavoriteCocktail(item);
  };

  const iLikeThis = userData.favoriteCocktails.includes(item.id);

  return (
    <CardsHeaderContainer>
      <IconButton color={theme.colors.textPrimary} iconName="ios-close" onClick={navigate} size={24} />
      <TitleWrapper>
        <Text bold color="primary" fontSize={20}>
          {item.title}
        </Text>
      </TitleWrapper>
      <IconButton
        color={!iLikeThis ? theme.colors.textPrimary : theme.colors.actionRed}
        iconName={!iLikeThis ? 'md-heart-outline' : 'md-heart'}
        onClick={addNew(item)}
        size={24}
      />
    </CardsHeaderContainer>
  );
};

export default CardsHeader;
