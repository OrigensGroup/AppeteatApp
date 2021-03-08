import React from 'react';
import auth from '@react-native-firebase/auth';
import {  ButtonContainer, GoogleImage } from './styles';
import { GoogleSignin } from '@react-native-community/google-signin';
import { useNavigation } from '@react-navigation/core';

GoogleSignin.configure({
  webClientId: '462697324514-ukkeh7qnmf3gvc14e0klftv2h5onquf2.apps.googleusercontent.com',
});

interface GoogleButtonProps {
   onClick?: () => void;
}

const GoogleButton: React.FunctionComponent<GoogleButtonProps> = ({ onClick }) => {
  const navigation = useNavigation();
  const login = () => {
        navigation.navigate('App');
    };
async function onGoogleButtonPress() {
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

  return (
    <ButtonContainer onPress={() => onGoogleButtonPress().then(() => login())}>
      <GoogleImage source={require('./../../../img/google.png')} />
    </ButtonContainer>
  );
};

export default GoogleButton;
