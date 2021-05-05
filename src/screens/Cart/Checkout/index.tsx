import React, { useEffect, useRef, useState } from 'react';
import { Platform, View } from 'react-native';

import { wrapScrollView, useScrollIntoView } from 'react-native-scroll-into-view';

import type { Card } from 'tipsi-stripe';

import cartTranslations from '../../../translations/cart';

import type { OrderItem } from '../../../types/OrderItem';

import ExplanationModal from '../../../components/shared/ExplanationModal';

import TopBar from '../../../components/shared/TopBar';

import UpdateModal from '../../../components/Cart/Checkout/UpdateModal';
import ItemSummary from '../../../components/Cart/Checkout/ItemSummary';
import ValueItem from '../../../components/Cart/Checkout/ValueItem';
import FinaliseOrder from '../../../components/Cart/Checkout/FinaliseOrder';
import TotalSection from '../../../components/Cart/TotalSection';
import CardModal from '../../../components/Cart/Checkout/CardModal';
import SelectService from '../../../components/Cart/Checkout/SelectService';

import TakeAwayModal from '../../../components/Cart/Checkout/TakeAwayModal';

import { CheckoutServices } from '../../../types/Checkout';

import { CheckoutContainer, CheckoutSummarySection, CheckoutSwiper, ItemSummarySection } from './styles';

const CustomScrollView = wrapScrollView(CheckoutSwiper);

interface CheckoutProps {}

interface CheckoutContent {
  showError: boolean;
  checkoutService: CheckoutServices;
  setCheckoutService: React.Dispatch<React.SetStateAction<CheckoutServices>>;
}

