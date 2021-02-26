import React from 'react';
import { FlatList } from 'react-native';

import MenuCard from '../MenuComponents/MenuCards';

import { Wrapper } from './styles';

const DATA = [
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
  {
    id: '4',
    title: 'First Item',
  },
  {
    id: '5',
    title: 'Second Item',
  },
  {
    id: '6',
    title: 'Third Item',
  },
];

interface SwiperProps {}

const SwiperP1: React.FunctionComponent<SwiperProps> = () => {
  return (
    <Wrapper>
      <FlatList
        data={DATA}
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item }) => (
          <MenuCard
            description="Exotic Drink"
            onClick={() => console.log('Hello World')}
            price="£7.5"
            title={item.title}
          />
        )}
      />
    </Wrapper>
  );
};

export default SwiperP1;
