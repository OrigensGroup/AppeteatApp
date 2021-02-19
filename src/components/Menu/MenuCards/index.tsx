import React from 'react';
import { Text } from 'react-native';

import {
  CardContainer,
  ImageWrapper,
  CardWrapper,
  LeftWrapper,
  RightWrapper,
  DrinkImage,
  DrinkDesc,
  TextTitle,
  AddToBasket,
  Price,
} from './styles';

interface CardProps {
  title: string;
  description: string;
  price: string;
  onClick: () => void;
}

const MenuCard: React.FunctionComponent<CardProps> = ({ description, onClick, price, title }) => {
  return (
    <CardContainer>
      <CardWrapper>
        <LeftWrapper>
          <ImageWrapper>
            <DrinkImage source={require('../../../img/mojito.jpg')} />
          </ImageWrapper>
          <DrinkDesc>
            <TextTitle>{title}</TextTitle>
            <Text>{description}</Text>
          </DrinkDesc>
        </LeftWrapper>
        <RightWrapper>
          <AddToBasket onPress={onClick}>
            <Price>{price}</Price>
          </AddToBasket>
        </RightWrapper>
      </CardWrapper>
    </CardContainer>
  );
};

export default MenuCard;
