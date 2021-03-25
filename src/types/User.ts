import { Booking } from './Booking';

export interface User {
  favoriteCocktails: string[];
  default: boolean;
  bookings: Booking[];
}
