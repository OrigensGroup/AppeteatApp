import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import InputSpinner from 'react-native-input-spinner';

import { FlatList } from 'react-native-gesture-handler';

import cartTranslations from '../../translations/cart';
import QrCode from '../../components/Menu/MenuComponents/QrCode';
import GoToCheckout from '../../components/Menu/CartComponents/AddToBasketButton';

import CartItem from '../../components/Menu/CartComponents/CartItem';

import menuTranslations from '../../translations/menu';

import useCart from '../../hooks/useCart';

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
  ServiceFee,
  InfoIconWrapper,
  ServiceFeeRightWrapper,
  Allert,
  AllertWrapper,
  SubTotWrapper,
  ButtonA1,
  ButtonA2,
  TitleInfoWrapper,
  BasketButtonWrapper,
  AddTipWrapper,
  OrderTotalWrapper,
  BottomCartOverlay,
  SparatorLineDiv,
  TipCounterWrapper,
} from './styles';

interface CartProps {}

const Cart: React.FunctionComponent<CartProps> = () => {
  const { cart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price, 0);
  const serviceCharge = Math.round(total * 0.125 * 100) / 100;

  const totalPlusCharge = total + serviceCharge;

  return (
    <CartContainer>
      <TopCartWrapper>
        <TopBarWrapper>
          <LogoContainer>
            <LogoImage source={require('../../img/Logo.png')}></LogoImage>
          </LogoContainer>
          <QrCode onClick={() => console.log('Hello World!')} title={menuTranslations.qrField.placeholder} />
        </TopBarWrapper>
        <TitleWrapper>
          <TitleInfoWrapper>
            <PrimaryInfo>Cart</PrimaryInfo>
          </TitleInfoWrapper>
        </TitleWrapper>
        <ListWrapper>
          <FlatList
            data={cart}
            renderItem={({ item }) => (
              <CartItem
                custom1={item.custom1}
                custom2={item.custom2}
                custom3={item.custom3}
                custom4={item.custom4}
                custom5={item.custom5}
                price={item.price}
                quantity={item.quantity}
                title={item.title}
              />
            )}
          />
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
              <GoToCheckout onClick={() => console.log('Hello')} />
            </BasketButtonWrapper>
          </BottomCartOverlay>
        </SparatorLineDiv>
      </BottomCartWrapper>
    </CartContainer>
  );
};

export default Cart;
