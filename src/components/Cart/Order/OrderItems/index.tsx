import React from 'react';

import type { Order } from '../../../../types/Order';

import { OrderItemsContainer, OrderItemText } from './styles';

interface OrderItemsProps {
  order: Order;
}

const OrderItems: React.FunctionComponent<OrderItemsProps> = () => {
  return (
    <OrderItemsContainer>
      <OrderItemsContainer>
        <OrderItemText />
      </OrderItemsContainer>
    </OrderItemsContainer>
  );
};

export default OrderItems;
