import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { FlatList } from 'react-native';

import HappyHourPromotionCard from '../../../components/Home/HappyHourPromotionCard';

import Location from '../../../components/Home/Location';
import PromotionCard from '../../../components/Home/PromotionCard';
import Reservation from '../../../components/Home/Reservation';

import useMenu from '../../../hooks/useMenu';

import { MenuItem } from '../../../types/MenuItem';

import Text from '../../../components/Shared/Text';

import {
  HomeContainer,
  HomeLogoContainer,
  HomeSection,
  LogoImage,
  MarketingSection,
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

  const flatlistItem = ({ item }: { item: MenuItem }) => <PromotionCard item={item} />;

  return (
    <HomeContainer>
      <HomeLogoContainer>
        <LogoImage source={require('../../../img/Logo.png')} />
      </HomeLogoContainer>
      <HomeSection>
        <Text fontSize={20} color="#000000">
          Popular Cocktails
        </Text>
        <FlatList data={promotedItems} horizontal renderItem={flatlistItem} showsHorizontalScrollIndicator={false} />
      </HomeSection>
      <HomeSection>
        <HappyHourPromotionCard endDate={new Date('Wed Feb 10 2021 15:36:55 GMT+0000').getTime()} onClick={navigate} />
      </HomeSection>
      <HomeSection>
        <MarketingSection>
          <ReservationContainer>
            <Reservation />
          </ReservationContainer>
          <LocationContainer>
            <Location />
          </LocationContainer>
        </MarketingSection>
      </HomeSection>
    </HomeContainer>
  );
};

export default Home;
