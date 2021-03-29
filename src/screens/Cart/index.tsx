import React, { useState } from 'react';

import { useTheme } from 'styled-components';

import cartTranslations from '../../translations/cart';
import UpdateModal from '../../components/Cart/UpdateModal';

import ItemSummary from '../../components/Cart/ItemSummary';
import ValueItem from '../../components/Cart/ValueItem';
import FinaliseOrder from '../../components/Cart/FinaliseOrder';
import { OrderItem } from '../../types/OrderItem';

import ExplanationModal from '../../components/shared/ExplanationModal';
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
      <TopBar back="MenuList" hideFilter title={cartTranslations.titleField.title} />
      <CartSwiper>
        <ItemSummary onUpdate={toggleModal} />
        <SelectService setShowTable={setShowTable} />
        <CartSummarySection>
          {showTable ? (
            <ValueItem
              color="primary"
              icon="location-outline"
              onItemClick={showDescriptionModal({
                title: cartTranslations.tableNumber.label,
                placeholder: cartTranslations.tableNumber.placeholder,
              })}
              title={cartTranslations.tableNumber.title}
            />
          ) : (
            <ValueItem
              color="primary"
              icon="location-outline"
              onItemClick={showDescriptionModal({
                title: cartTranslations.takeAway.label,
                placeholder: cartTranslations.takeAway.placeholder,
              })}
              title={cartTranslations.takeAway.title}
            />
          )}
          <ValueItem color="primary" icon="ios-card" title={cartTranslations.paymentMethod.title} />
          <ValueItem
            color="primary"
            icon="ios-chatbox-outline"
            onItemClick={showDescriptionModal({
              title: cartTranslations.commentAndAllergies.label,
              placeholder: cartTranslations.commentAndAllergies.placeholder,
            })}
            title={cartTranslations.commentAndAllergies.title}
          />
          <ValueItem
            color="primary"
            icon="ios-chatbox-outline"
            onItemClick={showDescriptionModal({
              title: cartTranslations.voucher.label,
              placeholder: cartTranslations.voucher.placeholder,
            })}
            title={cartTranslations.voucher.title}
          />
          <TotalSection />
        </CartSummarySection>
      </CartSwiper>
      <FinaliseOrder />
    </CartContainer>
  );
};

export default Cart;
