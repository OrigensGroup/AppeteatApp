import React from 'react';
import { FlatList } from 'react-native';

import OrderCard from '../../../components/Profile/OrderCard';
import TopBar from '../../../components/shared/TopBar';
import useUserData from '../../../hooks/useUserData';
import profileTranslations from '../../../translations/profile';
import { Order } from '../../../types/Order';

import { OrdersContainer, OrdersList } from './styles';

interface OrdersProps {}

const Orders: React.FunctionComponent<OrdersProps> = () => {
  const { userData } = useUserData();

  const renderItem = ({ item }: { item: Order }) => <OrderCard order={item} />;

  return (
    <OrdersContainer>
      <TopBar back="back" hideFilter title={profileTranslations.ordersPage.title} />
      <OrdersList>
        <FlatList data={userData.orders} horizontal={false} renderItem={renderItem} />
      </OrdersList>
    </OrdersContainer>
  );
};

export default Orders;
