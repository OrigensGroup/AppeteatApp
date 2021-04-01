import { Booking } from './Booking';
import { Order } from './Order';

export interface User {
  favoriteCocktails: string[];
  default: boolean;
  bookings: Booking[];
  orders: Order[];
  token?: string;
}
