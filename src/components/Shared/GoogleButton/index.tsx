import React from 'react';
import auth from '@react-native-firebase/auth';
import crashlytics from '@react-native-firebase/crashlytics';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { Alert } from 'react-native';
import initUserData from '../../../utils/manageUserdata';

import useUserData from '../../../hooks/useUserData';

import Config from '../../../utils/config';

import { ButtonContainer, GoogleImage } from './styles';
import loginTranslations from '../../../translations/login';

GoogleSignin.configure({
  webClientId: Config.GOOGLE_WEBCLIENT_ID,
});

interface GoogleButtonProps {
  isFromModal?: boolean;
  onConfirm?: () => void;
  setLoading: (b: boolean) => void;
}

const GoogleButton: React.FunctionComponent<GoogleButtonProps> = ({ isFromModal, onConfirm, setLoading }) => {
  const { login } = useUserData();

  async function onGoogleButtonPress() {
    let linkedAccount: boolean | undefined | null | void = false;

    crashlytics().log('Google log in attempt.');
    // Get the users ID token

    try {
      const { idToken } = await GoogleSignin.signIn();
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      setLoading(true);

      if (isFromModal) {
        const user = auth().currentUser;

        linkedAccount = await user
          ?.linkWithCredential(googleCredential)
          .then(async () => {
            login();

            onConfirm && onConfirm();
          })
          .catch((e) => {
            if (e.code !== 'auth/credential-already-in-use') {
              throw e;
            }
          });

        setLoading(false);
      }
      if (!linkedAccount) {
        // Sign-in the user with the credential
        auth()
          .signInWithCredential(googleCredential)
          .then(async () => {
            const user = auth().currentUser;

            if (user) {
              await initUserData(user.uid);
              login();

              onConfirm && onConfirm();
            } else {
              crashlytics().log("Couldn't setup user db");
            }

            setLoading(false);
          })
          .catch((e) => {
            throw e;
          });
      }
    } catch (error) {
      console.log('Err', error);
      if (error.code === 'auth/credential-already-in-use') {
        Alert.alert(
          loginTranslations.errorWrongPasswordSignIn.label,
          loginTranslations.errorWrongPasswordSignIn.message,
        );
      }
      setLoading(false);
      crashlytics().log('Google log in failed.');
      crashlytics().recordError(error);
    }
  }

  return (
    <ButtonContainer onPress={onGoogleButtonPress}>
      <GoogleImage source={require('../../../img/google.png')} />
    </ButtonContainer>
  );
};

export default GoogleButton;
