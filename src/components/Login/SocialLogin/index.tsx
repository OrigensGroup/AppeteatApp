import { useTheme } from 'styled-components';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { SocialLoginWrapper, SocialLoginButton } from './styles';
import FacebookButton from '../../Shared/FacebookButton';
import GoogleButton from '../../Shared/GoogleButton';

interface SocialLoginProps {}

const SocialLogin: React.FunctionComponent<SocialLoginProps> = () => {
  const theme = useTheme();

  return (
    <SocialLoginWrapper>
      <SocialLoginButton>
        <AntDesign name="apple1" size={40} color={theme.colors.loginBottom} />
      </SocialLoginButton>
      <GoogleButton />
      <FacebookButton />
    </SocialLoginWrapper>
  );
};

export default SocialLogin;
