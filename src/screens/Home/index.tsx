import React from 'react';

import Location from '../../components/Home/Location';
import Card from '../../components/Home/Card';
import Reservation from '../../components/Home/Reservation';

import CarouselPromo from '../../components/Carousel';
import Map from '../../components/Map';

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
import { Text } from '../../components/Menu/SingleItemCard/styles';

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <HomepageContainer>
      <LogoContainer>
        <LogoImage source={require('../../img/Logo.png')} />
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
        <CarouselPromo />
      </PromotionContainer>
      <BottomContainer>
        <Text>c</Text>
      </BottomContainer>
    </HomepageContainer>
  );
};

export default Home;
