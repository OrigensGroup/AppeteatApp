import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import auth from '@react-native-firebase/auth';
import crashlytics from '@react-native-firebase/crashlytics';

import initUserData from '../../../utils/manageUserdata';

import { ButtonContainer } from './styles';

interface FacebookButtonProps {
  setLoading: (b: boolean) => void;
}

const FacebookButton: React.FunctionComponent<FacebookButtonProps> = ({ setLoading }) => {
  async function onFacebookButtonPress() {
    crashlytics().log('Facebook log in attempt.');
    // Attempt login with permissions
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

    // Sign-in the user with the credential
    auth()
      .signInWithCredential(facebookCredential)
      .then(() => {
        setLoading(false);
        const user = auth().currentUser;

        if (user) {
          initUserData(user.uid);
        } else {
          crashlytics().log("Couldn't setup user db");
        }
      })
      .catch((error) => {
        crashlytics().log('Facebook log in failed.');
        crashlytics().recordError(error);
      });
  }

  return (
    <ButtonContainer onPress={onFacebookButtonPress}>
      <Entypo color="#4267B2" name="facebook" size={48} />
    </ButtonContainer>
  );
};

export default FacebookButton;
