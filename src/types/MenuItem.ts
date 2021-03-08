export type UpgradeItem = {
  title: string;
  data: {
    title: string;
    price: number;
    selected: boolean;
  };
  selection: 'single' | 'multiple';
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
  promoted: boolean;
  type: 'customisableItem' | 'itemWithExtras';
  ingredients?: string[];
  customisations?: string[];
  upgradableItems?: UpgradeItem[];
};
