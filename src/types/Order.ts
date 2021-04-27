import type { Charge } from 'tipsi-stripe';

import { Pricing } from '../contexts/Cart';
import { CheckoutService } from './Checkout';

import { OrderItem } from './OrderItem';

export interface Order extends CheckoutService {
  id: string;
  userId: string;
  paymentRes: Charge;
  orderedItems: OrderItem[];
  pricing: Pricing;
  day: string;
  orderTime?: string;
}
