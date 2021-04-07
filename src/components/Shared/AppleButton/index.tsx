import React from 'react';
import auth from '@react-native-firebase/auth';
import crashlytics from '@react-native-firebase/crashlytics';
import { appleAuth } from '@invertase/react-native-apple-authentication';

import { useTheme } from 'styled-components/native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import { initUserData } from '../../../utils/manageUserdata';

import { ButtonContainer } from './styles';

interface AppleButtonProps {
  setLoading: (b: boolean) => void;
}

const AppleButton: React.FunctionComponent<AppleButtonProps> = ({ setLoading }) => {
  const theme = useTheme();

  async function onAppleButtonPress() {
    console.log('Apple login');
    crashlytics().log('Apple log in attempt.');

    // Start the sign-in request
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });

    console.log(appleAuthRequestResponse);

    // Ensure Apple returned a user identityToken
    if (!appleAuthRequestResponse.identityToken) {
      throw 'Apple Sign-In failed - no identify token returned';
    }

    setLoading(true);
    // Create a Firebase credential from the response
    const { identityToken, nonce } = appleAuthRequestResponse;
    const appleCredential = auth.AppleAuthProvider.credential(identityToken, nonce);

    // Sign-in the user with the credential
    auth()
      .signInWithCredential(appleCredential)
      .then(() => {
        setLoading(false);
        const user = auth().currentUser;

        console.log('user login', user);

        if (user) {
          initUserData(user.uid);
        } else {
          crashlytics().log("Couldn't setup user db");
        }
      })
      .catch((error) => {
        crashlytics().log('Apple log in failed.');
        crashlytics().recordError(error);
      });
  }

  return (
    <ButtonContainer onPress={onAppleButtonPress}>
      <AntDesign color={theme.colors.textPrimary} name="apple1" size={48} />
    </ButtonContainer>
  );
};

export default AppleButton;
