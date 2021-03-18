import { Promotion } from './Promotion';

export interface HomepageComponent {
  type: 'ShowLocations' | 'FeaturedItems' | 'CarouselPromo';
  promotions?: Promotion[];
  promotedItems?: string[];
  title?: string;
}
