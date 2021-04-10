import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Checkout from './Checkout';
import OrderDetails from './OrderDetails';

const Stack = createStackNavigator();

interface CartNavProps {}

const CartNav: React.FunctionComponent<CartNavProps> = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen component={Checkout} name="Checkout" />
      <Stack.Screen component={OrderDetails} name="OrderDetails" options={{ gestureEnabled: false }} />
    </Stack.Navigator>
  );
};

export default CartNav;
