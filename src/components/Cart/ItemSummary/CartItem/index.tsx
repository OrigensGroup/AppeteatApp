import React from 'react';
import { MenuItem } from '../../../../types/MenuItem';

import {
  SingleCartItem,
  CartItemLeftWrapper,
  ItemInfoWrapper,
  ItemName,
  ItemsNumber,
  Price,
  Customisation,
  ItemCustom,
} from './styles';

interface CartItemProps {
  item: MenuItem;
  onClick: (id: string) => () => void;
}

const CartItem: React.FunctionComponent<CartItemProps> = ({ item, onClick }) => {
  return (
    <SingleCartItem onPress={onClick(item.id)}>
      <ItemInfoWrapper>
        <CartItemLeftWrapper>
          <ItemsNumber>{item.quantity}</ItemsNumber>
          <ItemName>{item.title}</ItemName>
        </CartItemLeftWrapper>
        <Price>£ {item.price * item.quantity}</Price>
      </ItemInfoWrapper>
      <Customisation>
        {item.customisations.map((customisation) => (
          <ItemCustom>{customisation}</ItemCustom>
        ))}
      </Customisation>
    </SingleCartItem>
  );
};

export default CartItem;

// need to implement a function that checks
// if <ItemCustom> has anything inside, if not then do not display it
