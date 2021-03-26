import React, { useState } from 'react';

import { useTheme } from 'styled-components';

import cartTranslations from '../../translations/cart';
import useCart from '../../hooks/useCart';
import UpdateModal from '../../components/Cart/UpdateModal';

import ItemSummary from '../../components/Cart/ItemSummary';
import ValueItem from '../../components/Cart/ValueItem';
import FinaliseOrder from '../../components/Cart/FinaliseOrder';
import { OrderItem } from '../../types/OrderItem';

import ExplanationModal from '../../components/shared/ExplanationModal';
import allergiesTranslations from '../../translations/allergies';
import TopBar from '../../components/shared/TopBar';
import SelectService from '../../components/Cart/SelectService';
import Text from '../../components/shared/Text';

import { CartContainer, CartSummarySection, TotalRow, TotalSection, CartSwiper } from './styles';

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

  const [showTable, setShowTable] = useState(true);

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
      <TopBar back="MenuList" hideFilter title="Cart" />
      <CartSwiper>
        <ItemSummary onUpdate={toggleModal} />
        <SelectService setShowTable={setShowTable} />
        <CartSummarySection>
          {showTable ? (
            <ValueItem
              color="primary"
              icon="location-outline"
              onItemClick={showDescriptionModal({ title: 'Table number' })}
              title="Insert table number"
            />
          ) : (
            <ValueItem
              color="primary"
              icon="location-outline"
              onItemClick={showDescriptionModal({ title: 'Table number' })}
              title="Insert pick up time"
            />
          )}
          <ValueItem color="primary" icon="ios-card" title={cartTranslations.paymentMethodField.title} />
          <ValueItem
            color="primary"
            icon="ios-chatbox-outline"
            onItemClick={showDescriptionModal({ title: allergiesTranslations.allergiesModal.title })}
            title={cartTranslations.allergiesField.title}
          />
          <ValueItem
            color="primary"
            icon="ios-chatbox-outline"
            onItemClick={showDescriptionModal({ title: 'Voucher code' })}
            title={cartTranslations.voucherField.title}
          />
          <TotalSection>
            <TotalRow>
              <Text color="primary" fontSize={14}>
                Subtotal
              </Text>
              <Text color="primary" fontSize={14}>
                £ {pricing.subtotal}
              </Text>
            </TotalRow>
            <TotalRow>
              <Text color="primary" fontSize={14}>
                Service fee
              </Text>
              <Text color="primary" fontSize={14}>
                £ {pricing.servicefee}
              </Text>
            </TotalRow>
            <TotalRow>
              <Text color="primary" fontSize={14}>
                Total
              </Text>
              <Text bold color="primary" fontSize={14}>
                £ {pricing.total}
              </Text>
            </TotalRow>
          </TotalSection>
        </CartSummarySection>
      </CartSwiper>
      <FinaliseOrder />
    </CartContainer>
  );
};

export default Cart;
