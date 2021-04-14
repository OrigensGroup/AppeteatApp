import React from 'react';
import auth from '@react-native-firebase/auth';
import crashlytics from '@react-native-firebase/crashlytics';

import { useTheme } from 'styled-components/native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import { initUserData } from '../../../utils/manageUserdata';

import useUserData from '../../../hooks/useUserData';

import { ButtonContainer } from './styles';
import { appleLogin } from './login';

interface AppleButtonProps {
  setLoading: (b: boolean) => void;
}

const AppleButton: React.FunctionComponent<AppleButtonProps> = ({ setLoading }) => {
  const theme = useTheme();
  const { login } = useUserData();

  async function onAppleButtonPress() {
    crashlytics().log('Apple log in attempt.');

    setLoading(true);

    try {
      const appleCredential = await appleLogin();

      if (appleCredential === undefined) {
        setLoading(false);
        return;
      }

      // Sign-in the user with the credential
      auth()
        .signInWithCredential(appleCredential)
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
          crashlytics().log('Apple log in failed.');
          crashlytics().recordError(error);
        });
    } catch (e) {
      setLoading(false);
      return;
    }
  }

  return (
    <ButtonContainer onPress={onAppleButtonPress}>
      <AntDesign color={theme.colors.fixedWhite} name="apple1" size={26} />
    </ButtonContainer>
  );
};

export default AppleButton;
