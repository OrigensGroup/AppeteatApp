import React from "react";
import QrCode from "../../../components/Menu/MenuComponents/QrCode";
import menuTranslations from "../../../translations/menu";
import GoToCheckout from "../../../components/Menu/CartComponents/AddToBasketButton"
import Icon from 'react-native-vector-icons/Ionicons';
import cartTranslations from '../../../translations/cart'
import InputSpinner from "react-native-input-spinner";


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    price: '£7.5',
    quantity: 'x3'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Spring Water',
    price: '£6.23',
    quantity: 'x7'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    price: '£9.33',
    quantity: 'x1'
  },
];


import {
  CartContainer,
  TopCartWrapper,
  BottomCartWrapper,
  TopBarWrapper,
  LogoContainer,
  LogoImage,
  ListWrapper,
  TitleWrapper,
  SingleCartItem,
  CartItemLeftWrapper,
  PrimaryInfo,
  ItemsNumber,
  Price,
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
} from "./styles";
import CartItem from "../../../components/Menu/CartComponents/CartItem";
import { FlatList } from "react-native-gesture-handler";


interface CartProps {
  price: string;
}

const Cart: React.FunctionComponent<CartProps> = ({ price }) => {
  return (
    <CartContainer>
      <TopCartWrapper>
        <TopBarWrapper>
          <LogoContainer>
            <LogoImage source={require("../../../img/Logo.png")}></LogoImage>
          </LogoContainer>
          <QrCode onClick={() => console.log('Hello World!')} title={menuTranslations.qrField.placeholder}></QrCode>
        </TopBarWrapper>
        <TitleWrapper>
          <TitleInfoWrapper>
            <PrimaryInfo>Cart</PrimaryInfo>
          </TitleInfoWrapper>
        </TitleWrapper>
        <ListWrapper>
          <FlatList data={DATA} renderItem={({ item }) => (
            <CartItem title={item.title} quantity={item.quantity} price={item.price} />
          )} />
        </ListWrapper>
        <SubTotWrapper>
          <SubTotal>
            <SecondaryInfo>{cartTranslations.totalField.placeholder}</SecondaryInfo>
            <SecondaryInfo>£67.00</SecondaryInfo>
          </SubTotal>
          <ServiceFee>
            <SecondaryInfo>{cartTranslations.serviceFeeField.placeholder}</SecondaryInfo>
            <ServiceFeeRightWrapper>
              <InfoIconWrapper><Icon name="information-circle-outline" size={24} color="#AFAFAF" /></InfoIconWrapper>
              <SecondaryInfo>£2.69</SecondaryInfo>
            </ServiceFeeRightWrapper>
          </ServiceFee>
        </SubTotWrapper>
        <AllertWrapper>
          <ButtonA1><Allert>{cartTranslations.allergiesField.placeholder}</Allert></ButtonA1>
          <ButtonA2><Allert>{cartTranslations.voucherField.placeholder}</Allert></ButtonA2>
        </AllertWrapper>
      </TopCartWrapper>
      <BottomCartWrapper>
        <SparatorLineDiv>
          <BottomCartOverlay>
            <AddTipWrapper>
              <SecondaryInfo>{cartTranslations.tipField.placeholder}</SecondaryInfo>
              <TipCounterWrapper>
                <InputSpinner
                  initialValue={0}
                  type={'float'}
                  max={'30'}
                  min={'0.00'}
                  step={'0.5'}
                  color={'white'}
                  buttonTextColor={'#AFAFAF'}
                  textColor={'#AFAFAF'}
                  precision={2}
                  buttonStyle={{
                    borderColor: '#AFAFAF',
                    borderWidth: 1.5,
                    backgroundColor: 'white',
                    width: 22,
                    height: 22,
                  }
                  }
                  onChange={(num) => {
                    console.log(num);
                  }}
                />
              </TipCounterWrapper>
            </AddTipWrapper>
            <OrderTotalWrapper>
              <PrimaryInfo>{cartTranslations.orderTotField.placeholder}</PrimaryInfo>
              <PrimaryInfo>£69.69</PrimaryInfo>
            </OrderTotalWrapper>
            <BasketButtonWrapper>
              <GoToCheckout onClick={() => console.log("Hello")}></GoToCheckout>
            </BasketButtonWrapper>
          </BottomCartOverlay>
        </SparatorLineDiv>
      </BottomCartWrapper>
    </CartContainer>
  );
};

export default Cart;
