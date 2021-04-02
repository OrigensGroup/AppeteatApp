import React from 'react';
import { useRoute } from '@react-navigation/native';

import type { Order } from '../../../types/Order';

import cartTranslations from '../../../translations/cart';

import TopBar from '../../../components/shared/TopBar';
import OrderInfo from '../../../components/Cart/Order/OrderInfo';
import OrderStatus from '../../../components/Cart/Order/OrderStatus';
import OrderItems from '../../../components/Cart/Order/OrderItems';
import TotalSection from '../../../components/Cart/TotalSection';

import { OrderDetailsContainer } from './styles';

interface OrderDetailsProps {}

const OrderDetails: React.FunctionComponent<OrderDetailsProps> = () => {
  const route = useRoute();

  const { back = 'HomePage', order } = route.params as {
    order: Order;
    back?: 'back' | 'HomePage' | 'MenuList' | 'Account';
  };

  console.log(order);

  return (
    <OrderDetailsContainer>
      <TopBar back={back} hideFilter title={cartTranslations.orderPage.title} />
      <OrderInfo order={order} />
      <OrderStatus done={back === 'back'} />
      <OrderItems order={order} />
      <TotalSection order={order} />
    </OrderDetailsContainer>
  );
};

export default OrderDetails;
