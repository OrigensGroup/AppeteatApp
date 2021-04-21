import { ColorsInterface } from '../theme/colors';

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

type FeatureFlags = {
  FEAT_BOOK: boolean;
  FEAT_CART_DELIVERY: boolean;
  FEAT_CART_TAKEAWAY: boolean;
  FEAT_FAVORITE_COCKTAILS: boolean;
  FEAT_ORDERING: boolean;
  FEAT_DARK_MODE: boolean;
  FEAT_CASH_PAYMENT: boolean;
  [key: string]: boolean;
};

interface DeliverySettings {
  oredersPerTimeFrame: number;
  timeFrame: number;
  openTime: string;
  closeTime: string;
  fee: number;
}
export interface Settings {
  colors: ColorsInterface;
  features: FeatureFlags;
  deliverySettings: DeliverySettings;
  logoImage: string;
}

export interface Bar {
  bookings: Bookings;
  homepage: Homepage;
  locations: Locations;
  menu: Menu;
  orders: Orders;
  settings: Settings;
}
