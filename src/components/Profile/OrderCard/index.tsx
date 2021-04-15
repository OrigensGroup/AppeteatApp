import React from 'react';
import { useNavigation } from '@react-navigation/native';

import type { Order } from '../../../types/Order';

import Text from '../../shared/Text';

import profileTranslations from '../../../translations/profile';
import currencyTranslations from '../../../translations/currency';

import { Container, DrinkDesc, OrderCardContainer, DateContainer, Circle, PriceContainer, Button } from './styles';

interface OrderCardProps {
  order: Order;
}

const OrderCard: React.FunctionComponent<OrderCardProps> = ({ order }) => {
  const day = new Date(order.day);
  const navigation = useNavigation();
  const itemsToRender = order.orderedItems.filter((_, idx) => idx < 3);

  const navigate = () => {
    navigation.navigate('App', {
      screen: 'Menu',
      params: {
        screen: 'Cart',
        params: { screen: 'OrderDetails', params: { order, back: 'Account' } },
      },
    });
  };

  return (
    <OrderCardContainer>
      <Container activeOpacity={1} onPress={navigate}>
        <DateContainer>
          <Circle>
            <Text bold color="secondary" fontSize={14}>
              {day.getDate()}
            </Text>
            <Text bold color="secondary" fontSize={12}>
              {day.getFullYear()}
            </Text>
          </Circle>
        </DateContainer>
        <DrinkDesc>
          {itemsToRender.map((item, index) => (
            <Text color="primary" fontSize={16} key={`${item.id}-${index}`}>
              {item.quantity}x {item.title}
            </Text>
          ))}
          <Text color="primary" fontSize={16}>
            ...
          </Text>
        </DrinkDesc>
        <PriceContainer>
          <Text bold color="primary" fontSize={16}>
            {currencyTranslations.currencyField}
            {order.pricing.total}
          </Text>
          <Button onPress={navigate}>
            <Text color="tertiary" fontSize={16}>
              {profileTranslations.ordersPage.card.cta}
            </Text>
          </Button>
        </PriceContainer>
      </Container>
    </OrderCardContainer>
  );
};

export default OrderCard;
