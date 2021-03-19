import { fixDecimals } from '../contexts/Cart';
import { OrderItem } from '../types/OrderItem';

export const calculateDiscount = (price: number, percentage: number) => fixDecimals(price - (price * percentage) / 100);

export const calculateItemPrice = (item: Pick<OrderItem, 'extras' | 'price' | 'quantity' | 'customPriceReduction'>) =>
  (item.price + item.extras.reduce((acc, extra) => acc + extra.price, 0)) * item.quantity * item.customPriceReduction;
