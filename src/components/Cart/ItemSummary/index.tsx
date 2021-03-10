import React from 'react';
import { Dimensions } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

import useCart from '../../../hooks/useCart';
import cartTranslations from '../../../translations/cart';
import { OrderItem } from '../../../types/OrderItem';
import Text from '../../shared/Text';

import CartItem from './CartItem';

import { ItemSummaryContainer, CartTitleContainer, DeleteButton } from './styles';

interface ItemSummaryProps {
  onUpdate: (orderItem: OrderItem) => () => void;
}

const ItemSummary: React.FunctionComponent<ItemSummaryProps> = ({ onUpdate }) => {
  const { cart, deleteItemFromCart } = useCart();

  const onSwipeValueChange = (swipeData: any) => {
    const { key, value } = swipeData;

    if (value < -Dimensions.get('window').width) {
      deleteItemFromCart(key);
    }
  };

  const closeRow = (rowMap: any, rowKey: any) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (item: any, rowMap: any) => {
    closeRow(rowMap, item.orderItemId);
    deleteItemFromCart(item.orderItemId);
  };

  const renderHiddenItem = (data: any, rowMap: any) => (
    <DeleteButton onPress={() => deleteRow(data, rowMap)}>
      <Text bold color="secondary" fontSize={18}>
        {cartTranslations.removeItemSwipe.title}
      </Text>
    </DeleteButton>
  );

  return (
    <ItemSummaryContainer>
      <CartTitleContainer>
        <Text bold color="primary" fontSize={28}>
          {cartTranslations.titleField.title}
        </Text>
      </CartTitleContainer>
      <SwipeListView
        data={cart}
        disableRightSwipe
        keyExtractor={(item) => item.orderItemId}
        onSwipeValueChange={onSwipeValueChange}
        renderHiddenItem={renderHiddenItem}
        renderItem={({ item }) => <CartItem item={item} onClick={onUpdate} />}
        rightOpenValue={-Dimensions.get('window').width}
        showsVerticalScrollIndicator={false}
        useFlatList
        useNativeDriver={false}
      />
    </ItemSummaryContainer>
  );
};

export default ItemSummary;
