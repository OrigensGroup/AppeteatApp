import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTheme } from 'styled-components';

import currencyTranslations from '../../../../translations/currency';
import Text from '../../../shared/Text';

import { MenuItem } from '../../../../types/MenuItem';

import IconButton from '../../../shared/IconButton';

import useUserData from '../../../../hooks/useUserData';

import { CardContainer, ImageWrapper, DrinkImage, DrinkDesc, LikeButton, PropsWrapper } from './styles';

interface CardProps {
  item: MenuItem;
}

const MenuCard: React.FunctionComponent<CardProps> = ({ item }) => {
  const theme = useTheme();
  const { userData } = useUserData();
  const navigation = useNavigation();

  const navigate = () => {
    navigation.navigate('SingleItem', { item });
  };

  const iLikeThis = userData.favoriteCocktails.includes(item.id);

  return (
    <CardContainer onPress={navigate}>
      <PropsWrapper>
        <ImageWrapper>
          <DrinkImage source={{ uri: item.image }} />
        </ImageWrapper>
        <DrinkDesc>
          <Text bold color="primary" fontSize={16}>
            {item.title}
          </Text>
          <Text color="tertiary" fontSize={14}>
            {item.smallDesc}
          </Text>
          <Text bold color="tertiary" fontSize={16}>
            {currencyTranslations.currencyField.placeholder} {item.price}
          </Text>
        </DrinkDesc>
      </PropsWrapper>
      {iLikeThis && (
        <LikeButton>
          <IconButton color={theme.colors.activeRed} iconName="md-heart" size={20} />
        </LikeButton>
      )}
    </CardContainer>
  );
};

export default MenuCard;
