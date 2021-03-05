import React from 'react';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import auth from '@react-native-firebase/auth';
import {  ButtonContainer } from './styles';
import AntDesign from "react-native-vector-icons/AntDesign";

interface AppleButtonProps {
   onClick?: () => void;
}

const AppleButton: React.FunctionComponent<AppleButtonProps> = ({ onClick }) => {


  return (
    <ButtonContainer>
      <AntDesign name="apple1" size={50} color="#000" />
    </ButtonContainer>
  );
};

export default AppleButton;
