import React from 'react';
import { Text } from 'react-native';

import { CardContainer, DrinkImage, DrinkDesc, TextTitle, CardWrap } from './styles';

interface FavCardProps {
  title: string;
  description: string;
  onClick?: () => void;
}

const FavCard: React.FunctionComponent<FavCardProps> = ({ description, onClick, title }) => {
  return (
    <CardWrap>
      <CardContainer onPress={onClick}>
        <DrinkImage source={require('../../../img/mojito.jpg')} />
        <DrinkDesc>
          <TextTitle>{title}</TextTitle>
          <Text>{description}</Text>
        </DrinkDesc>
      </CardContainer>
    </CardWrap>
  );
};

export default FavCard;
