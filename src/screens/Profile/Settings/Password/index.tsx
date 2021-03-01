import React from 'react';

import LoginTextField from '../../../../components/Shared/LoginTextField';

import { PasswordContainer, PasswordWrap } from './styles';

interface PasswordProps { }

const Password: React.FunctionComponent<PasswordProps> = () => {
  return (
    <PasswordContainer>
      <PasswordWrap>
        <LoginTextField placeholder="Current password" textContentType="password"></LoginTextField>
        <LoginTextField placeholder="New password" textContentType="password"></LoginTextField>
        <LoginTextField placeholder="Re-enter new password" textContentType="password"></LoginTextField>
      </PasswordWrap>
    </PasswordContainer>
  );
};

export default Password;
