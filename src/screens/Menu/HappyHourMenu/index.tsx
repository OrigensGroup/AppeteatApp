import React, { useCallback, useRef, useState } from 'react';
import Swiper from 'react-native-swiper';
import Promotion from '../../../components/Home/PromotionCards/HappyHourPromotionCard';
import { useNavigation } from '@react-navigation/native';
import QrCode from '../../../components/Menu/MenuComponents/QrCode';
import menuTranslations from '../../../translations/menu';

const HAPPYHOUR_DATA: any = {
  Drinks: [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Mojito',
      shortDescription: 'nonono',
      price: '£7.5',
      longDescription: 'Hello World!',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      shortDescription: 'nonono',
      price: '£2.5',
      longDescription:
        'The mojito is the epitome of the refreshing cocktail, stripped down to just the bare essentials of rum, lime juice, sugar, soda water, and mint. Each ingredient is seemingly specifically selected to cure hot weather-induced pangs of thirst — it is in turns sweet, acidic, minty, and sparkling.',
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
      title: 'SecondToLast Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Last Item',
      price: '£7.5',
    },
  ],
  Burgers: [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item 1',
      price: '£7.5',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item 1',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item 1',
    },
  ],
};

import { MainWrapper, BottomContainer, CardsContainer, TopContainer, ButtonsWrapper } from './styles';

import SwiperP1 from '../../../components/Menu/MenuComponents/SwiperP1';
import CloseButton from '../../../components/Menu/MenuComponents/CloseButton';
import HeartButton from '../../../components/Menu/MenuComponents/HeartButton';

interface HappyHourMenuProps {}

const HappyHourMenu: React.FunctionComponent<HappyHourMenuProps> = () => {
  const ref = useRef<Swiper | null>(null);
  const [menuIndex, setMenuIndex] = useState(0);

  const onSwipe = (index: number) => {
    if (ref.current && index !== menuIndex) {
      ref.current.scrollBy(index - menuIndex, true);
    }
    setMenuIndex(index);
  };

  const happyhourTabsContent = useCallback(
    () => Object.keys(HAPPYHOUR_DATA).map((item) => <SwiperP1 key={item} menuItems={HAPPYHOUR_DATA[item]} />),
    [HAPPYHOUR_DATA]
  );

  const navigation = useNavigation();

  const navigate = () => {
    navigation.navigate('HomePage');
  };

  return (
    <MainWrapper>
      <TopContainer>
        <ButtonsWrapper>
          <CloseButton onClick={navigate} />
          <HeartButton onClick={() => console.log('hello world')} />
        </ButtonsWrapper>
        <Promotion endDate={new Date('Wed Feb 10 2021 15:36:55 GMT+0000').getTime()} />
      </TopContainer>
      <BottomContainer>
        <CardsContainer>
          <Swiper loop={false} onIndexChanged={onSwipe} ref={ref} showsPagination={false}>
            {happyhourTabsContent()}
          </Swiper>
        </CardsContainer>
      </BottomContainer>
    </MainWrapper>
  );
};

export default HappyHourMenu;
