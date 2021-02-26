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
import FilterModal from '../../../components/Menu/MenuComponents/FilterModal';

import useMenu from '../../../hooks/useMenu';

import {
  MenuWrapper,
  TopBarWrapper,
  LogoContainer,
  LogoImage,
  SearchBarWrapper,
  TopContainer,
  BasketButtonWrapper,
} from './styles';

interface MenuProps {}

const Menu: React.FunctionComponent<MenuProps> = () => {
  const ref = useRef<Swiper | null>(null);
  const [menuIndex, setMenuIndex] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();
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
    [menu.tabs, menu.items]
  );

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
        <MenuTabs menuTabs={menu.tabs} onChange={onSwipe} tabActive={menuIndex} />
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
