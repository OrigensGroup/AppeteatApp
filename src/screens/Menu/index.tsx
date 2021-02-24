import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Menu from "./MenuList"
import SingleItem from "../../components/Menu/SingleItemCard";
import HappyHourMenu from "./HappyHourMenu";
import Cart from '../Cart';
import Home from '../Home/HomePage';


const Stack = createStackNavigator();

interface MenuNavProps { }

const MenuNav: React.FunctionComponent<MenuNavProps> = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="HomePage" component={Home} />
      <Stack.Screen name="MenuList" component={Menu} />
      <Stack.Screen name="SingleItem" component={SingleItem} />
    </Stack.Navigator>
  );
};

export default MenuNav;
