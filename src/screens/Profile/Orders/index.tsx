import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

import OrderCard from '../../../components/Profile/OrderCard';

import { OrdersContainer, OrdersWrap } from './styles';

type Item = {
  id: string;
  title: string;
};

interface OrdersProps {}

const Orders: React.FunctionComponent<OrdersProps> = () => {
  const DATA: Item[] = [
    {
      id: '1',
      title: 'First Item',
    },
    {
      id: '2',
      title: 'Second Item',
    },
    {
      id: '3',
      title: 'Third Item',
    },
    {
      id: '4',
      title: 'Fourth Item',
    },
  ];

  const renderItem = ({ item }: { item: Item }) => <OrderCard date="11MAY" items="1x Mojito" price={10} />;

  return (
    <OrdersContainer>
      <OrdersWrap>
        <FlatList data={DATA} horizontal={false} renderItem={renderItem} />
      </OrdersWrap>
    </OrdersContainer>
  );
};

export default Orders;
