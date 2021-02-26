import React, { useMemo, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import InputSpinner from 'react-native-input-spinner';
import { FlatList } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import cartTranslations from '../../translations/cart';
import QrCode from '../../components/Menu/MenuComponents/QrCode';
import GoToCheckout from '../../components/Menu/CartComponents/AddToBasketButton';
import CartItem from '../../components/Menu/CartComponents/CartItem';
import menuTranslations from '../../translations/menu';
import useCart from '../../hooks/useCart';
import CloseButton from '../../components/Menu/MenuComponents/CloseButton';
import Title from '../../components/Shared/Text';
import UpdateModal from '../../components/Menu/UpdateModal';
import SwipeableItem, { UnderlayParams } from 'react-native-swipeable-item';

import {
  CartContainer,
  TopCartWrapper,
  BottomCartWrapper,
  TopBarWrapper,
  LogoContainer,
  LogoImage,
  ListWrapper,
  TitleWrapper,
  PrimaryInfo,
  SubTotal,
  SecondaryInfo,
  ItemName,
  ServiceFee,
  InfoIconWrapper,
  ServiceFeeRightWrapper,
  Allert,
  AllertWrapper,
  SubTotWrapper,
  ButtonA1,
  ButtonA2,
  ItemInfoWrapper,
  TitleInfoWrapper,
  BasketButtonWrapper,
  AddTipWrapper,
  OrderTotalWrapper,
  BottomCartOverlay,
  SparatorLineDiv,
  TipCounterWrapper,
  TipCounter,
  MinusIconButton,
  PlusIconButton,
  PopUpContainer,
  UpdateWrapper,
  ModalContainer,
  ModalTitle,
  DivLine,
  DivLineContainer,
} from './styles';

interface CartProps {}

const Cart: React.FunctionComponent<CartProps> = () => {
  const { cart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const serviceCharge = Math.round(total * 0.125 * 100) / 100;

  const totalPlusCharge = total + serviceCharge;

  const [isModalVisible, setModalVisible] = useState(false);
  const [itemToUpdate, setItemToUpdate] = useState({});

  const toggleModal = (item: any) => () => {
    setItemToUpdate(item);
    setModalVisible(!isModalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <CartContainer>
      <UpdateModal isModalVisible={isModalVisible} item={itemToUpdate} onClose={closeModal} />
      <TopCartWrapper>
        <TopBarWrapper>
          <LogoContainer>
            <LogoImage source={require('../../img/Logo.png')} />
          </LogoContainer>
          <QrCode onClick={() => console.log('Hello World')} title={menuTranslations.qrField.placeholder} />
        </TopBarWrapper>
        <TitleWrapper>
          <TitleInfoWrapper>
            <PrimaryInfo>Cart</PrimaryInfo>
          </TitleInfoWrapper>
        </TitleWrapper>
        <ListWrapper>
          <FlatList data={cart} renderItem={({ item }) => <CartItem item={item} onClick={toggleModal} />} />
          {/* <SwipeableItem data={cart} renderItem={({ item }) => <CartItem item={item} onClick={toggleModal} />}></SwipeableItem> */}
        </ListWrapper>
        <SubTotWrapper>
          <SubTotal>
            <SecondaryInfo>{cartTranslations.totalField.placeholder}</SecondaryInfo>
            <SecondaryInfo>£{total}</SecondaryInfo>
          </SubTotal>
          <ServiceFee>
            <SecondaryInfo>{cartTranslations.serviceFeeField.placeholder}</SecondaryInfo>
            <ServiceFeeRightWrapper>
              <InfoIconWrapper>
                <Icon color="#AFAFAF" name="information-circle-outline" size={24} />
              </InfoIconWrapper>
              <SecondaryInfo>£{serviceCharge}</SecondaryInfo>
            </ServiceFeeRightWrapper>
          </ServiceFee>
        </SubTotWrapper>
        <AllertWrapper>
          <ButtonA1>
            <Allert>{cartTranslations.allergiesField.placeholder}</Allert>
          </ButtonA1>
          <ButtonA2>
            <Allert>{cartTranslations.voucherField.placeholder}</Allert>
          </ButtonA2>
        </AllertWrapper>
      </TopCartWrapper>
      <BottomCartWrapper>
        <SparatorLineDiv>
          <BottomCartOverlay>
            <AddTipWrapper>
              <SecondaryInfo>{cartTranslations.tipField.placeholder}</SecondaryInfo>
              <TipCounterWrapper>
                <InputSpinner
                  buttonStyle={{
                    borderColor: '#AFAFAF',
                    borderWidth: 1.5,
                    backgroundColor: 'white',
                    width: 22,
                    height: 22,
                  }}
                  buttonTextColor="#AFAFAF"
                  color="white"
                  initialValue={0}
                  max="30"
                  min="0.00"
                  onChange={(num) => {
                    console.log(num);
                  }}
                  precision={2}
                  step="0.5"
                  textColor="#AFAFAF"
                  type="float"
                />
              </TipCounterWrapper>
            </AddTipWrapper>
            <OrderTotalWrapper>
              <PrimaryInfo>{cartTranslations.orderTotField.placeholder}</PrimaryInfo>
              <PrimaryInfo>£{totalPlusCharge}</PrimaryInfo>
            </OrderTotalWrapper>
            <BasketButtonWrapper>
              <GoToCheckout price={totalPlusCharge} onClick={() => {}} />
            </BasketButtonWrapper>
          </BottomCartOverlay>
        </SparatorLineDiv>
      </BottomCartWrapper>
    </CartContainer>
  );
};

export default Cart;
