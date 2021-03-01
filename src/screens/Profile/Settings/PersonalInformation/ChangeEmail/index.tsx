import React from 'react';

import Fontisto from 'react-native-vector-icons/Fontisto';
import ChangeInfo from '../../../../../components/Profile/ChangeInfo';


interface ChangeEmailProps {}

const ChangeEmail: React.FunctionComponent<ChangeEmailProps> = () => {
  return (
    <ChangeInfo icon={<Fontisto name="email" size={28} color="#818181" />} />
      
  );
};

export default ChangeEmail;
