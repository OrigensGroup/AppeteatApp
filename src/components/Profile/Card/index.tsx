import React from 'react';

import { MenuItem } from '../../../types/MenuItem';
import Text from '../../shared/Text';

import { CardContainer, DrinkImage, DrinkDesc, Container, DescriptionWrapper } from './styles';

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
          <Text color="primary" fontSize={20}>
            {item.title}
          </Text>
          <DescriptionWrapper>
            <Text color="quartiary" fontSize={12}>
              {item.description}
            </Text>
          </DescriptionWrapper>
        </DrinkDesc>
      </Container>
    </CardContainer>
  );
};

export default Card;
