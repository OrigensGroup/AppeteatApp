import { MenuItem } from './MenuItem';
import { Promotion } from './Promotion';
import { Tab } from './Tab';

import { Venue } from './Venue';

export interface Locations {
  list: Venue[];
}

export interface Promotions {
  list: Promotion[];
}

export interface Menu {
  items: MenuItem[];
  tabs: Tab[];
}

export interface Bar {
  locations: Locations;
  menu: Menu;
  promotions: Promotions;
}
