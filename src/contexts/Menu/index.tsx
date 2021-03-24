import React, { useState } from 'react';

import { Bookings, Menu } from '../../types/Bar';

import { MenuItem } from '../../types/MenuItem';

interface MenuContext {
  menu: Menu;
  findMenuItems: (id: string[]) => MenuItem[];
  bookings: Bookings;
}

export const MenuContext = React.createContext<MenuContext>({
  menu: { items: [], tabs: [] },
  findMenuItems: () => [],
  bookings: { list: [] },
});

interface MenuProviderProps {
  loadedMenu: Menu;
  loadedBookings: Bookings;
}

const MenuProvider: React.FunctionComponent<MenuProviderProps> = ({ children, loadedBookings, loadedMenu }) => {
  const [menu] = useState<Menu>(loadedMenu);

  const findMenuItems = (items: string[]) => {
    return menu.items.filter((person) => items.includes(person.id));
  };

  return (
    <MenuContext.Provider
      value={{
        menu,
        findMenuItems,
        bookings: loadedBookings,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
