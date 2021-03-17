import React, { useState } from 'react';

import { Menu, Promotions } from '../../types/Bar';

import { MenuItem } from '../../types/MenuItem';

interface MenuContext {
  menu: Menu;
  findMenuItems: (id: string[]) => MenuItem[];
  promotions: Promotions;
}

export const MenuContext = React.createContext<MenuContext>({
  menu: { items: [], tabs: [] },
  findMenuItems: () => [],
  promotions: { list: [] },
});

interface MenuProviderProps {
  loadedMenu: Menu;
  loadedPromotions: Promotions;
}

const MenuProvider: React.FunctionComponent<MenuProviderProps> = ({ children, loadedMenu, loadedPromotions }) => {
  const [menu] = useState<Menu>(loadedMenu);

  const findMenuItems = (items: string[]) => {
    return menu.items.filter((person) => items.includes(person.id));
  };

  return (
    <MenuContext.Provider
      value={{
        menu,
        findMenuItems,
        promotions: loadedPromotions,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
