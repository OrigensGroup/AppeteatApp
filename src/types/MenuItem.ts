export type MenuItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  belongsTo: string;
  image: string;
  smallDesc: string;
  description: string;
  promoted: boolean;
  type: 'customisableItem' | 'itemWithExtras';
};
