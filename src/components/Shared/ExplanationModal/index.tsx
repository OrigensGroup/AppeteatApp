import React from 'react';
import Modal from 'react-native-modal';

import { useTheme } from 'styled-components';

import Text from '../Text';

import IconButton from '../IconButton';

import { CloseModal, CloseModalSection, ModalContainer, ModalDescription, ModalTitle } from './styles';

interface ExplanationModalProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

const ExplanationModal: React.FunctionComponent<ExplanationModalProps> = ({
  description,
  isVisible,
  onClose,
  title,
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
          <Text bold color="fixedBlack" fontSize={18}>
            {title}
          </Text>
        </ModalTitle>
        <ModalDescription>
          <Text color="fixedBlack" fontSize={14}>
            {description}
          </Text>
        </ModalDescription>
      </ModalContainer>
    </Modal>
  );
};

export default ExplanationModal;
