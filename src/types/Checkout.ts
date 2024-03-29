import type { Card } from 'tipsi-stripe';

export type ServiceOptions = 'eatin' | 'takeaway' | 'delivery';

export interface CheckoutService {
  allergy: string;
  paymentOption: 'native' | Card | 'cash' | null;
  type: ServiceOptions;
  [key: string]: any;
}

interface TableService extends CheckoutService {
  table: string;
  type: 'eatin';
}

interface TakeAwayService extends CheckoutService {
  phoneNumber: string;
  orderTime: string;
  type: 'takeaway';
}

interface DeliveryService extends CheckoutService {
  address: string;
  orderTime: string;
  phoneNumber: string;
  type: 'delivery';
}

export type CheckoutServices = TableService | TakeAwayService | DeliveryService;

export type CheckoutServiceValidationError = {
  table?: string;
  card?: string;
  phone?: string;
  orderTime?: string;
  address?: string;
};
