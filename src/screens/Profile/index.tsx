import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import {} from "./styles";
import ProfileLink from "../../components/Profile/ProfileLink";

import Account from "./Account";

interface ProfileProps {}

const Profile: React.FunctionComponent<ProfileProps> = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen component={Account} name="Account" />
      <Stack.Screen component={ProfileLink} name="Notifications" />
      <Stack.Screen component={ProfileLink} name="BookTable" />
    </Stack.Navigator>
  );
};

export default Profile;
