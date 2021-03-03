import React from 'react';
import Logo from '../../components/Login/Logo'
import SocialLogin from '../../components/Login/SocialLogin'
import ManualLogIn from '../../components/Login/ManualLogIn'


import {
  SafeAreaViewTop,
  SafeAreaViewBottom,
  Background,
} from './styles';
import { Platform } from 'react-native';


interface LoginProps { }


const Login: React.FunctionComponent<LoginProps> = () => {
  return (
    <>
      <SafeAreaViewTop />
      <SafeAreaViewBottom>
        <Background>
          <Logo />
          <SocialLogin />
          <ManualLogIn />
        </Background>
      </SafeAreaViewBottom>
    </>
  );
};

export default Login;
