import React, { useState } from 'react';
import { Platform } from 'react-native';

import { useTheme } from 'styled-components';

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

import { CheckoutContainer, CheckoutSummarySection, CheckoutSwiper, ItemSummarySection } from './styles';

interface CheckoutProps {}

const Checkout: React.FunctionComponent<CheckoutProps> = () => {
  const theme = useTheme();

  const [isModalVisible, setModalVisible] = useState(false);
  const [itemToUpdate, setItemToUpdate] = useState<OrderItem | null>(null);

  const [showTable, setShowTable] = useState(true);

  const [explanationModal, setExplanationModal] = useState({
    show: false,
    code: '',
    title: '',
    placeholder: '',
  });

  const [cardModal, setCardModal] = useState({
    show: false,
    card: {} as Card | 'native',
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

  const showCardModal = () => setCardModal((oldM) => ({ ...oldM, show: true }));

  const closeCardModal = () => setCardModal((oldM) => ({ ...oldM, show: false }));

  const onCardModalUpdate = (v: Card | 'native') => {
    setCardModal((oldM) => ({ ...oldM, card: v }));
  };

  const [values, setValues] = useState({
    table: '',
    pickup: '',
    allergy: '',
    voucher: '',
  });

  const updateModalValue = (v: string) => (t: string) => {
    setValues((oldV) => ({
      ...oldV,
      [v]: t,
    }));
  };

  return (
    <CheckoutContainer>
      <UpdateModal isModalVisible={isModalVisible} item={itemToUpdate} onClose={closeModal} />
      <CardModal isModalVisible={cardModal.show} onCardUpdate={onCardModalUpdate} onClose={closeCardModal} />
      <ExplanationModal
        isVisible={explanationModal.show}
        onClose={closeExplanationModal}
        placeholder={explanationModal.placeholder}
        placeholderTextColor={theme.colors.border}
        title={explanationModal.title}
        updateValue={updateModalValue(explanationModal.code)}
      />
      <TopBar back="MenuList" hideFilter title={cartTranslations.checkoutPage.title} />
      <CheckoutSwiper>
        <ItemSummarySection>
          <ItemSummary onUpdate={toggleModal} />
        </ItemSummarySection>
        <SelectService setShowTable={setShowTable} />
        <CheckoutSummarySection>
          {showTable ? (
            <ValueItem
              color="primary"
              icon="location-outline"
              onItemClick={showDescriptionModal({
                title: cartTranslations.checkoutPage.tableNumber.label,
                placeholder: cartTranslations.checkoutPage.tableNumber.placeholder,
                code: 'table',
              })}
              title={values.table ? values.table : cartTranslations.checkoutPage.tableNumber.title}
            />
          ) : (
            <ValueItem
              color="primary"
              icon="location-outline"
              onItemClick={showDescriptionModal({
                title: cartTranslations.checkoutPage.takeAway.label,
                placeholder: cartTranslations.checkoutPage.takeAway.placeholder,
                code: 'pickup',
              })}
              title={values.pickup ? values.pickup : cartTranslations.checkoutPage.takeAway.title}
            />
          )}
          <ValueItem
            color="primary"
            icon="ios-card"
            onItemClick={showCardModal}
            title={
              cardModal.card === 'native'
                ? Platform.OS === 'ios'
                  ? cartTranslations.checkoutPage.paymentMethod.nativeApplePay
                  : cartTranslations.checkoutPage.paymentMethod.nativeGooglePay
                : Object.keys(cardModal.card).length !== 0
                ? cartTranslations.checkoutPage.paymentMethod.cardPrefix + cardModal.card.number.substr(-4, 4)
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
            title={values.allergy ? values.allergy : cartTranslations.checkoutPage.commentAndAllergies.title}
          />
          <ValueItem
            color="primary"
            icon="ios-chatbox-outline"
            onItemClick={showDescriptionModal({
              title: cartTranslations.checkoutPage.voucher.label,
              placeholder: cartTranslations.checkoutPage.voucher.placeholder,
              code: 'voucher',
            })}
            title={values.voucher ? values.voucher : cartTranslations.checkoutPage.voucher.title}
          />
          <TotalSection />
        </CheckoutSummarySection>
      </CheckoutSwiper>
      <FinaliseOrder paymentOption={cardModal.card} />
    </CheckoutContainer>
  );
};

export default Checkout;
