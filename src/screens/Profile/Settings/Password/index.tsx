import React from 'react';

import TextField2 from '../../../../components/TextField2';
import accountTranslations from '../../../../translations/account';

import { PasswordContainer } from './styles';

interface PasswordProps {}

const Password: React.FunctionComponent<PasswordProps> = () => {
  return (
    <PasswordContainer>
        <TextField2
          placeholder={accountTranslations.accountPage.currentPassword}
          textContentType="password"
        ></TextField2>
        <TextField2
          placeholder={accountTranslations.accountPage.newPassword}
          textContentType="password"
        ></TextField2>
        <TextField2
          placeholder={accountTranslations.accountPage.reNewPassword}
          textContentType="password"
        ></TextField2>
    </PasswordContainer>
  );
};

export default Password;
