import React from 'react';

import FastImage from 'react-native-fast-image';

import { useTheme } from 'styled-components';

import currencyTranslations from '../../../translations/currency';
import { OrderItem } from '../../../types/OrderItem';
import { calculateItemPrice } from '../../../utils/priceCalculations';
import Text from '../../shared/Text';

import {
  CartItemContainer,
  CartItemInfo,
  CartItemQuantity,
  CartItemDescription,
  CartItemTitle,
  CartItemPrice,
  ImageWrapper,
  CartMainItem,
  CartItemNumbers,
  CartItemCustomisation,
} from './styles';

interface CartItemProps {
  item: OrderItem;
  onClick?: (id: OrderItem) => () => void;
}

const CartItem: React.FunctionComponent<CartItemProps> = ({ item, onClick }) => {
  const theme = useTheme();

  const itemExtras = () => {
    return (
      item.extras &&
      item.extras.map((extra) => (
        <Text color="tertiary" fontSize={14} key={extra.id} light>
          {extra.title}
        </Text>
      ))
    );
  };

  return (
    <CartItemContainer activeOpacity={1} onPress={onClick && onClick(item)}>
      <CartItemInfo>
        <ImageWrapper>
          <FastImage
            resizeMode={FastImage.resizeMode.cover}
            source={{
              uri: item.image,
              priority: FastImage.priority.high,
            }}
            style={{
              width: Number(theme.spacing.multiple(12).replace('px', '')),
              height: Number(theme.spacing.multiple(12).replace('px', '')),
              borderRadius: Number(theme.spacing.triple.replace('px', '')),
            }}
          />
        </ImageWrapper>
        <CartItemDescription>
          <CartItemTitle>
            <Text bold color="primary" fontSize={14}>
              {item.title}
            </Text>
          </CartItemTitle>
          <CartMainItem>
            <Text color="quartiary" fontSize={12}>
              {item.smallDesc}
            </Text>
            <CartItemCustomisation>{itemExtras()}</CartItemCustomisation>
          </CartMainItem>
        </CartItemDescription>
        <CartItemNumbers>
          <CartItemQuantity>
            <Text bold color="primary" fontSize={16}>
              {item.quantity} x
            </Text>
          </CartItemQuantity>
          <CartItemPrice>
            <Text bold color="tertiary" fontSize={16}>
              {currencyTranslations.currencyField}
              {calculateItemPrice(item)}
            </Text>
          </CartItemPrice>
        </CartItemNumbers>
      </CartItemInfo>
    </CartItemContainer>
  );
};

export default CartItem;
