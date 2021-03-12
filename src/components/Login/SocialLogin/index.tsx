import { useTheme } from 'styled-components';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import FacebookButton from '../../shared/FacebookButton';
import GoogleButton from '../../shared/GoogleButton';

import { SocialLoginWrapper, SocialLoginButton } from './styles';

interface SocialLoginProps {}

const SocialLogin: React.FunctionComponent<SocialLoginProps> = () => {
  const theme = useTheme();

  return (
    <SocialLoginWrapper>
      <SocialLoginButton>
        <AntDesign color={theme.colors.textPrimary} name="apple1" size={40} />
      </SocialLoginButton>
      <GoogleButton />
      <FacebookButton />
    </SocialLoginWrapper>
  );
};

export default SocialLogin;
