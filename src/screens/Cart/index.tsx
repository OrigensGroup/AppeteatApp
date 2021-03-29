import React, { useState } from 'react';

import { useTheme } from 'styled-components';

import cartTranslations from '../../translations/cart';
import UpdateModal from '../../components/Cart/UpdateModal';

import ItemSummary from '../../components/Cart/ItemSummary';
import ValueItem from '../../components/Cart/ValueItem';
import FinaliseOrder from '../../components/Cart/FinaliseOrder';
import { OrderItem } from '../../types/OrderItem';

import ExplanationModal from '../../components/shared/ExplanationModal';
import allergiesTranslations from '../../translations/allergies';
import TopBar from '../../components/shared/TopBar';
import SelectService from '../../components/Cart/SelectService';

import TotalSection from '../../components/Cart/TotalSection';

import { CartContainer, CartSummarySection, CartSwiper } from './styles';

interface CartProps {}

const Cart: React.FunctionComponent<CartProps> = () => {
  const theme = useTheme();

  const [isModalVisible, setModalVisible] = useState(false);
  const [itemToUpdate, setItemToUpdate] = useState<OrderItem | null>(null);

  const [modalData, setModalData] = useState({
    show: false,
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

  const showDescriptionModal = ({ placeholder, title }: { title: string; placeholder: string }) => () => {
    setModalData({ show: true, title, placeholder });
  };

  const closeExplanationModal = () => {
    setModalData({
      show: false,
      title: '',
      placeholder: '',
    });
  };

  const [showTable, setShowTable] = useState(true);

  return (
    <CartContainer>
      <UpdateModal isModalVisible={isModalVisible} item={itemToUpdate} onClose={closeModal} />
      <ExplanationModal
        isVisible={modalData.show}
        onClose={closeExplanationModal}
        placeholder={modalData.placeholder}
        placeholderTextColor={theme.colors.border}
        title={modalData.title}
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
              onItemClick={showDescriptionModal({ title: 'Table number', placeholder: 'Insert table number' })}
              title="Insert table number"
            />
          ) : (
            <ValueItem
              color="primary"
              icon="location-outline"
              onItemClick={showDescriptionModal({ title: 'Pick up time', placeholder: 'hh : mm' })}
              title="Insert pick up time"
            />
          )}
          <ValueItem color="primary" icon="ios-card" title={cartTranslations.paymentMethodField.title} />
          <ValueItem
            color="primary"
            icon="ios-chatbox-outline"
            onItemClick={showDescriptionModal({
              title: allergiesTranslations.allergiesModal.title,
              placeholder: 'Insert any comments',
            })}
            title={cartTranslations.allergiesField.title}
          />
          <ValueItem
            color="primary"
            icon="ios-chatbox-outline"
            onItemClick={showDescriptionModal({ title: 'Voucher', placeholder: 'Insert discount code' })}
            title={cartTranslations.voucherField.title}
          />
          <TotalSection />
        </CartSummarySection>
      </CartSwiper>
      <FinaliseOrder />
    </CartContainer>
  );
};

export default Cart;
