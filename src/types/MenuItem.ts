export type DataItem = {
  id: string;
  title: string;
  price: number;
  selected: boolean;
  explanation?: string;
};

export type UpgradeItem = {
  id: string;
  title: string;
  data: DataItem[];
  selection: 'single' | 'multiple';
  minSelection: number;
  maxSelection?: number;
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
  upgradableItems?: UpgradeItem[];
  soldout: boolean;
};

export type SelectionCheckbox = {
  [key: string]: DataItem;
};

export interface SelectionExtra extends UpgradeItem {
  selectionCheckbox: SelectionCheckbox;
  currentSelectionsValue: number;
}

export type SelectionExtras = {
  [key: string]: SelectionExtra;
};
