import React from 'react';
import { Text } from 'react-native';

import { MenuItem } from '../../../types/MenuItem';

import { CardContainer, DrinkImage, DrinkDesc, TextTitle, CardWrap } from './styles';

interface CardProps {
  item: MenuItem;
  onClick?: () => void;
}

const Card: React.FunctionComponent<CardProps> = ({ item, onClick }) => {
  return (
    <CardWrap>
      <CardContainer onPress={onClick}>
        <DrinkImage source={{ uri: item.image }} />
        <DrinkDesc>
          <TextTitle>{item.title}</TextTitle>
          <Text>{item.description}</Text>
        </DrinkDesc>
      </CardContainer>
    </CardWrap>
  );
};

export default Card;
