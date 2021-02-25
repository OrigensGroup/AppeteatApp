import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { MenuItem } from '../../types/MenuItem';
import { Tab } from '../../types/Tab';

interface Menu {
  items: MenuItem[];
  tabs: Tab[];
}

interface MenuContext {
  menu: Menu;
}

export const MenuContext = React.createContext<MenuContext>({
  menu: { items: [], tabs: [] },
});

interface MenuProviderProps {}

const MenuProvider: React.FunctionComponent<MenuProviderProps> = ({ children }) => {
  const [menu, setMenu] = useState<Menu>({ items: [], tabs: [] });

  const getMenu = async () => {
    const firebaseMenu = (await (await firestore().collection('menus').doc('menu').get()).data()) as Menu;
    setMenu(firebaseMenu);
  };

  useEffect(() => {
    getMenu();
  }, []);

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
