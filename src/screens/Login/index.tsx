import React from 'react';

import { Platform } from 'react-native';

import Logo from '../../components/Login/Logo';
import SocialLogin from '../../components/Login/SocialLogin';
import ManualLogIn from '../../components/Login/ManualLogIn';

import { SafeAreaViewTop, KeyboardAvoidingView, LogInContainer, EnclosingView } from './styles';

interface LoginProps {}

const Login: React.FunctionComponent<LoginProps> = () => {
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
            <ManualLogIn />
          </EnclosingView>
        </LogInContainer>
      </KeyboardAvoidingView>
    </>
  );
};

export default Login;
