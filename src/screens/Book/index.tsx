import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LocationsList from './LocationsList';

const Stack = createStackNavigator();

interface BookProps {}

const Book: React.FunctionComponent<BookProps> = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen component={LocationsList} name="LocationsList" />
    </Stack.Navigator>
  );
};

export default Book;
