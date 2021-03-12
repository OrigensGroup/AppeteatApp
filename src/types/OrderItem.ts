import { MenuItem } from './MenuItem';

export interface OrderItem extends MenuItem {
  orderItemId: string;
  extras: {
    [key: string]: any;
  };
}
