import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Menu from "./MenuList"
import SingleItem from "../../components/Menu/MenuComponents/SingleItemCard";

const Stack = createStackNavigator();

interface MenuNavProps {}

const MenuNav: React.FunctionComponent<MenuNavProps> = () => {
  return (
    <Stack.Navigator headerMode={"none"}>
      <Stack.Screen name="MenuList" component={Menu} />
      <Stack.Screen name="SingleItem" component={SingleItem} />
    </Stack.Navigator>
  );
};

export default MenuNav;
