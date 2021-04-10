import type { Charge } from 'tipsi-stripe';

import { Pricing } from '../contexts/Cart';

import { OrderItem } from './OrderItem';

export interface Order {
  id: string;
  userId: string;
  paymentRes: Charge;
  orderedItems: OrderItem[];
  pricing: Pricing;
  day: string;
  orderTime?: string;
}
