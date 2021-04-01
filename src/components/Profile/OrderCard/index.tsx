import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';

import type { Order } from '../../../types/Order';

import Text from '../../shared/Text';

import { Container, DrinkDesc, OrderCardContainer, DateContainer, Circle, PriceContainer, Button } from './styles';

interface OrderCardProps {
  order: Order;
  onClick?: () => void;
}

const OrderCard: React.FunctionComponent<OrderCardProps> = ({ onClick, order }) => {
  const day = new Date(order.day);
  const navigation = useNavigation();

  const navigate = () => {
    navigation.navigate('App', {
      screen: 'Menu',
      params: { screen: 'Cart', params: { screen: 'OrderDetails', params: { order, back: 'back' } } },
    });
  };

  return (
    <OrderCardContainer>
      <Container activeOpacity={1} onPress={onClick}>
        <DateContainer>
          <Circle style={{ borderRadius: Dimensions.get('window').width / 2 }}>
            <Text bold color="secondary" fontSize={14}>
              {day.getDate()}
            </Text>
            <Text bold color="secondary" fontSize={12}>
              {day.getFullYear()}
            </Text>
          </Circle>
        </DateContainer>
        <DrinkDesc>
          <Text color="primary" fontSize={16}>
            {order.orderedItems.map((item) => `${item.quantity}x ${item.title}`).join(' ')}
          </Text>
        </DrinkDesc>
        <PriceContainer>
          <Text bold color="primary" fontSize={16}>
            {order.pricing.total}$
          </Text>
          <Button onPress={navigate}>
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
