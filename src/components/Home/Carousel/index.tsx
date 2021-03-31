import React, { useState } from 'react';
import { Dimensions } from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';

import { useTheme } from 'styled-components';

import HappyHourPromotionCard from '../PromotionCards/Countdown';
import DiscountPromotionCard from '../PromotionCards/TabDiscount';

import ImagePromotion from '../PromotionCards/Billboard';

import type { Promotion } from '../../../types/Promotion';

import { CarouselContainer, Container, Space } from './styles';

interface CarouselPromoProps {
  promotions: Promotion[];
}

const sliderWidth = Dimensions.get('window').width;

const CarouselPromo: React.FunctionComponent<CarouselPromoProps> = ({ promotions }) => {
  const theme = useTheme();
  const [activeSlide, setActiveSlide] = useState(0);

  const promotionsItems = promotions.filter((item) => {
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

  const pagination = () => {
    return (
      <Pagination
        activeDotIndex={activeSlide}
        containerStyle={{ backgroundColor: 'transparent', paddingTop: 16, paddingBottom: 16 }}
        dotStyle={{
          width: 50,
          height: 5,
          borderRadius: 5,
          backgroundColor: theme.colors.active,
        }}
        dotsLength={promotionsItems.length}
        inactiveDotOpacity={0.4}
        inactiveDotScale={1}
        inactiveDotStyle={{
          backgroundColor: theme.colors.inactive,
        }}
      />
    );
  };

  const renderItem = ({ item }: { item: Promotion }) => {
    if (item.type === 'discount') {
      return (
        <Container>
          <DiscountPromotionCard item={item} />
        </Container>
      );
    }

    if (item.type === 'countdown') {
      return (
        <Container>
          <HappyHourPromotionCard item={item} />
        </Container>
      );
    }

    return (
      <Container>
        <ImagePromotion image={item.image} />
      </Container>
    );
  };

  const setIndex = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <CarouselContainer>
      <Carousel
        data={promotionsItems}
        itemWidth={sliderWidth}
        onSnapToItem={setIndex}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
      />
      {promotionsItems.length > 1 ? pagination() : <Space />}
    </CarouselContainer>
  );
};

export default CarouselPromo;
