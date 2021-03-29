import { HomepageComponent } from './HomepageComponent';
import { MenuItem } from './MenuItem';
import { Promotion } from './Promotion';
import { Tab } from './Tab';
import { Booking } from './Booking';
import { Order } from './Order';
import { Venue } from './Venue';

export interface Orders {
  list: Order[];
}

export interface Bookings {
  list: Booking[];
}

export interface Locations {
  list: Venue[];
}

export interface Menu {
  items: MenuItem[];
  tabs: Tab[];
}

export interface Homepage {
  sections: (HomepageComponent | Promotion)[];
}

export interface Bar {
  bookings: Bookings;
  homepage: Homepage;
  locations: Locations;
  menu: Menu;
  orders: Orders;
}
