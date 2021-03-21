export interface TabDiscount {
  tabToDiscount: string;
  amountForDiscount: number;
  type: 'tabDiscount';
}

export interface TwoForOne {
  type: 'twoForOne';
}

export type Discount = TwoForOne | TabDiscount;
