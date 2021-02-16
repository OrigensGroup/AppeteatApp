import React from 'react';
import { Text } from 'react-native';
import Swiper from 'react-native-swiper';
import { styles } from '../../Homepage/Promotion/styles';

import {
  Wrapper,
  Page1,
  Page2,
  Page3,
} from './styles';

interface SwiperProps {
  placeholder?: string;
  textContentType: 'name' | 'none';
}

const MenuSwiper: React.FunctionComponent<SwiperProps> = () => {
  return (
    <Swiper showsButtons={true} loop={false}>
      <Page1>

      </Page1>
      <Page2>
        <Text>GG</Text>
        </Page2>
      <Page3>
      <Text>How you doin'?</Text>
      </Page3>
    </Swiper>
  );
};

export default MenuSwiper;
