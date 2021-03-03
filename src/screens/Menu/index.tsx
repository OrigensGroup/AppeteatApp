import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import React from 'react';
import Menu from './MenuList';
import SingleItem from '../../components/Menu/SingleItemCard';
import Cart from '../Cart';


const Stack = createSharedElementStackNavigator();

interface MenuNavProps {}

const MenuNav: React.FunctionComponent<MenuNavProps> = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen component={Menu} name="MenuList" />
      <Stack.Screen component={SingleItem} name="SingleItem"  sharedElementsConfig={(route, otherRoute, showing) => {
            const { item } = route.params;
            return [{
      id: `item.${item.id}.image`,
      animation: 'move',
      resize: 'none',
      align: 'auto'
    }];
          }} />
      <Stack.Screen component={Cart} name="Cart" />
    </Stack.Navigator>
  );
};

export default MenuNav;
