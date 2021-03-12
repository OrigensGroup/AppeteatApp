import React from 'react';
import Modal from 'react-native-modal';

import { CloseModal, CloseModalSection, ModalContainer, ModalDescription, ModalTitle } from './styles';
import Text from '../Text';
import IconButton from '../IconButton';
import { useTheme } from 'styled-components';

interface ExplanationModalProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

const ExplanationModal: React.FunctionComponent<ExplanationModalProps> = ({
  title,
  description,
  isVisible,
  onClose,
}) => {
  const theme = useTheme();

  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <ModalContainer>
        <CloseModalSection>
          <CloseModal>
            <IconButton color={theme.colors.textPrimary} iconName="ios-close" onClick={onClose} size={28} />
          </CloseModal>
        </CloseModalSection>
        <ModalTitle>
          <Text fontSize={18} color="fixedBlack" bold>
            {title}
          </Text>
        </ModalTitle>
        <ModalDescription>
          <Text fontSize={14} color="fixedBlack">
            {description}
          </Text>
        </ModalDescription>
      </ModalContainer>
    </Modal>
  );
};

export default ExplanationModal;
