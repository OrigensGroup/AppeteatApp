import React, { useState } from 'react';
import { Dimensions } from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';

import HappyHourPromotionCard from '../PromotionCards/HappyHourPromotionCard';
import DiscountPromotionCard from '../PromotionCards/DiscountPromotionCard';

import { CarouselContainer, Container } from './styles';
import { useTheme } from 'styled-components';

interface CarouselPromoProps {}

const sliderWidth = Dimensions.get('window').width;

const DATA: any[] = [
  {
    id: '17',
    title: 'First Item',
    type: 'image',
  },
  {
    id: '8',
    description: 'Discount on all selected drinks!',
    title: '15% off all drink!',
    image:
      'https://www.liquor.com/thmb/WjB8S0yKOpreI1-WHrcdWToVAN8=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/neighborhood-negroni-720x720-primary-727f7dc3a5d04a298d63977679efe856.jpg',
    type: 'discount',
  },
  {
    id: '9',
    title: 'Third Item',
    type: 'happyhour',
  },
];

const CarouselPromo: React.FunctionComponent<CarouselPromoProps> = ({}) => {
  const theme = useTheme();
  const [activeSlide, setActiveSlide] = useState(0);

  const pagination = () => {
    return (
      <Pagination
        activeDotIndex={activeSlide}
        containerStyle={{ backgroundColor: 'transparent', paddingVertical: 15 }}
        dotStyle={{
          width: 50,
          height: 5,
          borderRadius: 5,
          backgroundColor: theme.colors.active,
        }}
        dotsLength={DATA.length}
        inactiveDotOpacity={0.4}
        inactiveDotScale={1}
        inactiveDotStyle={{
          backgroundColor: theme.colors.inactive,
        }}
      />
    );
  };

  const renderItem = ({ item }: { item: any }) => {
    if (item.type === 'discount') {
      return (
        <Container>
          <DiscountPromotionCard item={item} />
        </Container>
      );
    }

    if (item.type === 'image') {
      return (
        <Container>
          <HappyHourPromotionCard endDate={new Date().getTime()} />
        </Container>
      );
    } else {
      return (
        <Container>
          <HappyHourPromotionCard endDate={new Date().getTime()} />
        </Container>
      );
    }
  };

  const setIndex = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <CarouselContainer>
      <Carousel
        data={DATA}
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
