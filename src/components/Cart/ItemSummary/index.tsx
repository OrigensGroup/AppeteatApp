import React from 'react';
import { FlatList } from 'react-native';
import useCart from '../../../hooks/useCart';
import cartTranslations from '../../../translations/cart';
import { OrderItem } from '../../../types/OrderItem';
import Text from '../../Shared/Text';
import CartItem from './CartItem';

import { ItemSummaryContainer, CartTitleContainer } from './styles';

interface ItemSummaryProps {
  onUpdate: (orderItem: OrderItem) => () => void;
}

const ItemSummary: React.FunctionComponent<ItemSummaryProps> = ({ onUpdate }) => {
  const { cart } = useCart();

  return (
    <ItemSummaryContainer>
      <CartTitleContainer>
        <Text color="primary" bold fontSize={28}>
          {cartTranslations.titleField.title}
        </Text>
      </CartTitleContainer>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.orderItemId}
        renderItem={({ item }) => <CartItem item={item} onClick={onUpdate} />}
      />
    </ItemSummaryContainer>
  );
};

export default ItemSummary;
