import React from "react";
import Promotion from "../../components/Homepage/Promotion";

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
import Location from "../../components/Homepage/Location";
import Card from "../../components/Homepage/Card";
import Reservation from "../../components/Homepage/Reservation";

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <HomepageContainer>
      <LogoContainer>
        <LogoImage source={require("../../img/Logo.png")}></LogoImage>
      </LogoContainer>
      <CocktailSection>
        <HomepageTitle>Popular Cocktails</HomepageTitle>
        <CocktailContainer
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <Card title="Mojito" description="Description" />
          <Card title="Daiquiri" description="Description" />
          <Card title="Negroni" description="Description" />
        </CocktailContainer>
      </CocktailSection>
      <PromotionContainer>
        <Promotion
          endDate={new Date("Wed Feb 10 2021 15:36:55 GMT+0000").getTime()}
        />
      </PromotionContainer>
      <BottomContainer>
        <ReservationContainer>
          <Reservation></Reservation>
        </ReservationContainer>
        <LocationContainer>
          <Location></Location>
        </LocationContainer>
      </BottomContainer>
    </HomepageContainer>
  );
};

export default Home;
