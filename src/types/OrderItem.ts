import { MenuItem } from './MenuItem';

export interface OrderItem extends MenuItem {
  orderItemId: string;
  customisations: any[];
}
