import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SingleItem from "../../components/Menu/SingleItemCard";
import HappyHourMenu from "../Menu/HappyHourMenu";
import Menu from "../Menu/MenuList";
import Home from "./HomePage";

const Stack = createStackNavigator();

interface MenuNavProps { }

const MenuNav: React.FunctionComponent<MenuNavProps> = () => {
    return (
        <Stack.Navigator headerMode={'none'}>
            <Stack.Screen name="HomePage" component={Home} />
            <Stack.Screen name="MenuList" component={Menu} />
            <Stack.Screen name="HappyHourMenu" component={HappyHourMenu} />
            <Stack.Screen name="SingleItem" component={SingleItem} />
        </Stack.Navigator>
    );
};

export default MenuNav;