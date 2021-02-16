import React from 'react';
import { Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { styles } from '../../Homepage/Promotion/styles';
import MenuCard from '../MenuCards';

import {
  Wrapper,
} from './styles';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

interface SwiperProps {
}

const SwiperP1: React.FunctionComponent<SwiperProps> = () => {
  return (
    <Wrapper>
      <FlatList data={DATA} keyExtractor={({ index}) => index} renderItem={({item})=>(
        <MenuCard title={item.title} description='Exotic Drink' price='£7.5' onClick={() => console.log('Hello World')} />
   )}/>
    </Wrapper>
  );
};

export default SwiperP1;
