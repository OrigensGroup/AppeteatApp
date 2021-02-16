import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  ImageWrapper,
  CardContainer,
  DrinkImage,
  DrinkDesc,
  TextTitle,
  ButtonWrapper,
  AddToBasket,
  Price
} from './styles';

interface CardProps {
  title: string;
  description: string;
  price: string;
  onClick: () => void;
}

const MenuCard: React.FunctionComponent<CardProps> = ({ title, description, price, onClick }) => {
  return (
    <CardContainer>
      <ImageWrapper>
      <DrinkImage source={require('../../../img/mojito.jpg')} />
      </ImageWrapper>
      <DrinkDesc>
        <TextTitle>{title}</TextTitle>
        <Text>{description}</Text>
      </DrinkDesc>
      <ButtonWrapper>
        <AddToBasket onPress={onClick}>
          <Price>{price}</Price>
        </AddToBasket>
      </ButtonWrapper>
    </CardContainer>
  );
};

export default MenuCard;
