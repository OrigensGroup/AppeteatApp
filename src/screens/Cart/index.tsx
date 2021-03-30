import React, { useState } from 'react';

import { useTheme } from 'styled-components';

import type { Card } from 'tipsi-stripe';

import cartTranslations from '../../translations/cart';
import UpdateModal from '../../components/Cart/UpdateModal';

import ItemSummary from '../../components/Cart/ItemSummary';
import ValueItem from '../../components/Cart/ValueItem';
import FinaliseOrder from '../../components/Cart/FinaliseOrder';
import { OrderItem } from '../../types/OrderItem';

import ExplanationModal from '../../components/shared/ExplanationModal';
import allergiesTranslations from '../../translations/allergies';
import TopBar from '../../components/shared/TopBar';

import TotalSection from '../../components/Cart/TotalSection';

import CardModal from '../../components/Cart/CardModal';
import SelectService from '../../components/Cart/SelectService';

import { CartContainer, CartSummarySection, CartSwiper } from './styles';

interface CartProps {}

const Cart: React.FunctionComponent<CartProps> = () => {
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

  const onCardModalUpdate = (v: any) => {
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
    <CartContainer>
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
      <TopBar back="MenuList" hideFilter title="Cart" />
      <CartSwiper>
        <ItemSummary onUpdate={toggleModal} />
        <SelectService setShowTable={setShowTable} />
        <CartSummarySection>
          {showTable ? (
            <ValueItem
              color="primary"
              icon="location-outline"
              onItemClick={showDescriptionModal({
                title: 'Table number',
                placeholder: 'Insert table number',
                code: 'table',
              })}
              title={values.table ? values.table : 'Insert table number'}
            />
          ) : (
            <ValueItem
              color="primary"
              icon="location-outline"
              onItemClick={showDescriptionModal({ title: 'Pick up time', placeholder: 'hh : mm', code: 'pickup' })}
              title={values.pickup ? values.pickup : 'Insert pick up time'}
            />
          )}
          <ValueItem
            color="primary"
            icon="ios-card"
            onItemClick={showCardModal}
            title={
              cardModal.card === 'native'
                ? 'Apple pay'
                : Object.keys(cardModal.card).length !== 0
                ? 'Card **** **** **** ' + cardModal.card.number.substr(-4, 4)
                : cartTranslations.paymentMethodField.title
            }
          />
          <ValueItem
            color="primary"
            icon="ios-chatbox-outline"
            onItemClick={showDescriptionModal({
              title: allergiesTranslations.allergiesModal.title,
              placeholder: 'Insert any comments',
              code: 'allergy',
            })}
            title={values.allergy ? values.allergy : cartTranslations.allergiesField.title}
          />
          <ValueItem
            color="primary"
            icon="ios-chatbox-outline"
            onItemClick={showDescriptionModal({
              title: 'Voucher',
              placeholder: 'Insert discount code',
              code: 'voucher',
            })}
            title={values.voucher ? values.voucher : cartTranslations.voucherField.title}
          />
          <TotalSection />
        </CartSummarySection>
      </CartSwiper>
      <FinaliseOrder paymentOption={cardModal.card} />
    </CartContainer>
  );
};

export default Cart;
