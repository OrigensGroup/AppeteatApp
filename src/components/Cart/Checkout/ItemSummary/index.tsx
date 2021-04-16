import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { Dimensions } from 'react-native';
import { RowMap, SwipeListView } from 'react-native-swipe-list-view';

import useCart from '../../../../hooks/useCart';
import cartTranslations from '../../../../translations/cart';
import type { OrderItem } from '../../../../types/OrderItem';
import Text from '../../../shared/Text';

import CartItem from '../../CartItem';

import { ItemSummaryContainer, DeleteButton } from './styles';

interface ItemSummaryProps {
  onUpdate: (orderItem: OrderItem) => () => void;
}

const ItemSummary: React.FunctionComponent<ItemSummaryProps> = ({ onUpdate }) => {
  const navigation = useNavigation();
  const { cart, deleteItemFromCart } = useCart();

  const onSwipeValueChange = (swipeData: {
    key: string;
    value: number;
    direction: 'left' | 'right';
    isOpen: boolean;
  }) => {
    const { key, value } = swipeData;

    if (value < -Dimensions.get('window').width) {
      deleteItemFromCart(key);
    }
  };

  const closeRow = (rowMap: RowMap<OrderItem>, rowKey: string) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (item: OrderItem, rowMap: RowMap<OrderItem>) => {
    closeRow(rowMap, item.orderItemId);
    deleteItemFromCart(item.orderItemId);
  };

  const renderHiddenItem = (data: unknown, rowMap: RowMap<OrderItem>) => {
    const itemData = data as OrderItem;
    return (
      <DeleteButton onPress={() => deleteRow(itemData, rowMap)}>
        <Text bold color="fixedWhite" fontSize={18}>
          {cartTranslations.checkoutPage.removeItemSwipe.title}
        </Text>
      </DeleteButton>
    );
  };

  useEffect(() => {
    if (cart.length === 0) {
      navigation.goBack();
    }
  }, [cart, navigation]);

  return (
    <ItemSummaryContainer>
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
