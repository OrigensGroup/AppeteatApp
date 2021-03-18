import { DataItem, MenuItem } from './MenuItem';

export interface OrderItem extends MenuItem {
  orderItemId: string;
  extras: DataItem[];
  overallPrice: number;
}
