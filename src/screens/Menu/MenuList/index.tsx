import React, { useCallback, useEffect, useRef, useState } from 'react';
import Swiper from 'react-native-swiper';
import { useNavigation, useRoute } from '@react-navigation/native';

import SwiperPage from '../../../components/Menu/MenuList/MenuSwiper/SwiperPage';
import MenuTabs from '../../../components/Menu/MenuList/MenuTabs';
import ViewBasketButton from '../../../components/Menu/MenuList/ViewBasketButton';
import SearchModal from '../../../components/Menu/MenuList/SearchModal';
import TopBar from '../../../components/shared/TopBar';
import useMenu from '../../../hooks/useMenu';
import useHomepage from '../../../hooks/useHomepage';
import useCart from '../../../hooks/useCart';
import menuTranslations from '../../../translations/menu';
import { HomepageComponent, CarouselPromo } from '../../../types/HomepageComponent';
import { TabDiscount } from '../../../types/DiscountRules';
import { Tab } from '../../../types/Tab';
import { Promotion } from '../../../types/Promotion';

import { SafeAreaViewBottom, MenuContainer } from './styles';

interface MenuProps {}

const findDiscounts = (sections: (HomepageComponent | Promotion)[]) => {
  const carousels = sections.filter((section) => section.type === 'CarouselPromo') as CarouselPromo[];

  const allCarouselsWithDiscounts = carousels.filter((carousels) =>
    carousels.promotions.some((promo) => promo.type === 'discount')
  );

  const allDiscounts = sections
    .filter((section) => section.type === 'discount')
    .map((discount) => ({ promotions: [discount] })) as CarouselPromo[];

  const onlyDiscounts: TabDiscount[] = [];

  [...allCarouselsWithDiscounts, ...allDiscounts].forEach((carouselPromo) => {
    const discountArr = carouselPromo.promotions
      .map((promo) => (promo.type === 'discount' ? promo.discount : null))
      .filter((item) => item !== null) as TabDiscount[];

    onlyDiscounts.push(...discountArr);
  });

  return onlyDiscounts;
};

const findIndex = (tabs: Tab[], goToTab: string) => tabs.map((item) => item.id).indexOf(goToTab);

const Menu: React.FunctionComponent<MenuProps> = () => {
  const ref = useRef<Swiper | null>(null);

  const route = useRoute();
  const navigation = useNavigation();

  const [homepage] = useHomepage();
  const { cart } = useCart();
  const [menu] = useMenu();

  const [isModalVisible, setModalVisible] = useState(false);

  const discounts = findDiscounts(homepage.sections);

  const { goTo } = route.params ? (route.params as { goTo: string }) : { goTo: undefined };

  const [menuIndex, setMenuIndex] = useState(() => {
    if (goTo) {
      return findIndex(menu.tabs, goTo);
    } else {
      return 0;
    }
  });

  const onSwipe = (mode: 'menu' | 'swipe') => (index: number) => {
    if (ref.current && index !== menuIndex && mode !== 'swipe') {
      ref.current.scrollTo(index, true);
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

        const possibleDiscount = discounts.filter((discount) => discount.tabToDiscount === tab.id);

        const tabDiscount = possibleDiscount.length === 1 ? possibleDiscount[0] : undefined;

        return <SwiperPage discount={tabDiscount} key={tab.id} menuItems={menuItemsPerSwipe} />;
      }),
    [menu.tabs, menu.items, discounts]
  );

  const closeModal = () => {
    setModalVisible(false);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    if (goTo) {
      setMenuIndex(findIndex(menu.tabs, goTo));
    }
  }, [menu.tabs, goTo]);

  return (
    <MenuContainer>
      <SafeAreaViewBottom />
      <SearchModal isModalVisible={isModalVisible} onClose={closeModal} />
      <TopBar back="HomePage" onClick={toggleModal} title={menuTranslations.menuPage.title} />
      <MenuTabs menuTabs={menu.tabs} onChange={onSwipe('menu')} tabActive={menuIndex} />
      <Swiper loop={false} onIndexChanged={onSwipe('swipe')} ref={ref} showsPagination={false}>
        {menuTabsContent()}
      </Swiper>
      {cart.length > 0 && <ViewBasketButton onClick={goToCart} />}
    </MenuContainer>
  );
};

export default Menu;
