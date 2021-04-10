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
  ModalInput,
} from './styles';

interface ExplanationModalProps {
  value?: string;
  isVisible: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  showInput?: boolean;
  placeholder?: string;
  updateValue?: (t: string) => void;
}

const ExplanationModal: React.FunctionComponent<ExplanationModalProps> = ({
  description,
  isVisible,
  onClose,
  placeholder,
  showInput,
  title,
  updateValue,
  value,
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
        {!showInput ? (
          <ModalDescription>
            <Text color="fixedBlack" fontSize={14}>
              {description}
            </Text>
          </ModalDescription>
        ) : (
          <ModalDescription>
            <ModalInput>
              <LoginTextField
                defaultValue={value}
                maxLength={70}
                placeholder={placeholder}
                textContentType="none"
                updateValue={updateValue}
              />
            </ModalInput>
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
