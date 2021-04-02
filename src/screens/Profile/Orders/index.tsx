import React from 'react';
import { FlatList } from 'react-native';

import OrderCard from '../../../components/Profile/OrderCard';
import useUserData from '../../../hooks/useUserData';
import { Order } from '../../../types/Order';

import { OrdersContainer } from './styles';

interface OrdersProps {}

const Orders: React.FunctionComponent<OrdersProps> = () => {
  const { userData } = useUserData();

  const renderItem = ({ item }: { item: Order }) => <OrderCard order={item} />;

  return (
    <OrdersContainer>
      <FlatList data={userData.orders} horizontal={false} keyExtractor={(item) => item.id} renderItem={renderItem} />
    </OrdersContainer>
  );
};

export default Orders;
