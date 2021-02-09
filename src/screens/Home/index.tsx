import React from "react";
import { Text } from "react-native";
import Login from "../../components/Login";
import TextField from "../../components/TextField";

import { HomepageContainer } from "./styles";

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <HomepageContainer>
      <Login></Login>
    </HomepageContainer>
  );
};

export default Home;
