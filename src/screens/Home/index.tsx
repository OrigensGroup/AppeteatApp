import React from "react";

import Promotion from "../../components/Homepage/Promotion";

import Location from "../../components/Homepage/Location";
import Card from "../../components/Homepage/Card";
import Reservation from "../../components/Homepage/Reservation";

import {
  CocktailContainer,
  HomepageContainer,
  PromotionContainer,
  HomepageTitle,
  LogoContainer,
  LogoImage,
  BottomContainer,
  CocktailSection,
  ReservationContainer,
  LocationContainer,
} from "./styles";

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <HomepageContainer>
      <LogoContainer>
        <LogoImage source={require("../../img/Logo.png")} />
      </LogoContainer>
      <CocktailSection>
        <HomepageTitle>Popular Cocktails</HomepageTitle>
        <CocktailContainer horizontal showsHorizontalScrollIndicator={false}>
          <Card description="Description" title="Mojito" />
          <Card description="Description" title="Daiquiri" />
          <Card description="Description" title="Negroni" />
        </CocktailContainer>
      </CocktailSection>
      <PromotionContainer>
        <Promotion
          endDate={new Date("Wed Feb 10 2021 15:36:55 GMT+0000").getTime()}
        />
      </PromotionContainer>
      <BottomContainer>
        <ReservationContainer>
          <Reservation />
        </ReservationContainer>
        <LocationContainer>
          <Location />
        </LocationContainer>
      </BottomContainer>
    </HomepageContainer>
  );
};

export default Home;
