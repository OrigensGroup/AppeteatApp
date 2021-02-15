import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import BookTable from "./BookATable";
import BookList from "./BookList";

const Stack = createStackNavigator();

interface BookProps {}

const Book: React.FunctionComponent<BookProps> = () => {
  return (
    <Stack.Navigator headerMode={"none"}>
      <Stack.Screen name="BookList" component={BookList} />
      <Stack.Screen name="BookTable" component={BookTable} />
    </Stack.Navigator>
  );
};

export default Book;
