import React from 'react';

import { MenuItem } from '../../../../types/MenuItem';
import Text from '../../../shared/Text';

import { CardContainer, DrinkImage, DrinkDesc, Container, DescriptionWrapper, ImageContainer } from './styles';

interface CardProps {
  item: MenuItem;
  onClick?: () => void;
}

const Card: React.FunctionComponent<CardProps> = ({ item, onClick }) => {
  return (
    <CardContainer>
      <Container onPress={onClick}>
        <ImageContainer>
          <DrinkImage source={{ uri: item.image }} />
        </ImageContainer>
        <DrinkDesc>
          <Text color="primary" fontSize={14}>
            {item.title}
          </Text>
          <DescriptionWrapper>
            <Text color="subtitles" fontSize={12}>
              {item.description}
            </Text>
          </DescriptionWrapper>
        </DrinkDesc>
      </Container>
    </CardContainer>
  );
};

export default Card;
