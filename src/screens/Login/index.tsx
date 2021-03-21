import React, { useState } from 'react';

import { Platform } from 'react-native';

import Logo from '../../components/Login/Logo';
import SocialLogin from '../../components/Login/SocialLogin';
import ManualLogIn from '../../components/Login/ManualLogIn';

import RegisterManual from '../../components/Login/ManualRegister';

import ForgotPassword from '../../components/Login/ForgotPassword';

import { SafeAreaViewTop, KeyboardAvoidingView, LogInContainer, EnclosingView } from './styles';

interface LoginProps {}

const Login: React.FunctionComponent<LoginProps> = () => {
  const [pageToShow, setPageToShow] = useState<'login' | 'register' | 'forgotPassword'>('login');

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
            {pageToShow === 'login' && <ManualLogIn changeModule={setPageToShow} />}
            {pageToShow === 'register' && <RegisterManual changeModule={setPageToShow} />}
            {pageToShow === 'forgotPassword' && <ForgotPassword changeModule={setPageToShow} />}
          </EnclosingView>
        </LogInContainer>
      </KeyboardAvoidingView>
    </>
  );
};

export default Login;
