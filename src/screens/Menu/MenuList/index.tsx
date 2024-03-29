import React, { useEffect, useMemo, useRef, useState } from 'react';
import Swiper from 'react-native-swiper';
import auth from '@react-native-firebase/auth';

import { useNavigation, useRoute } from '@react-navigation/native';

import SwiperPage from '../../../components/Menu/MenuList/MenuSwiper/SwiperPage';
import MenuTabs from '../../../components/Menu/MenuList/MenuTabs';
import ViewBasketButton from '../../../components/Menu/MenuList/ViewBasketButton';
import SearchModal from '../../../components/Menu/MenuList/SearchModal';
import TopBar from '../../../components/shared/TopBar';
import useMenu from '../../../hooks/useMenu';
import useHomepage from '../../../hooks/useHomepage';
import useCart from '../../../hooks/useCart';
import { HomepageComponent, CarouselPromo } from '../../../types/HomepageComponent';
import { TabDiscount } from '../../../types/DiscountRules';
import { Tab } from '../../../types/Tab';
import { Promotion } from '../../../types/Promotion';

import LoginModal from '../../../components/shared/LoginModal';

import { SafeAreaViewBottom, MenuContainer } from './styles';
import { t } from '../../../translations';

interface MenuProps {}

const findDiscounts = (sections: (HomepageComponent | Promotion)[]) => {
  const carousels = sections.filter((section) => section.type === 'CarouselPromo') as CarouselPromo[];

  const allCarouselsWithDiscounts = carousels.filter((carousels) =>
    carousels.promotions.some((promo) => promo.type === 'discount'),
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

  const [loginModalData, setLoginModalData] = useState({
    show: false,
  });

  const hideLoginModal = () => {
    setLoginModalData((old) => ({
      ...old,
      show: false,
    }));
  };

  const discounts = findDiscounts(homepage.sections);
  const tabsToShow = useMemo(() => {
    return menu.tabs.filter((tab) => tab.show);
  }, [menu.tabs]);

  const { goTo } = route.params ? (route.params as { goTo: string }) : { goTo: undefined };

  const [menuIndex, setMenuIndex] = useState(() => {
    if (goTo) {
      return findIndex(tabsToShow, goTo);
    } else {
      return 0;
    }
  });

  const onSwipe = (mode: 'menu' | 'swipe') => (index: number) => {
    if (ref.current && index !== menuIndex && mode !== 'swipe') {
      ref.current.scrollTo(index, true);
    } else {
      setMenuIndex(index);
    }
  };

  const goToCart = () => {
    navigation.navigate('Cart');
  };

  const verifyUser = () => {
    const user = auth().currentUser;

    if (user && user.isAnonymous) {
      setLoginModalData((old) => ({
        ...old,
        show: true,
      }));
    } else {
      goToCart();
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    if (goTo) {
      setMenuIndex(findIndex(tabsToShow, goTo));
    }
  }, [goTo, tabsToShow]);

  return (
    <MenuContainer>
      <SafeAreaViewBottom />
      <LoginModal isModalVisible={loginModalData.show} onClose={hideLoginModal} onConfirm={goToCart} />
      <SearchModal isModalVisible={isModalVisible} onClose={closeModal} />
      <TopBar back="HomePage" onClick={toggleModal} title={t('menuTranslations.menuPage.title')} />
      <MenuTabs menuTabs={tabsToShow} onChange={onSwipe('menu')} tabActive={menuIndex} />
      <Swiper index={menuIndex} loop={false} onIndexChanged={onSwipe('swipe')} ref={ref} showsPagination={false}>
        {tabsToShow.map((tab) => {
          const menuItemsPerSwipe = menu.items.filter((menuItems) => menuItems.belongsTo === tab.id);

          const possibleDiscount = discounts.filter((discount) => discount.tabToDiscount === tab.id);

          const tabDiscount = possibleDiscount.length === 1 ? possibleDiscount[0] : undefined;

          return <SwiperPage discount={tabDiscount} key={tab.id} menuItems={menuItemsPerSwipe} />;
        })}
      </Swiper>
      {cart.length > 0 && <ViewBasketButton onClick={verifyUser} />}
    </MenuContainer>
  );
};

export default Menu;
