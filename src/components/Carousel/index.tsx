import React, { useState } from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { CarouselContainer } from './styles';
import { Dimensions } from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import Promotion from '../Home/Promotion';
import Promotion2 from '../Home/Promotion2';

interface CarouselPromoProps {}
type Item = {
  id: string;
  title: string;
};
const sliderWidth = Dimensions.get('window').width;
const DATA: Item[] = [
  {
    id: '7',
    title: 'First Item',
  },
  {
    id: '8',
    title: 'Second Item',
  },
  {
    id: '9',
    title: 'Third Item',
  },
  {
    id: '10',
    title: 'Third Item',
  },
];

const CarouselPromo: React.FunctionComponent<CarouselPromoProps> = ({}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const pagination = () => {
    return (
      <Pagination
        dotsLength={DATA.length}
        activeDotIndex={activeSlide}
        containerStyle={{ backgroundColor: 'transparent' }}
        dotStyle={{
          width: 40,
          height: 5,
          marginHorizontal: 8,
          backgroundColor: '#EE6F00',
        }}
        inactiveDotStyle={{
          backgroundColor: '#9D9891',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };

  const renderItem = () => <Promotion endDate={new Date().getTime()} />;
  return (
    <CarouselContainer>
      <Carousel
        data={DATA}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={sliderWidth}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      {pagination()}
    </CarouselContainer>
  );
};

export default CarouselPromo;
