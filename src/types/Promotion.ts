import { TabDiscount, TwoForOne } from './DiscountRules';

export interface PromotionCommon {
  id: string;
  title: string;
}

export interface PromotionBillboard extends PromotionCommon {
  image: string;
  type: 'billboard';
}

// The discount promotion type has no end date and discount type.
export interface PromotionDiscount extends PromotionCommon {
  image: string;
  description: string;
  discount: TabDiscount;
  cta: string;
  type: 'discount';
}

// The countdown promotion type has an end date and a countdown type.
export interface PromotionCountdown extends PromotionCommon {
  startDate: string;
  endDate: string;
  discount: TwoForOne;
  discountedItems: string[];
  type: 'countdown';
}

// The final Promotion type can be either a discount or a countdown
export type Promotion = PromotionDiscount | PromotionCountdown | PromotionBillboard;