const CheckoutContent: React.FunctionComponent<CheckoutContent> = ({
  showError,
  checkoutService,
  setCheckoutService,
}) => {
  const scrollIntoView = useScrollIntoView();
  const viewRef = useRef<View>(null);

  // START - CARD MODAL STATE

  const [isCardModalVisible, setCardModalVisible] = useState(false);

  const showCardModal = () => setCardModalVisible(true);

  const closeCardModal = () => setCardModalVisible(false);

  const onCardModalUpdate = (v: Card | 'native' | 'cash') => {
    setCheckoutService((oldM) => ({ ...oldM, paymentOption: v }));
  };

  // END - CARD MODAL STATE
  const updateModalValue = (v: string) => (t: string) => {
    setCheckoutService((oldV) => ({
      ...oldV,
      [v]: t,
    }));
  };

  const [takeAwayModal, setTakeAwayModal] = useState(false);

  const showTakeAwayModal = () => {
    setTakeAwayModal(true);
  };

  const closeTakeAwayModal = () => {
    setTakeAwayModal(false);
  };

  const [isModalVisible, setModalVisible] = useState(false);
  const [itemToUpdate, setItemToUpdate] = useState<OrderItem | null>(null);

  const [explanationModal, setExplanationModal] = useState({
    show: false,
    code: '',
    title: '',
    placeholder: '',
  });

  const toggleModal = (item: OrderItem) => () => {
    setItemToUpdate(item);
    setModalVisible(!isModalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const showDescriptionModal = ({
    code,
    placeholder,
    title,
  }: {
    title: string;
    placeholder: string;
    code: string;
  }) => () => {
    setExplanationModal({ show: true, title, placeholder, code });
  };

  const closeExplanationModal = () => {
    setExplanationModal({
      show: false,
      title: '',
      placeholder: '',
      code: '',
    });
  };

  useEffect(() => {
    if (showError) {
      viewRef.current && scrollIntoView(viewRef.current);
    }
  }, [showError, scrollIntoView]);

  return (
    <>
      <TakeAwayModal
        delivery={checkoutService.type === 'delivery'}
        handleChange={updateModalValue}
        isModalVisible={takeAwayModal}
        onClose={closeTakeAwayModal}
        value={checkoutService}
      />
      <UpdateModal isModalVisible={isModalVisible} item={itemToUpdate} onClose={closeModal} />
      <CardModal isModalVisible={isCardModalVisible} onCardUpdate={onCardModalUpdate} onClose={closeCardModal} />
      <ExplanationModal
        isVisible={explanationModal.show}
        onClose={closeExplanationModal}
        placeholder={explanationModal.placeholder}
        showInput
        title={explanationModal.title}
        updateValue={updateModalValue(explanationModal.code)}
        value={checkoutService[explanationModal.code]}
      />
      <ItemSummarySection>
        <ItemSummary onUpdate={toggleModal} />
      </ItemSummarySection>
      <SelectService selectService={setCheckoutService} />
      <CheckoutSummarySection ref={viewRef}>
        {checkoutService.type === 'eatin' && (
          <ValueItem
            color={showError && checkoutService.table === '' ? 'errorColor' : 'primary'}
            icon="location-outline"
            onItemClick={showDescriptionModal({
              title: cartTranslations.checkoutPage.tableNumber.label,
              placeholder: cartTranslations.checkoutPage.tableNumber.placeholder,
              code: 'table',
            })}
            title={checkoutService.table ? checkoutService.table : cartTranslations.checkoutPage.tableNumber.title}
          />
        )}
        {checkoutService.type === 'takeaway' && (
          <ValueItem
            color={showError && checkoutService.orderTime === '' ? 'errorColor' : 'primary'}
            icon="location-outline"
            onItemClick={showTakeAwayModal}
            title={checkoutService.orderTime ? checkoutService.orderTime : cartTranslations.checkoutPage.takeAway.title}
          />
        )}
        {checkoutService.type === 'delivery' && (
          <ValueItem
            color={showError && checkoutService.address === '' ? 'errorColor' : 'primary'}
            icon="location-outline"
            onItemClick={showTakeAwayModal}
            title={checkoutService.address ? checkoutService.address : cartTranslations.checkoutPage.delivery.title}
          />
        )}
        <ValueItem
          color={showError && checkoutService.paymentOption === null ? 'errorColor' : 'primary'}
          icon="ios-card"
          onItemClick={showCardModal}
          title={
            checkoutService.paymentOption === 'cash'
              ? cartTranslations.checkoutPage.paymentMethod.cashPayment
              : checkoutService.paymentOption === 'native'
              ? Platform.OS === 'ios'
                ? cartTranslations.checkoutPage.paymentMethod.nativeApplePay
                : cartTranslations.checkoutPage.paymentMethod.nativeGooglePay
              : checkoutService.paymentOption === null
              ? cartTranslations.checkoutPage.paymentMethod.title
              : Object.keys(checkoutService.paymentOption).length !== 0
              ? cartTranslations.checkoutPage.paymentMethod.cardPrefix +
                checkoutService.paymentOption.number.substr(-4, 4)
              : cartTranslations.checkoutPage.paymentMethod.title
          }
        />
        <ValueItem
          color="primary"
          icon="ios-chatbox-outline"
          onItemClick={showDescriptionModal({
            title: cartTranslations.checkoutPage.commentAndAllergies.label,
            placeholder: cartTranslations.checkoutPage.commentAndAllergies.placeholder,
            code: 'allergy',
          })}
          title={
            checkoutService.allergy ? checkoutService.allergy : cartTranslations.checkoutPage.commentAndAllergies.title
          }
        />
        <TotalSection checkoutSection={checkoutService.type} />
      </CheckoutSummarySection>
    </>
  );
};

const Checkout: React.FunctionComponent<CheckoutProps> = () => {
  const [checkoutService, setCheckoutService] = useState<CheckoutServices>({
    type: 'eatin',
    allergy: '',
    paymentOption: null,
    table: '',
  });

  const [showError, setShowError] = useState(false);

  const onPaymentError = (b: boolean) => {
    setShowError(b);
  };

  return (
    <CheckoutContainer>
      <TopBar back="MenuList" hideFilter title={cartTranslations.checkoutPage.title} showBorder />

      <CustomScrollView showsVerticalScrollIndicator={false}>
        <CheckoutContent
          checkoutService={checkoutService}
          setCheckoutService={setCheckoutService}
          showError={showError}
        />
      </CustomScrollView>
      <FinaliseOrder checkoutService={checkoutService} onPaymentError={onPaymentError} />
    </CheckoutContainer>
  );
};

export default Checkout;
