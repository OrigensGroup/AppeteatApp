import React from 'react';

import { Platform } from 'react-native';

import Logo from '../../components/Login/Logo';
import SocialLogin from '../../components/Login/SocialLogin';
import RegisterManual from '../../components/Login/ManualRegister';

import { SafeAreaViewTop, LogInContainer, KeyboardAvoidingView, EnclosingView } from './styles';

interface RegisterProps {}

const Register: React.FunctionComponent<RegisterProps> = () => {
  return (
    <>
      <SafeAreaViewTop />
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'position' : 'height'}>
        <LogInContainer
          alwaysBounceVertical
          contentContainerStyle={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <EnclosingView>
            <Logo />
            <SocialLogin />
            <RegisterManual />
          </EnclosingView>
        </LogInContainer>
      </KeyboardAvoidingView>
    </>
  );
};

export default Register;
