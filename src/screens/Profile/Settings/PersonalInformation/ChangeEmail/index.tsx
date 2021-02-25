import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import TextField2 from '../../../../../components/TextField2';

import { ChangeEmailContainer, ChangeEmailWrap } from './styles';

interface ChangeEmailProps {}

const ChangeEmail: React.FunctionComponent<ChangeEmailProps> = () => {
  return (
    <ChangeEmailContainer>
      <ChangeEmailWrap>
        <TextField2 icon={<MaterialIcons color="#818181" name="email" size={28} />} textContentType="none" />
      </ChangeEmailWrap>
    </ChangeEmailContainer>
  );
};

export default ChangeEmail;
