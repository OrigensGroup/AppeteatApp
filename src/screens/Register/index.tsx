import React from 'react';
import Logo from '../../components/Login/Logo'
import SocialLogin from '../../components/Login/SocialLogin'
import RegisterManual from '../../components/Login/Register/'
import { Platform } from 'react-native';

import {
  SafeAreaViewTop,
  SafeAreaViewBottom,
  LogInContainer,
  KeyboardAvoidingView,
  EnclosingView
} from './styles';

interface RegisterProps { }

const Register: React.FunctionComponent<RegisterProps> = () => {

  return (
    <>
      <SafeAreaViewTop />
      <SafeAreaViewBottom>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "position" : "height"}>
          <LogInContainer
            alwaysBounceVertical
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
            <EnclosingView>
              <Logo />
              <SocialLogin />
              <RegisterManual />
            </EnclosingView>
          </LogInContainer>
        </KeyboardAvoidingView>
      </SafeAreaViewBottom>
    </>
  );
};

export default Register;
