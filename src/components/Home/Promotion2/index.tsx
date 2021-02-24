import React from 'react';
import { Text } from 'react-native';
import Title from '../../Shared/Text';

import {
  PromotionContainer,
  PromotionImage,
  PromotionDesc,
  PromotionButton,
  ImageContainer,
  OrderButton,
} from './styles';

interface Promotion2Props {
  title: string;
  description: string;
  onClick?: () => void;
}

const Promotion2: React.FunctionComponent<Promotion2Props> = ({ description, onClick, title }) => {
  return (
    <PromotionContainer onPress={onClick}>
      <ImageContainer>
        <PromotionImage source={require('../../../img/martini.png')} />
      </ImageContainer>
      <PromotionDesc>
        <Title fontSize={18} color='#000' bold>{title}</Title>
        <Title fontSize={12} color='#c2c2c2' bold>{description}</Title>
      </PromotionDesc>
      <PromotionButton>
        <OrderButton>
          <Title color="#fff" fontSize={14} bold>
            Order Now
          </Title>
        </OrderButton>
      </PromotionButton>
    </PromotionContainer>
  );
};

export default Promotion2;
