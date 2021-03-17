export interface Promotion {
  title: string;
  image?: string;
  description?: string;
  endDate?: string;
  type: 'discountWithImage' | 'discount' | 'countdown';
}
