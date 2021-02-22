import React, { useState } from 'react';
import { Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Carousel, { Pagination } from 'react-native-snap-carousel';

import Promotion from '../Home/Promotion';
import Promotion2 from '../Home/Promotion2';

import { CarouselContainer, Container } from './styles';

interface CarouselPromoProps {}
type Item = {
  id: string;
  title: string;
  type: 'image' | 'discount' | 'happyhour';
};
const sliderWidth = Dimensions.get('window').width;

const DATA: Item[] = [
  {
    id: '17',
    title: 'First Item',
    type: 'image',
  },
  {
    id: '8',
    title: 'Second Item',
    type: 'discount',
  },
  {
    id: '9',
    title: 'Third Item',
    type: 'happyhour',
  },
];

const CarouselPromo: React.FunctionComponent<CarouselPromoProps> = ({}) => {
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
          backgroundColor: '#EE6F00',
        }}
        dotsLength={DATA.length}
        inactiveDotOpacity={0.4}
        inactiveDotScale={1}
        inactiveDotStyle={{
          backgroundColor: '#9D9891',
        }}
      />
    );
  };

  const renderItem = ({ item }: { item: Item }) => {
    if (item.type === 'discount') {
      return (
        <Container>
          <Promotion2 description="Discount on all selected drinks!" title="15% off all drink!" />
        </Container>
      );
    }

    if (item.type === 'image') {
      return (
        <Container>
          <Promotion endDate={new Date().getTime()} />
        </Container>
      );
    } else {
      return (
        <Container>
          <Promotion endDate={new Date().getTime()} />
        </Container>
      );
    }
  };

  return (
    <CarouselContainer>
      <Carousel
        data={DATA}
        itemWidth={sliderWidth}
        onSnapToItem={(index) => setActiveSlide(index)}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
      />
      {pagination()}
    </CarouselContainer>
  );
};

export default CarouselPromo;
