import React, { useState } from 'react';

import { Platform } from 'react-native';

import Logo from '../../components/Login/Logo';
import SocialLogin from '../../components/Login/SocialLogin';
import ManualLogIn from '../../components/Login/ManualLogIn';

import RegisterManual from '../../components/Login/ManualRegister';

import { SafeAreaViewTop, KeyboardAvoidingView, LogInContainer, EnclosingView } from './styles';

interface LoginProps {}

const Login: React.FunctionComponent<LoginProps> = () => {
  const [isLogin, setIsLogin] = useState(true);

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
            {isLogin ? <ManualLogIn changeModule={setIsLogin} /> : <RegisterManual changeModule={setIsLogin} />}
          </EnclosingView>
        </LogInContainer>
      </KeyboardAvoidingView>
    </>
  );
};

export default Login;
