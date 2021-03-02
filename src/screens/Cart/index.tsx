import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import InputSpinner from 'react-native-input-spinner';
import { FlatList } from 'react-native-gesture-handler';
import cartTranslations from '../../translations/cart';
import GoToCheckout from '../../components/Cart/AddToBasketButton';
import CartItem from '../../components/Cart/ItemSummary/CartItem';
import useCart from '../../hooks/useCart';
import UpdateModal from '../../components/Menu/UpdateModal';

import {
  CartContainer,
  TopCartWrapper,
  BottomCartWrapper,
  TopBarWrapper,
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

import Logo from '../../components/Shared/Logo';
import ItemSummary from '../../components/Cart/ItemSummary';

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
      <Logo />
      <ItemSummary onUpdate={toggleModal} />
      <TopCartWrapper>
        <SubTotWrapper>
          <SubTotal>
            <SecondaryInfo>{cartTranslations.totalField.title}</SecondaryInfo>
            <SecondaryInfo>£{total}</SecondaryInfo>
          </SubTotal>
          <ServiceFee>
            <SecondaryInfo>{cartTranslations.serviceFeeField.title}</SecondaryInfo>
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
            <Allert>{cartTranslations.allergiesField.title}</Allert>
          </ButtonA1>
          <ButtonA2>
            <Allert>{cartTranslations.voucherField.title}</Allert>
          </ButtonA2>
        </AllertWrapper>
      </TopCartWrapper>
      <BottomCartWrapper>
        <SparatorLineDiv>
          <BottomCartOverlay>
            <AddTipWrapper>
              <SecondaryInfo>{cartTranslations.tipField.title}</SecondaryInfo>
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
              <PrimaryInfo>{cartTranslations.orderTotField.title}</PrimaryInfo>
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
