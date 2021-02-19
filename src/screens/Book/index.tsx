import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import BookTable from "./BookATable";
import BookList from "./BookList";

const Stack = createStackNavigator();

interface BookProps {}

const Book: React.FunctionComponent<BookProps> = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen component={BookList} name="BookList" />
      <Stack.Screen component={BookTable} name="BookTable" />
    </Stack.Navigator>
  );
};

export default Book;
