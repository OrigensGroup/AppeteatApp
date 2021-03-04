import React, { useEffect, useRef } from 'react';
import { StyleSheet, Dimensions, Animated } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import useCart from '../../../hooks/useCart';
import cartTranslations from '../../../translations/cart';
import { OrderItem } from '../../../types/OrderItem';
import Text from '../../Shared/Text';
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
      <Text color="secondary" bold fontSize={18}>
        {cartTranslations.removeItemSwipe.title}
      </Text>
    </DeleteButton>
  );

  return (
    <ItemSummaryContainer>
      <CartTitleContainer>
        <Text color="primary" bold fontSize={28}>
          {cartTranslations.titleField.title}
        </Text>
      </CartTitleContainer>
      <SwipeListView
        showsVerticalScrollIndicator={false}
        useFlatList={true}
        data={cart}
        disableRightSwipe
        keyExtractor={(item) => item.orderItemId}
        renderItem={({ item }) => <CartItem item={item} onClick={onUpdate} />}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-Dimensions.get('window').width}
        onSwipeValueChange={onSwipeValueChange}
        useNativeDriver={false}
      />
    </ItemSummaryContainer>
  );
};

export default ItemSummary;

const styles = StyleSheet.create({
  rowBack: {
    alignItems: 'center',
    backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
});
