import { Menu } from '../types/Bar';

export const findMenuItems = (menuItems: Menu, itemsId: string[]) => {
  return menuItems.items.filter((menuItem) => itemsId.includes(menuItem.id));
};
