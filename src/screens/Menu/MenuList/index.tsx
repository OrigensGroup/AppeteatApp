import React, { useCallback, useRef, useState } from 'react';

import Swiper from 'react-native-swiper';

import { useNavigation } from '@react-navigation/native';

import SwiperPage from '../../../components/Menu/MenuComponents/SwiperPage';
import MenuTabs from '../../../components/Menu/MenuComponents/MenuTabs';
import ViewBasketButton from '../../../components/Menu/MenuComponents/ViewBasketButton';
import FilterModal from '../../../components/Menu/MenuComponents/FilterModal';
import Filter from '../../../components/Menu/MenuComponents/Filter';
import CloseButton from '../../../components/Menu/MenuComponents/CloseButton';
import useMenu from '../../../hooks/useMenu';

import { MenuWrapper, TopBarWrapper, TopContainer, BasketButtonWrapper } from './styles';

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

  const navigateBack = () => {
    navigation.navigate('HomePage');
  };

  const menuTabsContent = useCallback(
    () =>
      menu.tabs.map((tab) => {
        const menuItemsPerSwipe = menu.items.filter((menuItems) => menuItems.belongsTo === tab.id);
        return <SwiperPage key={tab.id} menuItems={menuItemsPerSwipe} />;
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
          <CloseButton onClick={navigateBack} />
          <Filter onClick={toggleModal} />
        </TopBarWrapper>
        <FilterModal isModalVisible={isModalVisible} onClose={closeModal} />
        <MenuTabs menuTabs={menu.tabs} onChange={onSwipe} tabActive={menuIndex} />
      </TopContainer>
      <Swiper loop={false} onIndexChanged={onSwipe} ref={ref} showsPagination={false}>
        {menuTabsContent()}
      </Swiper>
      {/* <BasketButtonWrapper>
        <ViewBasketButton onClick={navigate} />
      </BasketButtonWrapper> */}
    </MenuWrapper>
  );
};

export default Menu;
