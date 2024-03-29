import React from 'react';
import { FlatList } from 'react-native';

import OrderCard from '../../../components/Profile/OrderCard';
import TopBar from '../../../components/shared/TopBar';
import useUserData from '../../../hooks/useUserData';
import { t } from '../../../translations';
import { Order } from '../../../types/Order';

import { OrdersContainer, OrdersList } from './styles';

interface OrdersProps {}

const Orders: React.FunctionComponent<OrdersProps> = () => {
  const { userData } = useUserData();

  const renderItem = ({ item }: { item: Order }) => <OrderCard order={item} />;

  return (
    <OrdersContainer>
      <TopBar showBorder back="back" hideFilter title={t('profileTranslations.ordersPage.title')} />
      <OrdersList>
        <FlatList
          data={userData.orders}
          horizontal={false}
          renderItem={renderItem}
          keyExtractor={(item, index) => `${item.id}/${index}`}
          showsVerticalScrollIndicator={false}
          getItemLayout={(_, index) => ({ length: 104, offset: 104 * index, index })}
        />
      </OrdersList>
    </OrdersContainer>
  );
};

export default Orders;
