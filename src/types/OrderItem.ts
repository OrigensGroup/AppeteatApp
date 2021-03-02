import { MenuItem } from './MenuItem';

type Extra = {
  title: string;
  extraPrice: number;
};

export interface OrderItem extends MenuItem {
  customisations: string[];
  extras: Extra[];
}
