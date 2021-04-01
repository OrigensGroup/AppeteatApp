import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Checkout from './Checkout';

const Stack = createStackNavigator();

interface CartNavProps {}

const CartNav: React.FunctionComponent<CartNavProps> = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen component={Checkout} name="Checkout" />
      <Stack.Screen component={Checkout} name="OrderDetails" />
    </Stack.Navigator>
  );
};

export default CartNav;
