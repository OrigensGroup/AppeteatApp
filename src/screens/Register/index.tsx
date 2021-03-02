import React from 'react';
import Logo from '../../components/Login/Logo'
import SocialLogin from '../../components/Login/SocialLogin'
import RegisterManual from '../../components/Login/Register/'

import {
  SafeAreaViewTop,
  SafeAreaViewBottom,
  Background
} from './styles';

interface RegisterProps { }

const Register: React.FunctionComponent<RegisterProps> = () => {

  return (
    <>
      <SafeAreaViewTop />
      <SafeAreaViewBottom>
        <Background>
          <Logo />
          <SocialLogin />
          <RegisterManual />
        </Background>
      </SafeAreaViewBottom>
    </>
  );
};

export default Register;
