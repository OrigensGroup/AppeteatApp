import React, { useEffect, useState } from 'react';
import Modal from 'react-native-modal';

import Text from '../../shared/Text';
import { OrderItem } from '../../../types/OrderItem';
import Spinner from '../../shared/Spinner';
import cartTranslations from '../../../translations/cart';
import useCart from '../../../hooks/useCart';

import ViewCta from '../../shared/ViewCta';

import {
  ModalCounterContainer,
  DivLine,
  ModalTitle,
  PopUpContainer,
  ModalCounterWrapper,
  DeleteButton,
} from './styles';

interface UpdateModalProps {
  item: OrderItem | null;
  isModalVisible: boolean;
  onClose: () => void;
  data: any;
  rowMap: any;
  itemId: string;
}

const UpdateModal: React.FunctionComponent<UpdateModalProps> = ({ isModalVisible, item, onClose }) => {
  const [localQuantity, setLocalQuantity] = useState(item ? item.quantity : 1);
  const { updateItemQuantity, deleteItemFromCart } = useCart();

  const updateQuantity = (number: number) => {
    setLocalQuantity(number);
  };

  const update = () => {
    if (item && localQuantity == 0) deleteItemFromCart(item.orderItemId);
    if (localQuantity != 0) {
      if (item) updateItemQuantity(item, localQuantity);
    }
    onClose();
  };

  useEffect(() => {
    setLocalQuantity(item ? item.quantity : 1);
  }, [item]);

  return (
    <Modal
      animationInTiming={600}
      animationOutTiming={450}
      isVisible={isModalVisible}
      onBackdropPress={onClose}
      avoidKeyboard={true}
      style={{
        margin: 0,
      }}
    >
      <PopUpContainer>
        <ModalTitle>
          <Text color="primary" fontSize={18} bold>
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
            {cartTranslations.updateModal.price} £ {item && item.price}
          </Text>
        </ModalTitle>
        <DivLine />

        <ViewCta redDelete={localQuantity === 0} onClick={update}>
          <Text color="secondary" fontSize={18} bold>
            {localQuantity === 0 ? cartTranslations.removeItemModal.title : cartTranslations.updateModalField.label}
          </Text>
        </ViewCta>
      </PopUpContainer>
    </Modal>
  );
};

export default UpdateModal;
