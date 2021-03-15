import React from 'react';

import Text from '../../../shared/Text';

import { OrderServiceContainer, TextContainer } from './styles';

interface OrderServiceProps {}

const OrderService: React.FunctionComponent<OrderServiceProps> = () => {
  return (
    <OrderServiceContainer>
      <Text bold color="primary" fontSize={18}>
        Order Service
      </Text>
      <TextContainer>
        <Text color="quartiary" fontSize={18}>
          Table 220
        </Text>
      </TextContainer>
    </OrderServiceContainer>
  );
};

export default OrderService;
