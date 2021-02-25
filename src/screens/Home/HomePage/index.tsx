import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { FlatList } from 'react-native';

import Promotion from '../../../components/Home/Promotion';

import Location from '../../../components/Home/Location';
import Card from '../../../components/Home/Card';
import Reservation from '../../../components/Home/Reservation';

import useMenu from '../../../hooks/useMenu';

import { MenuItem } from '../../../types/MenuItem';

import {
  HomepageContainer,
  PromotionContainer,
  HomepageTitle,
  LogoContainer,
  LogoImage,
  BottomContainer,
  CocktailSection,
  ReservationContainer,
  LocationContainer,
} from './styles';

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  const navigation = useNavigation();
  const { menu } = useMenu();

  const promotedItems = menu.items.filter((menuItem) => menuItem.promoted);

  const navigate = () => {
    navigation.navigate('HappyHourMenu');
  };

  const flatlistItem = ({ item }: { item: MenuItem }) => <Card item={item} />;

  return (
    <HomepageContainer>
      <LogoContainer>
        <LogoImage source={require('../../../img/Logo.png')} />
      </LogoContainer>
      <CocktailSection>
        <HomepageTitle>Popular Cocktails</HomepageTitle>
        <FlatList data={promotedItems} horizontal renderItem={flatlistItem} showsHorizontalScrollIndicator={false} />
      </CocktailSection>
      <PromotionContainer>
        <Promotion endDate={new Date('Wed Feb 10 2021 15:36:55 GMT+0000').getTime()} onClick={navigate} />
      </PromotionContainer>
      <BottomContainer>
        <ReservationContainer>
          <Reservation />
        </ReservationContainer>
        <LocationContainer>
          <Location />
        </LocationContainer>
      </BottomContainer>
    </HomepageContainer>
  );
};

export default Home;
