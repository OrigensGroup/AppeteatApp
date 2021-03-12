import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTheme } from 'styled-components';

import currencyTranslations from '../../../../translations/currency';
import Text from '../../../shared/Text';

import { MenuItem } from '../../../../types/MenuItem';

import IconButton from '../../../shared/IconButton';

import { CardContainer, ImageWrapper, LeftWrapper, RightWrapper, DrinkImage, DrinkDesc, LikeButton } from './styles';

interface CardProps {
  item: MenuItem;
  onClick: () => void;
}

const MenuCard: React.FunctionComponent<CardProps> = ({ item, onClick }) => {
  const theme = useTheme();
  const navigation = useNavigation();

  const navigate = () => {
    navigation.navigate('SingleItem', { item });
  };

  return (
    <CardContainer onPress={navigate}>
      <LeftWrapper>
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
          <Text bold color="quartiary" fontSize={16}>
            {currencyTranslations.currencyField.placeholder} {item.price}
          </Text>
        </DrinkDesc>
      </LeftWrapper>
      <RightWrapper>
        <LikeButton onPress={onClick}>
          <IconButton color={theme.colors.textPrimary} iconName="heart-outline" size={20} />
        </LikeButton>
      </RightWrapper>
    </CardContainer>
  );
};

export default MenuCard;
