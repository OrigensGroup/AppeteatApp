import { Menu } from '../contexts/Menu';

import { Venue } from './Venue';

export interface Bar {
  locations: Venue;
  menu: Menu;
}
