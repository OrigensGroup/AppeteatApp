import React, { useCallback, useRef, useState } from "react";
import SearchBar from "../../../components/Menu/MenuComponents/SearchBar";
import menuTranslations from '../../../translations/menu';
import Filter from '../../../components/Menu/MenuComponents/Filter';
import QrCode from '../../../components/Menu/MenuComponents/QrCode';
import Swiper from 'react-native-swiper';
import SwiperP1 from '../../../components/Menu/MenuComponents/SwiperP1'
import MenuTabs from "../../../components/Menu/MenuComponents/MenuTabs";
import ViewBasketButton from "../../../components/Menu/MenuComponents/ViewBasketButton"

import {
  MenuWrapper,
  TopBarWrapper,
  CardsContainer,
  LogoContainer,
  LogoImage,
  SearchBarWrapper,
  SwiperWrapper,
  SwiperWrapper2,
  TopContainer,
  BottomContainer,
  BasketButtonWrapper,
} from "./styles";



const MENU_DATA: any = {
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
      longDescription: 'The mojito is the epitome of the refreshing cocktail, stripped down to just the bare essentials of rum, lime juice, sugar, soda water, and mint. Each ingredient is seemingly specifically selected to cure hot weather-induced pangs of thirst — it is in turns sweet, acidic, minty, and sparkling.',
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
      price: '£7.5',
    },
  ],
  Pizza: [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item 2',
      price: '£7.5',
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
      price: '£7.5',
    },
  ],
  Dessert: [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item 2',
      price: '£7.5',
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
      price: '£7.5',
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
      price: '£7.5',
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
      price: '£7.5',
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
      price: '£7.5',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item 2',
    },
  ],
}


interface MenuProps { }

const Menu: React.FunctionComponent<MenuProps> = () => {
  const ref = useRef<Swiper | null>(null);
  const [menuIndex, setMenuIndex] = useState(0);

  const onSwipe = (index: number) => {
    if (ref.current && index !== menuIndex) {
      ref.current.scrollBy(index - menuIndex, true);
    }
    setMenuIndex(index);
  }

  const menuTabsContent = useCallback(() =>
    Object.keys(MENU_DATA).map((item) => <SwiperP1 key={item} menuItems={MENU_DATA[item]} />)
    , [MENU_DATA]);

  return (
    <MenuWrapper>
      <TopContainer>
        <TopBarWrapper>
          <LogoContainer>
            <LogoImage source={require("../../../img/Logo.png")}></LogoImage>
          </LogoContainer>
          <QrCode onClick={() => console.log('Hello World!')} title={menuTranslations.qrField.placeholder}></QrCode>
        </TopBarWrapper>
        <SearchBarWrapper>
          <SearchBar
            placeholder={menuTranslations.searchField.placeholder}
            textContentType='name'
            onClick={() => console.log('Hello World!')} />
          <Filter onClick={() => console.log('Hello World!')}></Filter>
        </SearchBarWrapper>
        <MenuTabs menuTabs={Object.keys(MENU_DATA)} tabActive={menuIndex} onChange={onSwipe} />
      </TopContainer>
      <BottomContainer>
        <CardsContainer>
          <Swiper ref={ref} loop={false} showsPagination={false} onIndexChanged={onSwipe}>
            {menuTabsContent()}
          </Swiper>
        </CardsContainer>
      </BottomContainer>
      <BasketButtonWrapper>
        <ViewBasketButton onClick={() => console.log("Hello")}></ViewBasketButton>
      </BasketButtonWrapper>
    </MenuWrapper>
  );
};

export default Menu;


