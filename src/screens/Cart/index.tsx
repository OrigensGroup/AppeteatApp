import React, { useState } from 'react';
import cartTranslations from '../../translations/cart';
import useCart from '../../hooks/useCart';
import UpdateModal from '../../components/Cart/UpdateModal';

import Logo from '../../components/Shared/Logo';
import ItemSummary from '../../components/Cart/ItemSummary';
import ValueItem from '../../components/Cart/ValueItem';
import FinaliseOrder from '../../components/Cart/FinaliseOrder';
import { OrderItem } from '../../types/OrderItem';

import { CartContainer, CartSummarySection } from './styles';

interface CartProps { }

const Cart: React.FunctionComponent<CartProps> = () => {
  const { pricing } = useCart();
  const { cart, deleteItemFromCart } = useCart();

  const [isModalVisible, setModalVisible] = useState(false);
  const [itemToUpdate, setItemToUpdate] = useState<OrderItem | null>(null);

  const toggleModal = (item: OrderItem) => () => {
    setItemToUpdate(item);
    setModalVisible(!isModalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const onSwipeValueChange = (itemData: any) => {
    const { key } = itemData;
    {
      deleteItemFromCart(key);
    }
  };

  return (
    <CartContainer>
      <UpdateModal isModalVisible={isModalVisible} item={itemToUpdate} onClose={closeModal} />
      <Logo />
      <ItemSummary onUpdate={toggleModal} />
      <CartSummarySection>
        <ValueItem title={cartTranslations.subtotal.title} value={pricing.subtotal} color="quartiary" />
        <ValueItem title={cartTranslations.serviceFeeField.title} value={pricing.servicefee} color="quartiary" />
        <ValueItem title={cartTranslations.allergiesField.title} color="tertiary" />
        <ValueItem title={cartTranslations.voucherField.title} color="tertiary" />
      </CartSummarySection>
      <FinaliseOrder />
    </CartContainer>
  );
};

export default Cart;
