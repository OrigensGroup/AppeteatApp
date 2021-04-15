import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { Platform } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import ForgotPassword from '../../Login/ForgotPassword';
import RegisterManual from '../../Login/ManualRegister';
import SocialLoading from '../../Login/SocialLoading';
import SocialLogin from '../../Login/SocialLogin';

import Logo from '../../Login/Logo';

import { PopUpContainer, KeyboardAvoidingView, LogInContainer, EnclosingView, CloseModal, CloseIcon } from './styles';

interface LoginModalProps {
  isModalVisible: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const LoginModal: React.FunctionComponent<LoginModalProps> = ({ isModalVisible, onClose, onConfirm }) => {
  const [pageToShow, setPageToShow] = useState<'login' | 'register' | 'forgotPassword'>('register');
  const [socialLoading, setSocialLoading] = useState(false);

  return (
    <Modal
      animationInTiming={100}
      animationOutTiming={450}
      avoidKeyboard
      isVisible={isModalVisible}
      onBackdropPress={onClose}
      style={{
        margin: 0,
        width: '100%',
      }}
    >
      <PopUpContainer>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'position' : 'height'}>
          <LogInContainer
            alwaysBounceVertical
            contentContainerStyle={{
              display: 'flex',
              justifyContent: 'center',
              flexGrow: 1,
            }}
            showsVerticalScrollIndicator={false}
          >
            <EnclosingView>
              <CloseModal>
                <CloseIcon onPress={onClose}>
                  <AntDesign name="close" size={32} />
                </CloseIcon>
              </CloseModal>
              <Logo />
              <SocialLogin isFromModal onConfirm={onConfirm} setLoading={setSocialLoading} />
              {socialLoading ? (
                <SocialLoading />
              ) : pageToShow === 'register' ? (
                <RegisterManual changeModule={setPageToShow} isFromModal onConfirm={onConfirm} />
              ) : (
                pageToShow === 'forgotPassword' && <ForgotPassword changeModule={setPageToShow} />
              )}
            </EnclosingView>
          </LogInContainer>
        </KeyboardAvoidingView>
      </PopUpContainer>
    </Modal>
  );
};

export default LoginModal;
