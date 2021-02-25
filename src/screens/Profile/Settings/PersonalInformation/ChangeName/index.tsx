import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import TextField2 from '../../../../../components/TextField2';

import { ChangeNameContainer, ChangeNameWrap } from './styles';

interface ChangeNameProps {}

const ChangeName: React.FunctionComponent<ChangeNameProps> = () => {
  return (
    <ChangeNameContainer>
      <ChangeNameWrap>
        <TextField2 icon={<MaterialCommunityIcons color="#818181" name="account" size={28} />} textContentType="none" />
      </ChangeNameWrap>
    </ChangeNameContainer>
  );
};

export default ChangeName;
