import React, { useCallback, useRef, useState } from 'react';

import Swiper from 'react-native-swiper';

import { useNavigation } from '@react-navigation/native';

import SwiperPage from '../../../components/Menu/MenuSwiper/SwiperPage';
import MenuTabs from '../../../components/Menu/MenuTabs';
import ViewBasketButton from '../../../components/Menu/ViewBasketButton';
import FilterModal from '../../../components/Menu/FilterModal';
import useMenu from '../../../hooks/useMenu';
import MenuTopBar from '../../../components/Menu/MenuTopBar';

import useCart from '../../../hooks/useCart';

import { SafeAreaViewBottom, MenuWrapper } from './styles';

interface MenuProps {}

const Menu: React.FunctionComponent<MenuProps> = () => {
  const ref = useRef<Swiper | null>(null);
  const [menuIndex, setMenuIndex] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();
  const { menu } = useMenu();
  const { cart } = useCart();

  const onSwipe = (index: number) => {
    if (ref.current && index !== menuIndex) {
      ref.current.scrollBy(index - menuIndex, true);
    }

    setMenuIndex(index);
  };

  const goToCart = () => {
    navigation.navigate('Cart');
  };

  const menuTabsContent = useCallback(
    () =>
      menu.tabs.map((tab) => {
        const menuItemsPerSwipe = menu.items.filter((menuItems) => menuItems.belongsTo === tab.id);
        return <SwiperPage key={tab.id} menuItems={menuItemsPerSwipe} />;
      }),
    [menu.tabs, menu.items]
  );

  const closeModal = () => {
    setModalVisible(false);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <SafeAreaViewBottom>
        <MenuWrapper>
          <MenuTopBar onClick={toggleModal} />
          <MenuTabs menuTabs={menu.tabs} onChange={onSwipe} tabActive={menuIndex} />
          <Swiper loop={false} onIndexChanged={onSwipe} ref={ref} showsPagination={false}>
            {menuTabsContent()}
          </Swiper>
          {cart.length > 0 && <ViewBasketButton onClick={goToCart} />}
          <FilterModal isModalVisible={isModalVisible} onClick={closeModal} onClose={closeModal} />
        </MenuWrapper>
      </SafeAreaViewBottom>
    </>
  );
};

export default Menu;
