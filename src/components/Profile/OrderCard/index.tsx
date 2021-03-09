import React from 'react';
import { Dimensions } from 'react-native';

import Text from '../../shared/Text';

import { Container, DrinkDesc, OrderCardContainer, DateContainer, Circle, PriceContainer, Button } from './styles';

interface OrderCardProps {
  items: string;
  date: string;
  price: number;
  onClick?: () => void;
}

const OrderCard: React.FunctionComponent<OrderCardProps> = ({ date, items, onClick, price }) => {
  return (
    <OrderCardContainer>
      <Container activeOpacity={1} onPress={onClick}>
        <DateContainer>
          <Circle style={{ borderRadius: Dimensions.get('window').width / 2 }}>
            <Text bold color="secondary" fontSize={14}>
              {date}
            </Text>
            <Text bold color="secondary" fontSize={12}>
              2021
            </Text>
          </Circle>
        </DateContainer>
        <DrinkDesc>
          <Text color="primary" fontSize={16}>
            {items}
          </Text>
        </DrinkDesc>
        <PriceContainer>
          <Text bold color="primary" fontSize={16}>
            {price}$
          </Text>
          <Button>
            <Text color="tertiary" fontSize={16}>
              View
            </Text>
          </Button>
        </PriceContainer>
      </Container>
    </OrderCardContainer>
  );
};

export default OrderCard;
