import React from "react";
import { Text } from "react-native";
import Promotion from "../../components/Homepage/Promotion";
import Card from "../../components/Homepage/Card";
import Login from "../../components/Login";
import { HomepageContainer } from "./styles";

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <HomepageContainer>
      <Login></Login>
      <Promotion></Promotion>
      <Card></Card>
    </HomepageContainer>
  );
};

export default Home;
