import React from "react";

import {
    SingleCartItem,
    CartItemLeftWrapper,
    ItemInfoWrapper,
    ItemName,
    ItemsNumber,
    Price,
    Customisation,
    ItemCustom,
} from "./styles";

interface CartItemProps {
    title: string;
    quantity: string;
    price: string;
    custom1: string;
    custom2: string;
    custom3: string;
    custom4: string;
    custom5: string;
}


const CartItem: React.FunctionComponent<CartItemProps> = ({ title, quantity, price, custom1, custom2, custom3, custom4, custom5 }) => {
    return (
        <SingleCartItem>
            <ItemInfoWrapper>
                <CartItemLeftWrapper>
                    <ItemsNumber>{quantity}</ItemsNumber>
                    <ItemName>{title}</ItemName>
                </CartItemLeftWrapper>
                <Price>{price}</Price>
            </ItemInfoWrapper>
            <Customisation>
                {custom1 && <ItemCustom>{custom1}</ItemCustom>}
                {custom2 && <ItemCustom>{custom2}</ItemCustom>}
                {custom3 && <ItemCustom>{custom3}</ItemCustom>}
                {custom4 && <ItemCustom>{custom4}</ItemCustom>}
                {custom5 && <ItemCustom>{custom5}</ItemCustom>}
            </Customisation>
        </SingleCartItem>
    );
};

export default CartItem;


// need to implement a function that checks
// if <ItemCustom> has anything inside, if not then do not display it