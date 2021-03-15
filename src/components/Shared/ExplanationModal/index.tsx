import React from 'react';
import Modal from 'react-native-modal';

import { useTheme } from 'styled-components';

import Text from '../Text';

import IconButton from '../IconButton';

import LoginTextField from '../LoginTextField';

import {
  ModalContainer,
  ModalDescription,
  ModalTitle,
  ModalTopRow,
  EmptyDiv,
  CloseIconWrapper,
  SumbmitButtonWrapper,
} from './styles';

interface ExplanationModalProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  placeholderTextColor: string;
  placeholder: string;
}

const ExplanationModal: React.FunctionComponent<ExplanationModalProps> = ({
  description,
  isVisible,
  onClose,
  placeholder,
  placeholderTextColor,
  title,
}) => {
  const theme = useTheme();

  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <ModalContainer>
        <ModalTopRow>
          <EmptyDiv />
          <ModalTitle>
            <Text bold color="fixedBlack" fontSize={18}>
              {title}
            </Text>
          </ModalTitle>
          <CloseIconWrapper>
            <IconButton color={theme.colors.fixedBlack} iconName="ios-close" onClick={onClose} size={28} />
          </CloseIconWrapper>
        </ModalTopRow>
        {description ? (
          <ModalDescription>
            <Text color="fixedBlack" fontSize={14}>
              {description}
            </Text>
          </ModalDescription>
        ) : (
          <ModalDescription>
            <LoginTextField
              darkText
              maxLength={150}
              placeholder={placeholder}
              placeholderTextColor={placeholderTextColor}
              textContentType="none"
            />
            <SumbmitButtonWrapper>
              <IconButton color={theme.colors.border} iconName="arrow-forward-sharp" onClick={onClose} size={28} />
            </SumbmitButtonWrapper>
          </ModalDescription>
        )}
      </ModalContainer>
    </Modal>
  );
};

export default ExplanationModal;
