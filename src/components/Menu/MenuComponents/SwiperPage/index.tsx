import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

import { MenuItem } from '../../../../types/MenuItem';
import MenuCard from '../MenuCards';

import { Wrapper } from './styles';

interface SwiperProps {
  menuItems: MenuItem[];
}

const SwiperPage: React.FunctionComponent<SwiperProps> = ({ menuItems }) => {
  return (
    <Wrapper>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MenuCard item={item} onClick={() => console.log('Hello World')} />}
      />
    </Wrapper>
  );
};

export default SwiperPage;
