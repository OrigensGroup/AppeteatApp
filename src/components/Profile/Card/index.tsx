import React from 'react';

import { MenuItem } from '../../../types/MenuItem';
import Text from '../../Shared/Text';

import { CardContainer, DrinkImage, DrinkDesc, TextTitle, Container } from './styles';

interface CardProps {
  item: MenuItem;
  onClick?: () => void;
}

const Card: React.FunctionComponent<CardProps> = ({ item, onClick }) => {
  return (
    <CardContainer>
      <Container onPress={onClick}>
        <DrinkImage source={{ uri: item.image }} />
        <DrinkDesc>
          <Text color="primary" fontSize={20}>{item.title}</Text>
          <Text color="primary" fontSize={16}>{item.description}</Text>
        </DrinkDesc>
      </Container>
    </CardContainer>
  );
};

export default Card;
