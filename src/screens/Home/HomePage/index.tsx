import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { FlatList } from 'react-native';
import PromotionCard from '../../../components/Home/PromotionItemCard';
import useMenu from '../../../hooks/useMenu';

import { MenuItem } from '../../../types/MenuItem';

import Text from '../../../components/Shared/Text';

import {
  HomeContainer,
  HomeLogoContainer,
  HomeSection,
  HomeLogoImage,
  BottomContainer,
  MapContainer,
  FindButton,
} from './styles';
import CarouselPromo from '../../../components/Home/Carousel';
import Map from '../../../components/Map';
import homeTranslations from '../../../translations/home';

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
        <HomeLogoImage source={require('../../../img/Logo.png')} />
      </HomeLogoContainer>
      <HomeSection>
        <Text fontSize={20} color="primary">
          {homeTranslations.homepageScreen.popularItems.title}
        </Text>
        <FlatList data={promotedItems} horizontal renderItem={flatlistItem} showsHorizontalScrollIndicator={false} />
      </HomeSection>
      <CarouselPromo />
      <BottomContainer>
        <MapContainer onPress={() => navigation.navigate('LocationsList')}>
          <Map />
          <FindButton>
            <Text fontSize={18} color="primary">
              Find us!
            </Text>
          </FindButton>
        </MapContainer>
      </BottomContainer>
    </HomeContainer>
  );
};

export default Home;
