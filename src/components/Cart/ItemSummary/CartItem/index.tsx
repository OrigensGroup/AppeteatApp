import React from 'react';

import currencyTranslations from '../../../../translations/currency';

import { OrderItem } from '../../../../types/OrderItem';
import Text from '../../../shared/Text';

import {
  CartItemContainer,
  CartItemInfo,
  CartItemCustomisation,
  CartItemQuantity,
  CartItemTitle,
  CartItemPrice,
} from './styles';

interface CartItemProps {
  item: OrderItem;
  onClick: (id: OrderItem) => () => void;
}

const CartItem: React.FunctionComponent<CartItemProps> = ({ item, onClick }) => {
  const itemExtras = () => {
    item.extras &&
      item.extras.map((extra) => (
        <Text color="tertiary" fontSize={14} key={extra} light>
          {extra}
        </Text>
      ));
  };

  return (
    <CartItemContainer activeOpacity={1} onPress={onClick(item)}>
      <CartItemInfo>
        <CartItemQuantity>
          <Text bold color="tertiary" fontSize={20}>
            {item.quantity} x
          </Text>
        </CartItemQuantity>
        <CartItemTitle>
          <Text bold color="primary" fontSize={20}>
            {item.title}
          </Text>
          <CartItemCustomisation>{itemExtras}</CartItemCustomisation>
        </CartItemTitle>
        <CartItemPrice>
          <Text bold color="primary" fontSize={20}>
            {currencyTranslations.currencyField.placeholder}
            {item.price * item.quantity}
          </Text>
        </CartItemPrice>
      </CartItemInfo>
    </CartItemContainer>
  );
};

export default CartItem;
