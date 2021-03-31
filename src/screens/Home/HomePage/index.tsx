import React from 'react';

import { FlatList } from 'react-native';

import CarouselPromo from '../../../components/Home/Carousel';
import ShowLocations from '../../../components/Home/ShowLocations';
import FeaturedItems from '../../../components/Home/FeaturedItems';

import ImagePromotion from '../../../components/Home/PromotionCards/Billboard';
import DiscountPromotionCard from '../../../components/Home/PromotionCards/TabDiscount';
import HappyHourPromotionCard from '../../../components/Home/PromotionCards/Countdown';

import Logo from '../../../components/shared/Logo';

import type { HomepageComponent } from '../../../types/HomepageComponent';
import type { Promotion } from '../../../types/Promotion';

import useHomepage from '../../../hooks/useHomepage';

import { HomeContainer, SafeArea, ComponentContainer } from './styles';

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  const [homepage] = useHomepage();

  const filteredSections = homepage.sections.filter((item) => {
    if (item.type === 'countdown') {
      const end = Date.parse(item.endDate);
      const now = Date.parse(item.startDate);

      const startDate = new Date(item.startDate);
      // Get today's date
      const todaysDate = new Date();

      // call setHours to take the time out of the comparison
      if (startDate.setHours(0, 0, 0, 0) !== todaysDate.setHours(0, 0, 0, 0)) {
        return false;
      }

      if (end < now) {
        return false;
      }
    }

    return true;
  });

  const renderHomepageComponent = ({ item }: { item: HomepageComponent | Promotion }) => {
    if (item.type === 'ShowLocations') {
      return (
        <ComponentContainer>
          <ShowLocations />
        </ComponentContainer>
      );
    }

    if (item.type === 'FeaturedItems') {
      return <FeaturedItems {...item} />;
    }

    if (item.type === 'CarouselPromo') {
      return <CarouselPromo {...item} />;
    }

    if (item.type === 'billboard') {
      return (
        <ComponentContainer>
          <ImagePromotion image={item.image} />
        </ComponentContainer>
      );
    }

    if (item.type === 'discount') {
      return (
        <ComponentContainer>
          <DiscountPromotionCard item={item} />
        </ComponentContainer>
      );
    }

    if (item.type === 'countdown') {
      return (
        <ComponentContainer>
          <HappyHourPromotionCard item={item} />
        </ComponentContainer>
      );
    }

    return <></>;
  };

  return (
    <SafeArea>
      <HomeContainer>
        <Logo />
        <FlatList
          contentContainerStyle={{ paddingTop: 16 }}
          data={filteredSections}
          keyExtractor={(item, index) => `${item.type}-${index}`}
          renderItem={renderHomepageComponent}
        />
      </HomeContainer>
    </SafeArea>
  );
};

export default Home;
