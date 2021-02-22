import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'styled-components';

import { CardContainer, DrinkImage, DrinkDesc, DrinkLike, TextTitle } from './styles';

interface CardProps {
  title: string;
  description: string;
  onClick?: () => void;
}

const Card: React.FunctionComponent<CardProps> = ({ description, onClick, title }) => {
  const theme = useTheme();

  return (
    <CardContainer onPress={onClick}>
      <DrinkImage source={require('../../../img/mojito.jpg')} />
      <DrinkDesc>
        <TextTitle>{title}</TextTitle>
        <Text>{description}</Text>
      </DrinkDesc>
      <DrinkLike>
        <Icon color={theme.colors.textPrimary} name="heart-outline" size={28} />
        {/* <Icon name="heart" size={30} color="red" /> */}
      </DrinkLike>
    </CardContainer>
  );
};

export default Card;
