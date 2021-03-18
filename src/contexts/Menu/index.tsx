import React, { useState } from 'react';

import { Menu } from '../../types/Bar';

import { MenuItem } from '../../types/MenuItem';

interface MenuContext {
  menu: Menu;
  findMenuItems: (id: string[]) => MenuItem[];
}

export const MenuContext = React.createContext<MenuContext>({
  menu: { items: [], tabs: [] },
  findMenuItems: () => [],
});

interface MenuProviderProps {
  loadedMenu: Menu;
}

const MenuProvider: React.FunctionComponent<MenuProviderProps> = ({ children, loadedMenu }) => {
  const [menu] = useState<Menu>(loadedMenu);

  const findMenuItems = (items: string[]) => {
    return menu.items.filter((person) => items.includes(person.id));
  };

  return (
    <MenuContext.Provider
      value={{
        menu,
        findMenuItems,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
