import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ThemeProvider } from "styled-components/native";
import theme from "./theme";

import Home from "./screens/Home";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          {/* <Tab.Screen name='Locations' component={} />
        <Tab.Screen name='Menu' component={} />
        <Tab.Screen name='Cart' component={} />
        <Tab.Screen name='Profile' component={} /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
