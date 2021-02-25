import React from 'react';

import { useNavigation } from '@react-navigation/native';

import Promotion from '../../../components/Home/Promotion';

import Location from '../../../components/Home/Location';
import Card from '../../../components/Home/Card';
import Reservation from '../../../components/Home/Reservation';

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
  const navigation = useNavigation();

  const navigate = () => {
    navigation.navigate('HappyHourMenu');
  };

  return (
    <HomepageContainer>
      <LogoContainer>
        <LogoImage source={require('../../../img/Logo.png')} />
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
        <Promotion endDate={new Date('Wed Feb 10 2021 15:36:55 GMT+0000').getTime()} onClick={navigate} />
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
