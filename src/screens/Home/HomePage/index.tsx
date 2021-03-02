import React from 'react';

import CarouselPromo from '../../../components/Home/Carousel';

import { HomeContainer } from './styles';
import ShowLocations from '../../../components/Home/ShowLocations';
import FeaturedItems from '../../../components/Home/FeaturedItems';
import Logo from '../../../components/Home/Logo';

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <HomeContainer
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ display: 'flex', justifyContent: 'center', height: '100%' }}
    >
      <Logo />
      <FeaturedItems />
      <CarouselPromo />
      <ShowLocations />
    </HomeContainer>
  );
};

export default Home;
