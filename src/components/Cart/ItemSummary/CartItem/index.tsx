import React from 'react';

import { OrderItem } from '../../../../types/OrderItem';
import Text from '../../../Shared/Text';

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
  return (
    <CartItemContainer onPress={onClick(item)}>
      <CartItemInfo>
        <CartItemQuantity>
          <Text bold fontSize={20} color="tertiary">
            {item.quantity} x
          </Text>
        </CartItemQuantity>
        <CartItemTitle>
          <Text bold fontSize={20} color="primary">
            {item.title}
          </Text>
          <CartItemCustomisation>
            {item.customisations &&
              item.customisations.map((customisation) => (
                <Text light fontSize={14} color="tertiary">
                  {customisation}
                </Text>
              ))}
          </CartItemCustomisation>
        </CartItemTitle>
        <CartItemPrice>
          <Text bold fontSize={20} color="primary">
            £ {item.price * item.quantity}
          </Text>
        </CartItemPrice>
      </CartItemInfo>
    </CartItemContainer>
  );
};

export default CartItem;
