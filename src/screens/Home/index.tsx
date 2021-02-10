import React from "react";
import { Text } from "react-native";
import Promotion from "../../components/Homepage/Promotion";
import Card from "../../components/Homepage/Card";
import Login from "../../components/Login";
import {
  CocktailContainer,
  HomepageContainer,
  PromotionContainer,
  HomepageTitle,
  LogoContainer,
  LogoImage,
} from "./styles";

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <HomepageContainer>
      <LogoContainer>
        <LogoImage source={require("../../img/Logo.png")}></LogoImage>
      </LogoContainer>
      <CocktailContainer>
        <HomepageTitle>Popular Cocktails</HomepageTitle>
        <Card></Card>
      </CocktailContainer>
      <PromotionContainer>
        <Promotion></Promotion>
      </PromotionContainer>
    </HomepageContainer>
  );
};

export default Home;
