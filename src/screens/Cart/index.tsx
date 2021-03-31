import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Checkout from '../../components/Cart/Checkout';

const Stack = createStackNavigator();

interface CartNavProps {}

const CartNav: React.FunctionComponent<CartNavProps> = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen component={Checkout} name="Checkout" />
    </Stack.Navigator>
  );
};

export default CartNav;
