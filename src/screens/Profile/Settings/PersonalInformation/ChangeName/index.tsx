import React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ChangeInfo from '../../../../../components/Profile/ChangeInfo';



interface ChangeNameProps {}

const ChangeName: React.FunctionComponent<ChangeNameProps> = () => {
  return (
    <ChangeInfo icon={<MaterialCommunityIcons name="account" size={28} color="#818181" />} />     
  );
};

export default ChangeName;
