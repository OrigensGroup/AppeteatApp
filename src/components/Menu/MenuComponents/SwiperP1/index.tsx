import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

import MenuCard from '../MenuCards';

import { Wrapper } from './styles';

interface SwiperProps {
  menuItems: any;
}

const SwiperP1: React.FunctionComponent<SwiperProps> = ({ menuItems }) => {
  return (
    <Wrapper>
      <FlatList
        data={menuItems}
        keyExtractor={({ index }) => index}
        renderItem={({ item }) => (
          <MenuCard
            description="Exotic Drink"
            onClick={() => console.log('Hello World')}
            price={item.price}
            title={item.title}
          />
        )}
      />
    </Wrapper>
  );
};

export default SwiperP1;
