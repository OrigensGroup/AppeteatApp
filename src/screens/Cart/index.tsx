import React, { useState } from 'react';

import { useTheme } from 'styled-components';

import cartTranslations from '../../translations/cart';
import useCart from '../../hooks/useCart';
import UpdateModal from '../../components/Cart/UpdateModal';

import Logo from '../../components/shared/Logo';
import ItemSummary from '../../components/Cart/ItemSummary';
import ValueItem from '../../components/Cart/ValueItem';
import FinaliseOrder from '../../components/Cart/FinaliseOrder';
import { OrderItem } from '../../types/OrderItem';

import ExplanationModal from '../../components/shared/ExplanationModal';
import allergiesTranslations from '../../translations/allergies';

import { CartContainer, CartSummarySection } from './styles';

interface CartProps {}

const Cart: React.FunctionComponent<CartProps> = () => {
  const theme = useTheme();
  const { pricing } = useCart();

  const [isModalVisible, setModalVisible] = useState(false);
  const [itemToUpdate, setItemToUpdate] = useState<OrderItem | null>(null);

  const [modalData, setModalData] = useState({
    show: false,
    title: '',
  });

  const toggleModal = (item: OrderItem) => () => {
    setItemToUpdate(item);
    setModalVisible(!isModalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const showDescriptionModal = ({ title }: { title: string }) => () => {
    setModalData({ show: true, title });
  };

  const closeExplanationModal = () => {
    setModalData({
      show: false,
      title: '',
    });
  };

  return (
    <CartContainer>
      <UpdateModal isModalVisible={isModalVisible} item={itemToUpdate} onClose={closeModal} />
      <ExplanationModal
        isVisible={modalData.show}
        onClose={closeExplanationModal}
        placeholder={allergiesTranslations.allergiesModal.placeholder}
        placeholderTextColor={theme.colors.border}
        title={modalData.title}
      />
      <Logo />
      <ItemSummary onUpdate={toggleModal} />
      <CartSummarySection>
        <ValueItem color="quartiary" title={cartTranslations.subtotal.title} value={pricing.subtotal} />
        <ValueItem color="quartiary" title={cartTranslations.serviceFeeField.title} value={pricing.servicefee} />
        <ValueItem
          color="tertiary"
          onItemClick={showDescriptionModal({ title: allergiesTranslations.allergiesModal.title })}
          title={cartTranslations.allergiesField.title}
        />
        <ValueItem color="tertiary" title={cartTranslations.voucherField.title} />
      </CartSummarySection>
      <FinaliseOrder />
    </CartContainer>
  );
};

export default Cart;
