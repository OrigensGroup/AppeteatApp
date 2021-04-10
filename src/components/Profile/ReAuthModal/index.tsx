import { firebase } from '@react-native-firebase/auth';
import { Formik } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import Modal from 'react-native-modal';

import { useTheme } from 'styled-components';

import IconButton from '../../shared/IconButton';
import LoginTextField from '../../shared/LoginTextField';
import Text from '../../shared/Text';
import useUserData from '../../../hooks/useUserData';

import profileTranslations from '../../../translations/profile';
import InfoUpdatedCard from '../InfoUpdatedCard';

import {
  ModalContainer,
  ModalDescription,
  ModalTitle,
  ModalTopRow,
  CloseIconWrapper,
  SumbmitButtonWrapper,
  InfoUpdatedContainer,
} from './styles';

interface ReAuthModalProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  description?: string;
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
  title,
}) => {
  const theme = useTheme();
  const { user } = useUserData();
  const autoHide = useRef<NodeJS.Timeout>();
  const [infoUpdatedShow, setInfoUpdatedShow] = useState(false);

  const reAuthenticate = (email: string, password: string) => {
    if (user && user.email) {
      const credential = firebase.auth.EmailAuthProvider.credential(user.email, password);

      user
        .reauthenticateWithCredential(credential)
        .then(() => {
          authResult(true);
          onClose();
        })
        .catch(() => {
          setInfoUpdatedShow(true);
        });
    }
  };

  useEffect(() => {
    autoHide.current = setTimeout(() => {
      setInfoUpdatedShow(false);
    }, 2000);

    return () => {
      autoHide.current && clearTimeout(autoHide.current);
    };
  }, [infoUpdatedShow, setInfoUpdatedShow]);

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
                  textContentType="emailAddress"
                  updateValue={handleChange('email')}
                />
                <LoginTextField
                  maxLength={70}
                  placeholder={passwordPlaceholder}
                  textContentType="password"
                  updateValue={handleChange('password')}
                />
                {infoUpdatedShow && (
                  <InfoUpdatedContainer>
                    <InfoUpdatedCard error />
                  </InfoUpdatedContainer>
                )}
                <SumbmitButtonWrapper onPress={handleSubmit}>
                  <Text bold color="secondary" fontSize={18}>
                    {profileTranslations.settingsPage.confirm}
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
