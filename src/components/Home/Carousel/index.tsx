import React, { useState } from 'react';
import { Dimensions } from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';

import { useTheme } from 'styled-components';

import HappyHourPromotionCard from '../PromotionCards/HappyHourPromotionCard';
import DiscountPromotionCard from '../PromotionCards/DiscountPromotionCard';

import ImagePromotion from '../PromotionCards/ImagePromotion';

import { Promotion } from '../../../types/Promotion';
import useMenu from '../../../hooks/useMenu';

import { CarouselContainer, Container } from './styles';

interface CarouselPromoProps {}

const sliderWidth = Dimensions.get('window').width;

const CarouselPromo: React.FunctionComponent<CarouselPromoProps> = () => {
  const theme = useTheme();
  const [activeSlide, setActiveSlide] = useState(0);
  const { promotions } = useMenu();

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
        dotsLength={promotions.list.length}
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
        data={promotions.list}
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
