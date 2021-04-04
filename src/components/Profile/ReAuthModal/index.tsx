import { firebase } from '@react-native-firebase/auth';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import Modal from 'react-native-modal';

import { useTheme } from 'styled-components';

import IconButton from '../../shared/IconButton';
import LoginTextField from '../../shared/LoginTextField';
import Text from '../../shared/Text';
import useUserData from '../../../hooks/useUserData';
import loginTranslations from '../../../translations/login';

import {
  ModalContainer,
  ModalDescription,
  ModalTitle,
  ModalTopRow,
  CloseIconWrapper,
  SumbmitButtonWrapper,
} from './styles';

interface ReAuthModalProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  placeholderTextColor?: string;
  placeholder?: string;
  passwordPlaceholder?: string;
  authResult: (result: boolean) => void;
}

const ReAuthModal: React.FunctionComponent<ReAuthModalProps> = ({
  authResult,
  isVisible,
  onClose,
  passwordPlaceholder,
  placeholder,
  placeholderTextColor,
  title,
}) => {
  const theme = useTheme();
  const { user } = useUserData();
  const [result, setResult] = useState(false);

  const reAuthenticate = (email: string, password: string) => {
    if (user && user.email) {
      const credential = firebase.auth.EmailAuthProvider.credential(user.email, password);

      user
        .reauthenticateWithCredential(credential)
        .then(() => {
          setResult(true);
          authResult(result);
          onClose();
        })
        .catch((error) => {
          if (error.code === 'auth/invalid-email') {
            Alert.alert(loginTranslations.errorSignInEmail.label);
            return;
          }

          if (error.code === 'auth/wrong-password') {
            Alert.alert(loginTranslations.errorWrongPasswordSignIn.label);
            return;
          }
        });
    }
  };

  return (
    <Formik
      initialValues={{ email: user?.email ?? '', password: '' }}
      onSubmit={(values) => {
        if (values.email && values.password) {
          reAuthenticate(values.email, values.password);
        }
      }}
    >
      {({ handleChange, handleSubmit, values }) => {
        return (
          <Modal isVisible={isVisible} onBackdropPress={onClose}>
            <ModalContainer>
              <ModalTopRow>
                <ModalTitle>
                  <Text bold color="fixedBlack" fontSize={18}>
                    {title}
                  </Text>
                </ModalTitle>
                <CloseIconWrapper>
                  <IconButton color={theme.colors.fixedBlack} iconName="ios-close" onClick={onClose} size={28} />
                </CloseIconWrapper>
              </ModalTopRow>
              <ModalDescription>
                <LoginTextField
                  defaultValue={values.email}
                  maxLength={70}
                  placeholder={placeholder}
                  placeholderTextColor={placeholderTextColor}
                  textContentType="emailAddress"
                  updateValue={handleChange('email')}
                />
                <LoginTextField
                  maxLength={70}
                  placeholder={passwordPlaceholder}
                  placeholderTextColor={placeholderTextColor}
                  textContentType="password"
                  updateValue={handleChange('password')}
                />
                <SumbmitButtonWrapper onPress={handleSubmit}>
                  <Text bold color="secondary" fontSize={18}>
                    Confirm
                  </Text>
                </SumbmitButtonWrapper>
              </ModalDescription>
            </ModalContainer>
          </Modal>
        );
      }}
    </Formik>
  );
};

export default ReAuthModal;
