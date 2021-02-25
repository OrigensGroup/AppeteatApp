import React, { useCallback, useRef, useState } from 'react';
import SearchBar from '../../../components/Menu/MenuComponents/SearchBar';
import menuTranslations from '../../../translations/menu';
import Filter from '../../../components/Menu/MenuComponents/Filter';
import QrCode from '../../../components/Menu/MenuComponents/QrCode';
import Swiper from 'react-native-swiper';
import SwiperP1 from '../../../components/Menu/MenuComponents/SwiperP1';
import MenuTabs from '../../../components/Menu/MenuComponents/MenuTabs';
import ViewBasketButton from '../../../components/Menu/MenuComponents/ViewBasketButton';

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
} from './styles';
import { useNavigation } from '@react-navigation/native';
import useMenu from '../../../hooks/useMenu';

interface MenuProps {}

const Menu: React.FunctionComponent<MenuProps> = () => {
  const ref = useRef<Swiper | null>(null);
  const navigation = useNavigation();
  const [menuIndex, setMenuIndex] = useState(0);
  const { menu } = useMenu();

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
    () =>
      menu.tabs.map((tab) => {
        const menuItemsPerSwipe = menu.items.filter((menuItems) => menuItems.belongsTo === tab.id);
        return <SwiperP1 key={tab.id} menuItems={menuItemsPerSwipe} />;
      }),
    [menu.tabs]
  );

  return (
    <MenuWrapper>
      <TopContainer>
        <TopBarWrapper>
          <LogoContainer>
            <LogoImage source={require('../../../img/Logo.png')}></LogoImage>
          </LogoContainer>
          <QrCode onClick={() => console.log('Hello World!')} title={menuTranslations.qrField.placeholder}></QrCode>
        </TopBarWrapper>
        <SearchBarWrapper>
          <SearchBar
            placeholder={menuTranslations.searchField.placeholder}
            textContentType="name"
            onClick={() => console.log('Hello World!')}
          />
          <Filter onClick={() => console.log('Hello World!')}></Filter>
        </SearchBarWrapper>
        <MenuTabs menuTabs={menu.tabs} tabActive={menuIndex} onChange={onSwipe} />
      </TopContainer>
      <BottomContainer>
        <CardsContainer>
          <Swiper ref={ref} loop={false} showsPagination={false} onIndexChanged={onSwipe}>
            {menuTabsContent()}
          </Swiper>
        </CardsContainer>
      </BottomContainer>
      <BasketButtonWrapper>
        <ViewBasketButton onClick={navigate} />
      </BasketButtonWrapper>
    </MenuWrapper>
  );
};

export default Menu;
