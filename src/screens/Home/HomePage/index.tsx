import React from 'react';

import { FlatList } from 'react-native';

import CarouselPromo from '../../../components/Home/Carousel';

import ShowLocations from '../../../components/Home/ShowLocations';
import FeaturedItems from '../../../components/Home/FeaturedItems';
import Logo from '../../../components/shared/Logo';

import useLocations from '../../../hooks/useLocations';
import { HomepageComponent } from '../../../types/HomepageComponent';

import { HomeContainer, SafeArea } from './styles';

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  const { homepage } = useLocations();

  const renderHomepageComponent = ({ item }: { item: HomepageComponent }) => {
    if (item.type === 'ShowLocations') {
      return <ShowLocations />;
    }

    if (item.type === 'FeaturedItems') {
      return <FeaturedItems promotedItems={item.promotedItems} title={item.title} />;
    }

    if (item.type === 'CarouselPromo') {
      return <CarouselPromo promotions={item.promotions} />;
    }

    return <></>;
  };

  return (
    <SafeArea>
      <HomeContainer>
        <Logo />
        <FlatList data={homepage.sections} renderItem={renderHomepageComponent} />
      </HomeContainer>
    </SafeArea>
  );
};

export default Home;
