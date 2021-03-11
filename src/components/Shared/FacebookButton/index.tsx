import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import auth from '@react-native-firebase/auth';
import crashlytics from '@react-native-firebase/crashlytics';

import { ButtonContainer } from './styles';

interface FacebookButtonProps {}

const FacebookButton: React.FunctionComponent<FacebookButtonProps> = () => {
  async function onFacebookButtonPress() {
    crashlytics().log('Facebook log in attempt.');
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

    // Sign-in the user with the credential
    return auth()
      .signInWithCredential(facebookCredential)
      .catch((error) => {
        crashlytics().log('Facebook log in failed.');
        crashlytics().recordError(error);
      });
  }

  return (
    <ButtonContainer onPress={onFacebookButtonPress}>
      <Entypo color="#4267B2" name="facebook" size={50} />
    </ButtonContainer>
  );
};

export default FacebookButton;
