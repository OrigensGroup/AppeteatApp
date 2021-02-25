import React, { useCallback, useRef, useState } from 'react';

import Swiper from 'react-native-swiper';

import { useNavigation } from '@react-navigation/native';

import SearchBar from '../../../components/Menu/MenuComponents/SearchBar';
import menuTranslations from '../../../translations/menu';
import Filter from '../../../components/Menu/MenuComponents/FilterButton';
import QrCode from '../../../components/Menu/MenuComponents/QrCode';
import SwiperP1 from '../../../components/Menu/MenuComponents/SwiperP1';
import MenuTabs from '../../../components/Menu/MenuComponents/MenuTabs';
import ViewBasketButton from '../../../components/Menu/MenuComponents/ViewBasketButton';

import CloseButton from '../../../components/Menu/MenuComponents/CloseButton';

import {
  MenuWrapper,
  TopBarWrapper,
  LogoContainer,
  LogoImage,
  SearchBarWrapper,
  SwiperWrapper,
  SwiperWrapper2,
  TopContainer,
  BasketButtonWrapper,
} from './styles';
import FilterModal from '../../../components/Menu/MenuComponents/FilterModal';

const MENU_DATA: any = {
  Drinks: [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Mojito',
      shortDescription: 'nonono',
      price: 7.5,
      longDescription: 'Hello World!',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      shortDescription: 'nonono',
      price: 7.5,
      longDescription:
        'The mojito is the epitome of the refreshing cocktail, stripped down to just the bare essentials of rum, lime juice, sugar, soda water, and mint. Each ingredient is seemingly specifically selected to cure hot weather-induced pangs of thirst — it is in turns sweet, acidic, minty, and sparkling.',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      price: 7.5,
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      price: 7.5,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'SecondToLast Item',
      price: 7.5,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Last Item',
      price: 7.5,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      price: 7.5,
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      price: 7.5,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'SecondToLast Item',
      price: 7.5,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Last Item',
      price: 7.5,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      price: 7.5,
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      price: 7.5,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'SecondToLast Item',
      price: 7.5,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Last Item Test',
      price: 7.5,
    },
  ],
  Burgers: [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item 1',
      price: 7.5,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item 1',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item 1',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item 1',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item 1',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item 1',
      price: 7.5,
    },
  ],
  Pizza: [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item 2',
      price: 7.5,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item 2',
      shortDescription: 'Nonoono',
      longDescription: 'Nonoono',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item 2',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item 2',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item 2',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item 2',
      price: 7.5,
    },
  ],
  Dessert: [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item 2',
      price: 7.5,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item 2',
    },
  ],
  DDD: [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item 2',
      price: 7.5,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item 2',
    },
  ],
  PV: [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item 2',
      price: 7.5,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item 2',
    },
  ],
  LL: [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item 2',
      price: 7.5,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item 2',
    },
  ],
  AA: [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item 2',
      price: 7.5,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item 2',
    },
  ],
};

interface MenuProps { }

const Menu: React.FunctionComponent<MenuProps> = () => {
  const ref = useRef<Swiper | null>(null);
  const navigation = useNavigation();
  const [menuIndex, setMenuIndex] = useState(0);

  const onSwipe = (index: number) => {
    if (ref.current && index !== menuIndex) {
      ref.current.scrollBy(index - menuIndex, true);
    }

    setMenuIndex(index);
  };

  const navigate = () => {
    navigation.navigate('Cart');
  };

  const menuTabsContent = useCallback(
    () => Object.keys(MENU_DATA).map((item) => <SwiperP1 key={item} menuItems={MENU_DATA[item]} />),
    [MENU_DATA]
  );

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <MenuWrapper>
      <TopContainer>
        <TopBarWrapper>
          <LogoContainer>
            <LogoImage source={require('../../../img/Logo.png')} />
          </LogoContainer>
          <QrCode onClick={() => console.log('Hello World!')} title={menuTranslations.qrField.placeholder} />
        </TopBarWrapper>
        <FilterModal isModalVisible={isModalVisible} onClose={closeModal} />
        <SearchBarWrapper>
          <SearchBar
            onClick={() => console.log('Hello World!')}
            placeholder={menuTranslations.searchField.placeholder}
            textContentType="name"
          />
          <Filter onClick={toggleModal} />
        </SearchBarWrapper>
        <MenuTabs menuTabs={Object.keys(MENU_DATA)} onChange={onSwipe} tabActive={menuIndex} />
      </TopContainer>
      <Swiper loop={false} onIndexChanged={onSwipe} ref={ref} showsPagination={false}>
        {menuTabsContent()}
      </Swiper>
      <BasketButtonWrapper>
        <ViewBasketButton onClick={navigate} />
      </BasketButtonWrapper>
    </MenuWrapper>
  );
};

export default Menu;
