import React, { useState } from 'react';
import { Dimensions } from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';

import { useTheme } from 'styled-components';

import HappyHourPromotionCard from '../PromotionCards/HappyHourPromotionCard';
import DiscountPromotionCard from '../PromotionCards/DiscountPromotionCard';

import ImagePromotion from '../PromotionCards/ImagePromotion';

import { Promotion } from '../../../types/Promotion';

import { CarouselContainer, Container } from './styles';

interface CarouselPromoProps {
  promotions: Promotion[];
}

const sliderWidth = Dimensions.get('window').width;

const CarouselPromo: React.FunctionComponent<CarouselPromoProps> = ({ promotions }) => {
  const theme = useTheme();
  const [activeSlide, setActiveSlide] = useState(0);

  const promotionsItems = promotions.filter((item) => {
    if (item.endDate) {
      const end = Date.parse(item.endDate);
      const now = Date.parse(item.startDate);

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
        containerStyle={{ backgroundColor: 'transparent', paddingTop: 16, paddingBottom: 8 }}
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
      {pagination()}
    </CarouselContainer>
  );
};

export default CarouselPromo;
