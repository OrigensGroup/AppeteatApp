import { HomepageComponent } from './HomepageComponent';
import { MenuItem } from './MenuItem';
import { Tab } from './Tab';

import { Venue } from './Venue';

export interface Locations {
  list: Venue[];
}

export interface Menu {
  items: MenuItem[];
  tabs: Tab[];
}

export interface Homepage {
  sections: HomepageComponent[];
}

export interface Bar {
  bookings: { list: any[] };
  homepage: Homepage;
  locations: Locations;
  menu: Menu;
}
