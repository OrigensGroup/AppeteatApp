export interface Payment {
  CONNECTED_STRIPE_ACCOUNT_ID: string;
  price: number;
  product: string;
  customerEmail: string;
  tokenId: string;
  currency: string;
  fee: number;
}
