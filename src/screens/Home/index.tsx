import React from "react";
import { Text } from "react-native";
import Login from "../../components/Login";
import LogInButton from "../../components/Buttons/LogInButton"
import TextField from "../../components/TextField";

import { HomepageContainer } from "./styles";

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <HomepageContainer>
      <Login></Login>
      <LogInButton></LogInButton>
    </HomepageContainer>
  );
};

export default Home;
