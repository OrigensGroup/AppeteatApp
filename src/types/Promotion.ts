export interface Promotion {
  title: string;
  image?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  type: 'discountWithImage' | 'discount' | 'countdown';
}
