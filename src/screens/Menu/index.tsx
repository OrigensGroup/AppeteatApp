import React, { useRef, useState } from 'react';

import Swiper from 'react-native-swiper';

import SearchBar from '../../components/Menu/SearchBar';
import menuTranslations from '../../translations/menu';
import Filter from '../../components/Menu/Filter';
import QrCode from '../../components/Menu/QrCode';
import SwiperP1 from '../../components/Menu/Swiper';

import MenuTabs from '../../components/Menu/MenuTabs';

import {
  MenuWrapper,
  MenuContainer,
  TopBarWrapper,
  CardsContainer,
  LogoContainer,
  LogoImage,
  SearchBarWrapper,
  SwiperWrapper,
  SwiperWrapper2,
} from './styles';

interface MenuProps {}

const Menu: React.FunctionComponent<MenuProps> = () => {
  const ref = useRef<Swiper | null>(null);
  const [menuIndex, setMenuIndex] = useState(0);

  const onSwipe = (index: number) => {
    if (ref.current && index !== menuIndex) {
      ref.current.scrollBy(index - menuIndex, true);
    }

    setMenuIndex(index);
  };

  return (
    <MenuWrapper>
      <MenuContainer>
        <TopBarWrapper>
          <LogoContainer>
            <LogoImage source={require('../../img/Logo.png')} />
          </LogoContainer>
          <QrCode onClick={() => console.log('Hello World!')} title={menuTranslations.qrField.placeholder} />
        </TopBarWrapper>
        <MenuTabs index={menuIndex} onChange={onSwipe} />
        <SearchBarWrapper>
          <Filter onClick={() => console.log('Hello World!')} />
          <SearchBar
            onClick={() => console.log('Hello World!')}
            placeholder={menuTranslations.searchField.placeholder}
            textContentType="name"
          />
        </SearchBarWrapper>
        <CardsContainer>
          <Swiper loop={false} onIndexChanged={onSwipe} ref={ref} showsPagination={false}>
            <SwiperWrapper>
              <SwiperP1 />
            </SwiperWrapper>
            <SwiperWrapper2>
              <SwiperP1 />
            </SwiperWrapper2>
          </Swiper>
        </CardsContainer>
      </MenuContainer>
    </MenuWrapper>
  );
};

export default Menu;
