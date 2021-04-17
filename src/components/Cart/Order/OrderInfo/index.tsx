import React from 'react';

import cartTranslations from '../../../../translations/cart';

import type { Order } from '../../../../types/Order';

import Text from '../../../shared/Text';

import { OrderInfoArrival, OrderInfoContainer, OrderInfoNumber, OrderInfoText } from './styles';

interface OrderInfoProps {
  order: Order;
}

const OrderInfo: React.FunctionComponent<OrderInfoProps> = ({ order }) => {
  return (
    <OrderInfoContainer>
      <OrderInfoText>
        <Text color="quartiary" fontSize={14}>
          {cartTranslations.orderPage.orderInfo.title}
        </Text>
      </OrderInfoText>
      <OrderInfoNumber>
        <Text color="primary" fontSize={50}>
          {order.id}
        </Text>
      </OrderInfoNumber>
      <OrderInfoArrival>
        <Text color="quartiary" fontSize={14}>
          {order.orderTime
            ? cartTranslations.orderPage.orderInfo.delivery
            : cartTranslations.orderPage.orderInfo.deliveryEst}
          {order.orderTime ?? cartTranslations.orderPage.orderInfo.asap}
        </Text>
      </OrderInfoArrival>
    </OrderInfoContainer>
  );
};

export default OrderInfo;
