import React, { useEffect, useRef, useState } from 'react';
import { Platform, View } from 'react-native';

import { wrapScrollView, useScrollIntoView } from 'react-native-scroll-into-view';

import type { Card } from 'tipsi-stripe';

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
import { validateCheckoutService } from './validateCheckoutService';
import { t } from '../../../translations';

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

  const takeAwayError = checkoutService.orderTime === '' || checkoutService.phoneNumber === '';

  const deliveryError = takeAwayError || checkoutService.address === '';

  return (
    <>
      <TakeAwayModal
        errors={showError ? validateCheckoutService(checkoutService) : false}
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
              title: t('cartTranslations.checkoutPage.tableNumber.label'),
              placeholder: t('cartTranslations.checkoutPage.tableNumber.placeholder'),
              code: 'table',
            })}
            title={checkoutService.table ? checkoutService.table : t('cartTranslations.checkoutPage.tableNumber.title')}
          />
        )}
        {checkoutService.type === 'takeaway' && (
          <ValueItem
            color={showError && takeAwayError ? 'errorColor' : 'primary'}
            icon="location-outline"
            onItemClick={showTakeAwayModal}
            title={
              checkoutService.orderTime ? checkoutService.orderTime : t('cartTranslations.checkoutPage.takeAway.title')
            }
          />
        )}
        {checkoutService.type === 'delivery' && (
          <ValueItem
            color={showError && deliveryError ? 'errorColor' : 'primary'}
            icon="location-outline"
            onItemClick={showTakeAwayModal}
            title={
              checkoutService.address ? checkoutService.address : t('cartTranslations.checkoutPage.delivery.title')
            }
          />
        )}
        <ValueItem
          color={showError && checkoutService.paymentOption === null ? 'errorColor' : 'primary'}
          icon="ios-card"
          onItemClick={showCardModal}
          title={
            checkoutService.paymentOption === 'cash'
              ? t('cartTranslations.checkoutPage.paymentMethod.cashPayment')
              : checkoutService.paymentOption === 'native'
              ? Platform.OS === 'ios'
                ? t('cartTranslations.checkoutPage.paymentMethod.nativeApplePay')
                : t('cartTranslations.checkoutPage.paymentMethod.nativeGooglePay')
              : checkoutService.paymentOption === null
              ? t('cartTranslations.checkoutPage.paymentMethod.title')
              : Object.keys(checkoutService.paymentOption).length !== 0
              ? t('cartTranslations.checkoutPage.paymentMethod.cardPrefix') +
                checkoutService.paymentOption.number.substr(-4, 4)
              : t('cartTranslations.checkoutPage.paymentMethod.title')
          }
        />
        <ValueItem
          color="primary"
          icon="ios-chatbox-outline"
          onItemClick={showDescriptionModal({
            title: t('cartTranslations.checkoutPage.commentAndAllergies.label'),
            placeholder: t('cartTranslations.checkoutPage.commentAndAllergies.placeholder'),
            code: 'allergy',
          })}
          title={
            checkoutService.allergy
              ? checkoutService.allergy
              : t('cartTranslations.checkoutPage.commentAndAllergies.title')
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
      <TopBar back="MenuList" hideFilter title={t('cartTranslations.checkoutPage.title')} showBorder />

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
