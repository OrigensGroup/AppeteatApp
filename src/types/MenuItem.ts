type Extra = {
  title: string;
  extraPrice: number;
};

export type MenuItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  belongsTo: string;
  image: string;
  smallDesc: string;
  description: string;
  allergyCustomisations: string[];
  extras: Extra[];
  promoted: boolean;
};
