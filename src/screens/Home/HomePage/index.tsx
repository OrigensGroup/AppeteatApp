import React from 'react';
import Card from '../../../components/Home/Card';


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
  MapContainer,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import CarouselPromo from '../../../components/Carousel';
import { Text } from 'react-native';
import Map from '../../../components/Map';
import Title from '../../../components/Shared/Text';

interface HomeProps {
}

const Home: React.FunctionComponent<HomeProps> = () => {

  const navigation = useNavigation();
  const navigate = () => {
    navigation.navigate("HappyHourMenu");
  };

  return (
    <HomepageContainer>
      <LogoContainer>
        <LogoImage source={require('../../../img/Logo.png')} />
      </LogoContainer>
      <CocktailSection>
        <HomepageTitle>
          <Title fontSize={20} color='#000' bold>Popular Cocktails</Title>
        </HomepageTitle>
        <CocktailContainer horizontal showsHorizontalScrollIndicator={false}>
          <Card description="Description" title="Mojito" />
          <Card description="Description" title="Daiquiri" />
          <Card description="Description" title="Negroni" />
        </CocktailContainer>
      </CocktailSection>
      <CarouselPromo />
      <BottomContainer>
        <MapContainer>
    <Map />
    </MapContainer>
      </BottomContainer>
    </HomepageContainer>
  );
};

export default Home;
