import React, { useEffect, useState } from 'react';
import Modal from 'react-native-modal';

import Text from '../../shared/Text';
import { OrderItem } from '../../../types/OrderItem';
import Spinner from '../../shared/Spinner';
import cartTranslations from '../../../translations/cart';
import useCart from '../../../hooks/useCart';

import ViewCta from '../../shared/ViewCta';

import currencyTranslations from '../../../translations/currency';
import { fixDecimals } from '../../../contexts/Cart';

import { ModalCounterContainer, DivLine, ModalTitle, PopUpContainer, ModalCounterWrapper } from './styles';

interface UpdateModalProps {
  item: OrderItem | null;
  isModalVisible: boolean;
  onClose: () => void;
  // data: any;
  // rowMap: any;
  // itemId: string;
}

const UpdateModal: React.FunctionComponent<UpdateModalProps> = ({ isModalVisible, item, onClose }) => {
  const [localQuantity, setLocalQuantity] = useState(item ? item.quantity : 1);
  const { deleteItemFromCart, updateItemQuantity } = useCart();

  const updateQuantity = (number: number) => {
    setLocalQuantity(number);
  };

  const closeModal = () => {
    setLocalQuantity(item ? item.quantity : 1);
    onClose();
  };

  const update = () => {
    if (item && localQuantity == 0) deleteItemFromCart(item.orderItemId);

    if (localQuantity != 0) {
      if (item) updateItemQuantity(item, localQuantity);
    }

    closeModal();
  };

  useEffect(() => {
    setLocalQuantity(item ? item.quantity : 1);
  }, [item]);

  return (
    <Modal
      animationInTiming={600}
      animationOutTiming={450}
      avoidKeyboard
      isVisible={isModalVisible}
      onBackdropPress={closeModal}
      style={{
        margin: 0,
      }}
    >
      <PopUpContainer>
        <ModalTitle>
          <Text bold color="primary" fontSize={18}>
            {item && item.title}
          </Text>
        </ModalTitle>
        <ModalCounterContainer>
          <ModalCounterWrapper>
            <Spinner initialValue={localQuantity} onChange={updateQuantity} />
          </ModalCounterWrapper>
        </ModalCounterContainer>
        <ModalTitle>
          <Text color="primary" fontSize={18}>
            {cartTranslations.updateModal.price} {currencyTranslations.currencyField.placeholder}
            {item &&
              fixDecimals((item.price + item.extras.reduce((acc, extra) => acc + extra.price, 0)) * localQuantity)}
          </Text>
        </ModalTitle>
        <DivLine />

        <ViewCta onClick={update} redDelete={localQuantity === 0}>
          <Text bold color="fixedWhite" fontSize={18}>
            {localQuantity === 0 ? cartTranslations.removeItemModal.title : cartTranslations.updateModalField.label}
          </Text>
        </ViewCta>
      </PopUpContainer>
    </Modal>
  );
};

export default UpdateModal;
