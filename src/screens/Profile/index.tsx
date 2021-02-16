import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import {} from "./styles";
import ProfileLink from "../../components/Profile/ProfileLink";
import Account from "./Account";

interface ProfileProps {}

const Profile: React.FunctionComponent<ProfileProps> = () => {
  return (
    <Stack.Navigator headerMode={"none"}>
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Notifications" component={ProfileLink} />
      <Stack.Screen name="BookTable" component={ProfileLink} />
    </Stack.Navigator>
  );
};

export default Profile;
