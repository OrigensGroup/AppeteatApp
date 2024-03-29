import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { RowMap, SwipeListView } from 'react-native-swipe-list-view';
import { useNavigation } from '@react-navigation/native';

import useCart from '../../../../hooks/useCart';
import type { OrderItem } from '../../../../types/OrderItem';
import Text from '../../../shared/Text';

import CartItem from '../../CartItem';

import { ItemSummaryContainer, DeleteButton } from './styles';
import { t } from '../../../../translations';

interface ItemSummaryProps {
  onUpdate: (orderItem: OrderItem) => () => void;
}

const ItemSummary: React.FunctionComponent<ItemSummaryProps> = ({ onUpdate }) => {
  const navigation = useNavigation();
  const [didAction, setDidAction] = useState(false);
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
      setDidAction(true);
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
    setDidAction(true);
  };

  const renderHiddenItem = (data: unknown, rowMap: RowMap<OrderItem>) => {
    const itemData = data as OrderItem;
    return (
      <DeleteButton onPress={() => deleteRow(itemData, rowMap)}>
        <Text bold color="fixedWhite" fontSize={18}>
          {t('cartTranslations.checkoutPage.removeItemSwipe.title')}
        </Text>
      </DeleteButton>
    );
  };

  useEffect(() => {
    if (cart.length === 0 && didAction) {
      navigation.goBack();
      setDidAction(false);
    }
  }, [cart, navigation, didAction]);

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
