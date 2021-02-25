import React, { useRef, useState } from 'react';
import Swiper from 'react-native-swiper';
import Promotion from '../../../components/Home/Promotion';

import { MainWrapper, BottomContainer, CardsContainer, TopContainer } from './styles';

import useMenu from '../../../hooks/useMenu';
import { FlatList } from 'react-native';
import { MenuItem } from '../../../types/MenuItem';
import MenuCard from '../../../components/Menu/MenuComponents/MenuCards';

interface HappyHourMenuProps {}

const HappyHourMenu: React.FunctionComponent<HappyHourMenuProps> = () => {
  const { menu } = useMenu();

  const happyhourItems = menu.items.filter((item) => item.promoted);

  const flatlistRender = ({ item }: { item: MenuItem }) => <MenuCard item={item} onClick={() => console.log('test')} />;

  return (
    <MainWrapper>
      <TopContainer>
        <Promotion endDate={new Date('Wed Feb 10 2021 15:36:55 GMT+0000').getTime()} />
      </TopContainer>
      <BottomContainer>
        <CardsContainer>
          <FlatList data={happyhourItems} renderItem={flatlistRender} />
        </CardsContainer>
      </BottomContainer>
    </MainWrapper>
  );
};

export default HappyHourMenu;
