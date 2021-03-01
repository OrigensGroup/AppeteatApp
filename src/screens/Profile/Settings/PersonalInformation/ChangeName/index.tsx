import React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import LoginTextField from '../../../../../components/Shared/LoginTextField';

import { ChangeNameContainer, ChangeNameWrap } from './styles';

interface ChangeNameProps { }

const ChangeName: React.FunctionComponent<ChangeNameProps> = () => {
  return (
    <ChangeNameContainer>
      <ChangeNameWrap>
        <LoginTextField
          textContentType="none"
          icon={<MaterialCommunityIcons name="account" size={28} color="#818181" />}
        ></LoginTextField>
      </ChangeNameWrap>
    </ChangeNameContainer>
  );
};

export default ChangeName;
