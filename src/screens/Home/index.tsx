import React from "react";
import { Text } from "react-native";
import Promotion from "../../components/Homepage/Promotion";
import Card from "../../components/Homepage/Card";
import Login from "../../components/Login";
import SignInButton from "../../components/Buttons/SignInButton";
import SignUpButton from "../../components/Buttons/SignUpButton";
import MenuCard from "../../components/Cards/MenuCards";
import TextField from "../../components/TextField";
import { HomepageContainer } from "./styles";

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <HomepageContainer>
      <MenuCard></MenuCard>
      <Login></Login>
      <SignInButton></SignInButton>
      <SignUpButton></SignUpButton>

      <Promotion></Promotion>
      <Card></Card>
    </HomepageContainer>
    
  );
};

export default Home;
