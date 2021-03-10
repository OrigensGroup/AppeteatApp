import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';

import { ButtonContainer } from './styles';

interface AppleButtonProps {
  onClick?: () => void;
}

const AppleButton: React.FunctionComponent<AppleButtonProps> = () => {
  return (
    <ButtonContainer>
      <AntDesign color="#000" name="apple1" size={50} />
    </ButtonContainer>
  );
};

export default AppleButton;
