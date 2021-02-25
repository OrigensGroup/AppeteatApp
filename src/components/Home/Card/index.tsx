import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'styled-components';
import Title from '../../Shared/Text';

import { CardContainer, DrinkImage, DrinkDesc, DrinkLike, ImageContainer } from './styles';

interface CardProps {
  title: string;
  description: string;
  onClick?: () => void;
}

const Card: React.FunctionComponent<CardProps> = ({ description, onClick, title }) => {
  const theme = useTheme();

  return (
    <CardContainer onPress={onClick}>
      <ImageContainer>
        <DrinkImage source={require('../../../img/mojito.jpg')} />
      </ImageContainer>
      <DrinkDesc>
        <Title fontSize={18} color='#000' bold>{title}</Title>
        <Title fontSize={14} color='#c2c2c2'>{description}</Title>
      </DrinkDesc>
      <DrinkLike>
        <Icon color='#c2c2c2' name="heart-outline" size={28} />
        {/* <Icon name="heart" size={30} color="red" /> */}
      </DrinkLike>
    </CardContainer>
  );
};

export default Card;
