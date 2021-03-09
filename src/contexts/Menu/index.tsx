import React, { useState } from 'react';

import { MenuItem } from '../../types/MenuItem';
import { Tab } from '../../types/Tab';

export interface Menu {
  items: MenuItem[];
  tabs: Tab[];
}

interface MenuContext {
  menu: Menu;
}

export const MenuContext = React.createContext<MenuContext>({
  menu: { items: [], tabs: [] },
});

interface MenuProviderProps {
  loadedMenu: Menu;
}

const MenuProvider: React.FunctionComponent<MenuProviderProps> = ({ loadedMenu, children }) => {
  const [menu] = useState<Menu>(loadedMenu);

  return (
    <MenuContext.Provider
      value={{
        menu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
