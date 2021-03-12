import React from 'react';
import auth from '@react-native-firebase/auth';
import crashlytics from '@react-native-firebase/crashlytics';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { ButtonContainer, GoogleImage } from './styles';

GoogleSignin.configure({
  webClientId: '462697324514-ukkeh7qnmf3gvc14e0klftv2h5onquf2.apps.googleusercontent.com',
});

interface GoogleButtonProps {}

const GoogleButton: React.FunctionComponent<GoogleButtonProps> = () => {
  async function onGoogleButtonPress() {
    crashlytics().log('Google log in attempt.');
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth()
      .signInWithCredential(googleCredential)
      .catch((error) => {
        crashlytics().log('Google log in failed.');
        crashlytics().recordError(error);
      });
  }

  return (
    <ButtonContainer onPress={onGoogleButtonPress}>
      <GoogleImage source={require('./../../../img/google.png')} />
    </ButtonContainer>
  );
};

export default GoogleButton;
