import React from 'react';

import CarouselPromo from '../../../components/Home/Carousel';

import ShowLocations from '../../../components/Home/ShowLocations';
import FeaturedItems from '../../../components/Home/FeaturedItems';
import Logo from '../../../components/shared/Logo';

import { HomeContainer } from './styles';

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <HomeContainer
      alwaysBounceVertical
      contentContainerStyle={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <Logo />
      <FeaturedItems />
      <CarouselPromo />
      <ShowLocations />
    </HomeContainer>
  );
};

export default Home;
