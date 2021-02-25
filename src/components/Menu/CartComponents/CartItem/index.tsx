import React from 'react';
import SwipeableItem, { UnderlayParams } from 'react-native-swipeable-item'

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
    item: any;
    onClick: (id: string) => () => void;
}

const CartItem: React.FunctionComponent<CartItemProps> = ({ item, onClick }) => {
    return (
        <SingleCartItem onPress={onClick(item)}>
            <ItemInfoWrapper>
                <CartItemLeftWrapper>
                    <ItemsNumber>{item.quantity}</ItemsNumber>
                    <ItemName>{item.title}</ItemName>
                </CartItemLeftWrapper>
                <Price>£ {item.price * item.quantity}</Price>
            </ItemInfoWrapper>
            <Customisation>
                {item.custom1 && <ItemCustom>{item.custom1}</ItemCustom>}
                {item.custom2 && <ItemCustom>{item.custom2}</ItemCustom>}
                {item.custom3 && <ItemCustom>{item.custom3}</ItemCustom>}
                {item.custom4 && <ItemCustom>{item.custom4}</ItemCustom>}
                {item.custom5 && <ItemCustom>{item.custom5}</ItemCustom>}
            </Customisation>
        </SingleCartItem>
    );
};

export default CartItem;

// need to implement a function that checks
// if <ItemCustom> has anything inside, if not then do not display it
