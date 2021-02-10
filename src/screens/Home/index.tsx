import React from "react";
import Promotion from "../../components/Homepage/Promotion";
import Card from "../../components/Homepage/Card";
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
        <Card title="Mojito" description="Description" />
      </CocktailContainer>
      <PromotionContainer>
        <Promotion
          endDate={new Date("Wed Feb 10 2021 15:36:55 GMT+0000").getTime()}
        />
      </PromotionContainer>
    </HomepageContainer>
  );
};

export default Home;
