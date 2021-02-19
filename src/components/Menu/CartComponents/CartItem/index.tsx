import React from "react";
import { styles } from "../../../Homepage/Promotion/styles";

import {
    SingleCartItem,
    CartItemLeftWrapper,
    ItemInfoWrapper,
    ItemName,
    ItemsNumber,
    Price,
} from "./styles";

interface CartItemProps {
    title: string;
    quantity: string;
    price: string;
}

const CartItem: React.FunctionComponent<CartItemProps> = ({title, quantity, price}) => {
  return (
    <SingleCartItem>
        <ItemInfoWrapper>
            <CartItemLeftWrapper>
                <ItemsNumber>{quantity}</ItemsNumber>
                <ItemName>{title}</ItemName>
            </CartItemLeftWrapper>
            <Price>{price}</Price>
        </ItemInfoWrapper>
    </SingleCartItem>
  );
};

export default CartItem;