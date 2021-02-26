import React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import TextField2 from '../../../../../components/TextField2';

import { ChangeNameContainer, ChangeNameWrap } from './styles';

interface ChangeNameProps {}

const ChangeName: React.FunctionComponent<ChangeNameProps> = () => {
  return (
    <ChangeNameContainer>
      <ChangeNameWrap>
        <TextField2
          textContentType="none"
          icon={<MaterialCommunityIcons name="account" size={28} color="#818181" />}
        ></TextField2>
      </ChangeNameWrap>
    </ChangeNameContainer>
  );
};

export default ChangeName;
