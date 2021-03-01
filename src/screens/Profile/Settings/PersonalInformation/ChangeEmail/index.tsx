import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import LoginTextField from '../../../../../components/Shared/LoginTextField';

import { ChangeEmailContainer, ChangeEmailWrap } from './styles';

interface ChangeEmailProps { }

const ChangeEmail: React.FunctionComponent<ChangeEmailProps> = () => {
  return (
    <ChangeEmailContainer>
      <ChangeEmailWrap>
        <LoginTextField textContentType="none" icon={<MaterialIcons name="email" size={28} color="#818181" />}></LoginTextField>
      </ChangeEmailWrap>
    </ChangeEmailContainer>
  );
};

export default ChangeEmail;
