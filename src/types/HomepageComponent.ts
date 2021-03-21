import { Promotion } from './Promotion';

export type HomepageComponent = CarouselPromo | FeaturedItems | ShowLocations;

// The discount promotion type has no end date and discount type.
export interface CarouselPromo {
  promotions: Promotion[];
  type: 'CarouselPromo';
}

// The countdown promotion type has an end date and a countdown type.
export interface FeaturedItems {
  promotedItems: string[];
  title: string;
  type: 'FeaturedItems';
}
export interface ShowLocations {
  type: 'ShowLocations';
}
