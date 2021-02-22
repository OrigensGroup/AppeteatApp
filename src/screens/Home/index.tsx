import React from 'react';

import Promotion from '../../components/Home/Promotion';

import Location from '../../components/Home/Location';
import Card from '../../components/Home/Card';
import Reservation from '../../components/Home/Reservation';

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
} from './styles';

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <HomepageContainer>
      <LogoContainer>
        <LogoImage source={require('../../img/Logo.png')} />
      </LogoContainer>
      <HomepageTitle>Popular Cocktails</HomepageTitle>
      <CocktailSection>
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
        <Promotion endDate={new Date('Wed Feb 10 2021 15:36:55 GMT+0000').getTime()} />
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
