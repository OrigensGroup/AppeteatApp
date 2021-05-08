import React from 'react';
import { useRoute } from '@react-navigation/native';

import type { Order } from '../../../types/Order';

import TopBar from '../../../components/shared/TopBar';
import OrderInfo from '../../../components/Cart/Order/OrderInfo';
import OrderStatus from '../../../components/Cart/Order/OrderStatus';
import OrderItems from '../../../components/Cart/Order/OrderItems';
import TotalSection from '../../../components/Cart/TotalSection';

import { OrderDetailsContainer } from './styles';
import { t } from '../../../translations';

interface OrderDetailsProps {}

const OrderDetails: React.FunctionComponent<OrderDetailsProps> = () => {
  const route = useRoute();

  const { back = 'HomePage', order } = route.params as {
    order: Order;
    back?: 'back' | 'HomePage' | 'MenuList' | 'Account';
  };

  return (
    <OrderDetailsContainer>
      <TopBar back={back} hideFilter title={t('cartTranslations.orderPage.title')} />
      <OrderInfo order={order} />
      <OrderStatus done={back === 'Account'} />
      <OrderItems order={order} />
      <TotalSection order={order} />
    </OrderDetailsContainer>
  );
};

export default OrderDetails;
