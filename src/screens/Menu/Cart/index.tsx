import React from "react";
import QrCode from "../../../components/Menu/MenuComponents/QrCode";
import menuTranslations from "../../../translations/menu";
import GoToCheckout from "../../../components/Menu/CartComponents/AddToBasketButton"
import Icon from 'react-native-vector-icons/Ionicons';

interface CartProps {
}

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

const Cart: React.FunctionComponent<CartProps> = () => {
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
          <SingleCartItem>
            <ItemInfoWrapper>
              <CartItemLeftWrapper>
                <ItemsNumber>1x</ItemsNumber>
                <ItemName>Mojito</ItemName>
              </CartItemLeftWrapper>
              <Price>£7.5</Price>
            </ItemInfoWrapper>
          </SingleCartItem>
        </ListWrapper>
          <SubTotWrapper>
            <SubTotal>
              <SecondaryInfo>Total</SecondaryInfo>
              <SecondaryInfo>£67.00</SecondaryInfo>
            </SubTotal>
            <ServiceFee>
              <SecondaryInfo>Service Fee</SecondaryInfo>
              <ServiceFeeRightWrapper>
                <InfoIconWrapper><Icon name="information-circle-outline" size={24} color="#AFAFAF" /></InfoIconWrapper>
                <SecondaryInfo>£2.69</SecondaryInfo>
              </ServiceFeeRightWrapper>
            </ServiceFee>
          </SubTotWrapper>
          <AllertWrapper>
            <ButtonA1><Allert>Any allergies we should be aware of?</Allert></ButtonA1>
            <ButtonA2><Allert>Add voucher code</Allert></ButtonA2>
          </AllertWrapper>
      </TopCartWrapper>
      <BottomCartWrapper>
        <SparatorLineDiv>
          <BottomCartOverlay>
            <AddTipWrapper>
              <SecondaryInfo>Add Tip</SecondaryInfo>
              <TipCounterWrapper>
                <MinusIconButton>
                  <Icon name="remove-circle-outline" size={26} color="#AFAFAF" />
                </MinusIconButton>
                <PlusIconButton>
                  <Icon name="ios-add-circle-outline" size={26} color="#AFAFAF" />
                </PlusIconButton>
                <TipCounter>£0.00</TipCounter>
              </TipCounterWrapper>
            </AddTipWrapper>
            <OrderTotalWrapper>
              <PrimaryInfo>Order Total</PrimaryInfo>
              <PrimaryInfo>£69.69</PrimaryInfo>
            </OrderTotalWrapper>
            <BasketButtonWrapper>
              <GoToCheckout onClick={()=>console.log("Hello")}></GoToCheckout>
            </BasketButtonWrapper>
          </BottomCartOverlay>
        </SparatorLineDiv>
      </BottomCartWrapper>
    </CartContainer>
  );
};

export default Cart;
