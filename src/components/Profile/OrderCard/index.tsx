import React from 'react';
import { Dimensions, Text } from 'react-native';

import Title from '../../Shared/Text';

import {
  CardContainer,
  DrinkDesc,
  TextTitle,
  CardWrap,
  DateContainer,
  Circle,
  PriceContainer,
  ViewWrap,
} from './styles';

interface OrderCardProps {
  items: string;
  date: string;
  price: number;
  onClick?: () => void;
}

const OrderCard: React.FunctionComponent<OrderCardProps> = ({ date, items, onClick, price }) => {
  return (
    <CardWrap>
      <CardContainer activeOpacity={1} onPress={onClick}>
        <DateContainer>
          <Circle style={{ borderRadius: Dimensions.get('window').width / 2 }}>
            <Title color="#F69019" fontSize={14} fontWeight="bold">
              {date}
            </Title>
            <Title color="#F69019" fontSize={12}>
              2021
            </Title>
          </Circle>
        </DateContainer>
        <DrinkDesc>
          <Title color="#000" fontSize={16}>
            {items}
          </Title>
        </DrinkDesc>
        <PriceContainer>
          <Title color="#000" fontSize={16} fontWeight="bold">
            {price}$
          </Title>
          <ViewWrap>
            <Title color="#F69019" fontSize={16}>
              View
            </Title>
          </ViewWrap>
        </PriceContainer>
      </CardContainer>
    </CardWrap>
  );
};

export default OrderCard;
