import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
//@ts-ignore
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import auth from '@react-native-firebase/auth';
import crashlytics from '@react-native-firebase/crashlytics';

import initUserData from '../../../utils/manageUserdata';

import useUserData from '../../../hooks/useUserData';

import { ButtonContainer } from './styles';

interface FacebookButtonProps {
  isFromModal?: boolean;
  onConfirm?: () => void;
  setLoading: (b: boolean) => void;
}

const FacebookButton: React.FunctionComponent<FacebookButtonProps> = ({ isFromModal, onConfirm, setLoading }) => {
  const { login } = useUserData();

  async function onFacebookButtonPress() {
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

        user
          ?.linkWithCredential(facebookCredential)
          .then(async () => {
            login();
            setLoading(false);

            onConfirm && onConfirm();
          })
          .catch((e) => {
            throw e;
          });

        return;
      }

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
    } catch (error) {
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
