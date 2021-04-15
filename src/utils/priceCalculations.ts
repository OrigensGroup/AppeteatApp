import { OrderItem } from '../types/OrderItem';

export const fixDecimals = (n: number) => Math.round((n + Number.EPSILON) * 100) / 100;

export const calculateDiscount = (price: number, percentage: number) => fixDecimals(price - (price * percentage) / 100);

export const calculateItemPrice = (item: Pick<OrderItem, 'extras' | 'price' | 'quantity' | 'customPriceReduction'>) =>
  fixDecimals(
    (item.price + item.extras.reduce((acc, extra) => acc + extra.price, 0)) * item.quantity * item.customPriceReduction,
  );
