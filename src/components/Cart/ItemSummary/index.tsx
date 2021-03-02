import React from 'react';
import { FlatList } from 'react-native';
import useCart from '../../../hooks/useCart';
import cartTranslations from '../../../translations/cart';
import Text from '../../Shared/Text';
import CartItem from './CartItem';

import { CartTitleContainer } from './styles';

interface ItemSummaryProps {
  onUpdate: (id: string) => () => void;
}

const ItemSummary: React.FunctionComponent<ItemSummaryProps> = ({ onUpdate }) => {
  const { cart } = useCart();

  return (
    <>
      <CartTitleContainer>
        <Text color="primary" bold fontSize={28}>
          {cartTranslations.titleField.title}
        </Text>
      </CartTitleContainer>
      <FlatList data={cart} renderItem={({ item }) => <CartItem item={item} onClick={onUpdate} />} />
    </>
  );
};

export default ItemSummary;
