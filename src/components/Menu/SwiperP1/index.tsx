import React from 'react';
import { Text } from 'react-native';
import { styles } from '../../Homepage/Promotion/styles';
import MenuCard from '../MenuCards';

import {
  Wrapper,
} from './styles';

interface SwiperProps {
}

const SwiperP1: React.FunctionComponent<SwiperProps> = () => {
  return (
    <Wrapper>
      <MenuCard title='Mojito' description='Exotic Drink' price='£7.5' onClick={console.log('HelloWorld')}></MenuCard>
      <MenuCard title='Mojito' description='Exotic Drink' price='£7.5' onClick={console.log('HelloWorld')}></MenuCard>
      <MenuCard title='Mojito' description='Exotic Drink' price='£7.5' onClick={console.log('HelloWorld')}></MenuCard>
      <MenuCard title='Mojito' description='Exotic Drink' price='£7.5' onClick={console.log('HelloWorld')}></MenuCard>
      <MenuCard title='Mojito' description='Exotic Drink' price='£7.5' onClick={console.log('HelloWorld')}></MenuCard>
      <MenuCard title='Mojito' description='Exotic Drink' price='£7.5' onClick={console.log('HelloWorld')}></MenuCard>
      <MenuCard title='Mojito' description='Exotic Drink' price='£7.5' onClick={console.log('HelloWorld')}></MenuCard>
      <MenuCard title='Mojito' description='Exotic Drink' price='£7.5' onClick={console.log('HelloWorld')}></MenuCard>
      <MenuCard title='Mojito' description='Exotic Drink' price='£7.5' onClick={console.log('HelloWorld')}></MenuCard>
      <MenuCard title='Mojito' description='Exotic Drink' price='£7.5' onClick={console.log('HelloWorld')}></MenuCard>
      <MenuCard title='Mojito' description='Exotic Drink' price='£7.5' onClick={console.log('HelloWorld')}></MenuCard>
      <MenuCard title='Mojito' description='Exotic Drink' price='£7.5' onClick={console.log('HelloWorld')}></MenuCard>
      <MenuCard title='Mojito' description='Exotic Drink' price='£7.5' onClick={console.log('HelloWorld')}></MenuCard>
      <MenuCard title='Mojito' description='Exotic Drink' price='£7.5' onClick={console.log('HelloWorld')}></MenuCard>
      <MenuCard title='Mojito' description='Exotic Drink' price='£7.5' onClick={console.log('HelloWorld')}></MenuCard>
    </Wrapper>
  );
};

export default SwiperP1;
