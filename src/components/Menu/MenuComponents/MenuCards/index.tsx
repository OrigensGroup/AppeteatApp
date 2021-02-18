import { useNavigation } from '@react-navigation/native';
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
  CardMainContainer
} from './styles';

interface CardProps {
  title: string;
  description: string;
  price: string;
  onClick: () => void;
}

const MenuCard: React.FunctionComponent<CardProps> = ({ title, description, price, onClick,
  }) => {
    const navigation = useNavigation();
    const navigate = () => {
      navigation.navigate("SingleItem", { title });
    };
  return (
    <CardMainContainer>
    <CardContainer onPress={navigate}>
      <CardWrapper>
        <LeftWrapper>
          <ImageWrapper>
            <DrinkImage source={require('../../../../img/mojito.jpg')} />
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
    </CardMainContainer>
  );
};

export default MenuCard;
