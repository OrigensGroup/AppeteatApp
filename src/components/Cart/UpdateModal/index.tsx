import React from 'react';
import Modal from 'react-native-modal';

import Text from '../../Shared/Text';
import { OrderItem } from '../../../types/OrderItem';
import Spinner from '../../Shared/Spinner';
import cartTranslations from '../../../translations/cart';
import useCart from '../../../hooks/useCart';

import ViewCta from '../../Shared/ViewCta';

import { ModalCounterContainer, DivLine, ModalTitle, PopUpContainer, ModalCounterWrapper } from './styles';

interface UpdateModalProps {
  item: OrderItem | null;
  isModalVisible: boolean;
  onClose: () => void;
}

const UpdateModal: React.FunctionComponent<UpdateModalProps> = ({ isModalVisible, item, onClose }) => {
  const { updateItemQuantity } = useCart();

  const updateQuantity = (number: number) => {
    if (item) updateItemQuantity(item, number);
  };

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
            <Spinner initialValue={item ? item.quantity : 1} onChange={updateQuantity} />
          </ModalCounterWrapper>
        </ModalCounterContainer>
        <ModalTitle>
          <Text color="primary" fontSize={18}>
            {cartTranslations.updateModal.price} £ {item && item.price}
          </Text>
        </ModalTitle>
        <DivLine />
        <ViewCta onClick={onClose}>
          <Text color="secondary" fontSize={18} bold>
            {cartTranslations.updateModal.cta}
          </Text>
        </ViewCta>
      </PopUpContainer>
    </Modal>
  );
};

export default UpdateModal;
