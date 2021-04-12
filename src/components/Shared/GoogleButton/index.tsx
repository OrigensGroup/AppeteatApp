import React from 'react';
import auth from '@react-native-firebase/auth';
import crashlytics from '@react-native-firebase/crashlytics';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

import initUserData from '../../../utils/manageUserdata';

import useUserData from '../../../hooks/useUserData';

import Config from '../../../utils/config';

import { ButtonContainer, GoogleImage } from './styles';

GoogleSignin.configure({
  webClientId: Config.GOOGLE_WEBCLIENT_ID,
});

interface GoogleButtonProps {
  setLoading: (b: boolean) => void;
}

const GoogleButton: React.FunctionComponent<GoogleButtonProps> = ({ setLoading }) => {
  const { login } = useUserData();

  async function onGoogleButtonPress() {
    crashlytics().log('Google log in attempt.');
    // Get the users ID token

    const { idToken } = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    setLoading(true);

    // Sign-in the user with the credential
    auth()
      .signInWithCredential(googleCredential)
      .then(async () => {
        setLoading(false);
        const user = auth().currentUser;

        if (user) {
          await initUserData(user.uid);
          login();
        } else {
          crashlytics().log("Couldn't setup user db");
        }
      })
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
