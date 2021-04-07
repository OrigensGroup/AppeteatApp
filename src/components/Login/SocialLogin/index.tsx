import React from 'react';

import FacebookButton from '../../shared/FacebookButton';
import GoogleButton from '../../shared/GoogleButton';
import AppleButton from '../../shared/AppleButton';

import { SocialLoginWrapper } from './styles';

interface SocialLoginProps {
  setLoading: (b: boolean) => void;
}

const SocialLogin: React.FunctionComponent<SocialLoginProps> = ({ setLoading }) => {
  return (
    <SocialLoginWrapper>
      <AppleButton setLoading={setLoading} />
      <GoogleButton setLoading={setLoading} />
      <FacebookButton setLoading={setLoading} />
    </SocialLoginWrapper>
  );
};

export default SocialLogin;
