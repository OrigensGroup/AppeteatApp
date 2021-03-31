import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

import OrderCard from '../../../components/Profile/OrderCard';
import useUserData from '../../../hooks/useUserData';
import { Order } from '../../../types/Order';

import { OrdersContainer } from './styles';

interface OrdersProps {}

const Orders: React.FunctionComponent<OrdersProps> = () => {
  const { userData } = useUserData();

  const renderItem = ({ item }: { item: Order }) => (
    <OrderCard
      date={item.day}
      items={item.orderedItems.map((item) => `${item.quantity}x ${item.title}`).join(' ')}
      key={item.id}
      price={item.pricing.total}
    />
  );

  return (
    <OrdersContainer>
      <FlatList data={userData.orders} horizontal={false} renderItem={renderItem} />
    </OrdersContainer>
  );
};

export default Orders;
