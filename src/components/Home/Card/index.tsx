import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'styled-components';
import { MenuItem } from '../../../types/MenuItem';

import { CardContainer, DrinkImage, DrinkDesc, DrinkLike, TextTitle } from './styles';

interface CardProps {
  item: MenuItem;
  onClick?: () => void;
}

const Card: React.FunctionComponent<CardProps> = ({ item, onClick }) => {
  const theme = useTheme();

  return (
    <CardContainer onPress={onClick}>
      <DrinkImage source={{ uri: item.image }} />
      <DrinkDesc>
        <TextTitle>{item.title}</TextTitle>
        <Text>{item.description}</Text>
      </DrinkDesc>
      <DrinkLike>
        <Icon color={theme.colors.textPrimary} name="heart-outline" size={28} />
        {/* <Icon name="heart" size={30} color="red" /> */}
      </DrinkLike>
    </CardContainer>
  );
};

export default Card;
