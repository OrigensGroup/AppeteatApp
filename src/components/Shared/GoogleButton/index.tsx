import React from 'react';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import auth from '@react-native-firebase/auth';
import {  ButtonContainer, GoogleImage } from './styles';

interface GoogleButtonProps {
   onClick?: () => void;
}

const GoogleButton: React.FunctionComponent<GoogleButtonProps> = ({ onClick }) => {


  return (
    <ButtonContainer >
      <GoogleImage source={require('./../../../img/google.png')} />
    </ButtonContainer>
  );
};

export default GoogleButton;
