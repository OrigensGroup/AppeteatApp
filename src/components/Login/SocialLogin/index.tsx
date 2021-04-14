import React from 'react';

import FacebookButton from '../../shared/FacebookButton';
import GoogleButton from '../../shared/GoogleButton';
import AppleButton from '../../shared/AppleButton';

import { SocialLoginWrapper } from './styles';

interface SocialLoginProps {
  onConfirm?: () => void;
  isFromModal?: boolean;
  setLoading: (b: boolean) => void;
}

const SocialLogin: React.FunctionComponent<SocialLoginProps> = ({ isFromModal, onConfirm, setLoading }) => {
  return (
    <SocialLoginWrapper>
      <AppleButton isFromModal={isFromModal} onConfirm={onConfirm} setLoading={setLoading} />
      <GoogleButton isFromModal={isFromModal} onConfirm={onConfirm} setLoading={setLoading} />
      <FacebookButton isFromModal={isFromModal} onConfirm={onConfirm} setLoading={setLoading} />
    </SocialLoginWrapper>
  );
};

export default SocialLogin;
