import React from 'react';
import Modal from 'react-native-modal';

import LoginTextField from '../../../shared/LoginTextField';

import { PopUpContainer } from './styles';

interface TakeAwayModalProps {
  isModalVisible: boolean;
  onClose: () => void;
}

const TakeAwayModal: React.FunctionComponent<TakeAwayModalProps> = ({ isModalVisible, onClose }) => {
  return (
    <Modal
      animationInTiming={600}
      animationOutTiming={450}
      avoidKeyboard
      isVisible={isModalVisible}
      onBackdropPress={onClose}
      style={{
        margin: 0,
      }}
    >
      <PopUpContainer>
        <LoginTextField maxLength={50} textContentType="none" />
      </PopUpContainer>
    </Modal>
  );
};

export default TakeAwayModal;
