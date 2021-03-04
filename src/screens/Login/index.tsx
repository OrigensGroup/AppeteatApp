import React from 'react';
import Logo from '../../components/Login/Logo'
import SocialLogin from '../../components/Login/SocialLogin'
import ManualLogIn from '../../components/Login/ManualLogIn'
import { Platform } from 'react-native';

import {
  SafeAreaViewTop,
  SafeAreaViewBottom,
  KeyboardAvoidingView,
  LogInContainer,
  EnclosingView
} from './styles';

interface LoginProps { }


const Login: React.FunctionComponent<LoginProps> = () => {
  return (
    // <>
    //   <SafeAreaViewTop />
    //   <SafeAreaViewBottom>
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "position" : "height"}>
      <LogInContainer
        alwaysBounceVertical
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
        <EnclosingView>
          <Logo />
          <SocialLogin />
          <ManualLogIn />
        </EnclosingView>
      </LogInContainer>
    </KeyboardAvoidingView>
    //   </SafeAreaViewBottom>
    // </>
  );
};

export default Login;
