type Extra = {
  title: string;
  extraPrice: number;
};

export type MenuItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  smallDesc: string;
  description: string;
  allergyCustomisations: string[];
  extras: Extra[];
  tabBar: string;
  promoted: boolean;
  belongsTo: string;
  image: string;
};
