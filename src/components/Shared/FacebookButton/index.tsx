import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
// @ts-ignore
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import auth from '@react-native-firebase/auth';
import crashlytics from '@react-native-firebase/crashlytics';

import initUserData from '../../../utils/manageUserdata';

import useUserData from '../../../hooks/useUserData';

import { ButtonContainer } from './styles';
import { Alert } from 'react-native';
import loginTranslations from '../../../translations/login';

interface FacebookButtonProps {
  isFromModal?: boolean;
  onConfirm?: () => void;
  setLoading: (b: boolean) => void;
}

const FacebookButton: React.FunctionComponent<FacebookButtonProps> = ({ isFromModal, onConfirm, setLoading }) => {
  const { login } = useUserData();

  async function onFacebookButtonPress() {
    let linkedAccount: boolean | undefined | null | void = false;

    crashlytics().log('Facebook log in attempt.');

    // Attempt login with permissions
    try {
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

      setLoading(true);

      if (result.isCancelled) {
        setLoading(false);
        throw 'User cancelled the login process';
      }

      // Once signed in, get the users AccesToken
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        setLoading(false);
        throw 'Something went wrong obtaining access token';
      }

      // Create a Firebase credential with the AccessToken
      const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

      if (isFromModal) {
        const user = auth().currentUser;

        linkedAccount = await user
          ?.linkWithCredential(facebookCredential)
          .then(async () => {
            login();
            setLoading(false);

            onConfirm && onConfirm();
            return;
          })
          .catch((e) => {
            if (e.code !== 'auth/credential-already-in-use') {
              throw e;
            }
          });
      }
      if (!linkedAccount) {
        // Sign-in the user with the credential
        auth()
          .signInWithCredential(facebookCredential)
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
          .catch((e) => {
            throw e;
          });
      }
    } catch (error) {
      if (error.code === 'auth/credential-already-in-use') {
        Alert.alert(
          loginTranslations.errorWrongPasswordSignIn.label,
          loginTranslations.errorWrongPasswordSignIn.message,
        );
      }
      crashlytics().log('Facebook log in failed.');
      crashlytics().recordError(error);
    }
  }

  return (
    <ButtonContainer onPress={onFacebookButtonPress}>
      <Entypo color="#4267B2" name="facebook" size={48} />
    </ButtonContainer>
  );
};

export default FacebookButton;
