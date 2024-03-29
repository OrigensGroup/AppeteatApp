import React from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { t } from '../../../../translations';

import type { Order } from '../../../../types/Order';
import Text from '../../../shared/Text';

import CartItem from '../../CartItem';

import { OrderItemsContainer, OrderItemTitle, OrderItemText, OrderItemInvoice, OrderItemSection } from './styles';

interface OrderItemsProps {
  order: Order;
}

const OrderItems: React.FunctionComponent<OrderItemsProps> = ({ order }) => {
  return (
    <OrderItemsContainer>
      <OrderItemTitle>
        <OrderItemText>
          <Text bold color="primary" fontSize={14}>
            {t('cartTranslations.orderPage.orderItems.text')}
          </Text>
        </OrderItemText>
        <OrderItemInvoice>
          <Icon name="ios-receipt-outline" size={18} />
        </OrderItemInvoice>
      </OrderItemTitle>
      <OrderItemSection>
        <FlatList
          data={order.orderedItems}
          keyExtractor={(item, ind) => `${item.id}-${ind}`}
          renderItem={({ item }) => <CartItem item={item} />}
          showsVerticalScrollIndicator={false}
        />
      </OrderItemSection>
    </OrderItemsContainer>
  );
};

export default OrderItems;
