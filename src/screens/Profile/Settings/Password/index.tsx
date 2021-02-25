import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import TextField2 from '../../../../components/TextField2';

import { PasswordContainer, PasswordWrap } from './styles';

interface PasswordProps {}

const Password: React.FunctionComponent<PasswordProps> = () => {
  return (
    <PasswordContainer>
      <PasswordWrap>
        <TextField2 placeholder="Current password" textContentType="password" />
        <TextField2 placeholder="New password" textContentType="password" />
        <TextField2 placeholder="Re-enter new password" textContentType="password" />
      </PasswordWrap>
    </PasswordContainer>
  );
};

export default Password;
