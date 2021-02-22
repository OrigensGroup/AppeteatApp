import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  CardContainer,
  ImageWrapper,
  CardWrapper,
  LeftWrapper,
  RightWrapper,
  DrinkImage,
  DrinkDesc,
  TextTitle,
  LikeButton,
  CardMainContainer,
  Price,
  SubTitle,
} from './styles';

interface CardProps {
  item: any;
  onClick: () => void;
}

const MenuCard: React.FunctionComponent<CardProps> = ({ item, onClick }) => {
  const navigation = useNavigation();
  const navigate = () => {
    navigation.navigate('SingleItem', { item });
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
              <TextTitle>{item.title}</TextTitle>
              <SubTitle>{item.shortDescription}</SubTitle>
              <Price>{item.price}</Price>
            </DrinkDesc>
          </LeftWrapper>
          <RightWrapper>
            <LikeButton onPress={onClick}>
              <Icon color="#0008" name="heart-outline" size={20} />
            </LikeButton>
          </RightWrapper>
        </CardWrapper>
      </CardContainer>
    </CardMainContainer>
  );
};

export default MenuCard;
