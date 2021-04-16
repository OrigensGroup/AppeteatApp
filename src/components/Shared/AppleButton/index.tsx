import React from 'react';
import { Platform } from 'react-native';
import auth from '@react-native-firebase/auth';
import crashlytics from '@react-native-firebase/crashlytics';

import { useTheme } from 'styled-components/native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import { initUserData } from '../../../utils/manageUserdata';

import useUserData from '../../../hooks/useUserData';

import { ButtonContainer } from './styles';
import { appleLogin } from './login';

interface AppleButtonProps {
  onConfirm?: () => void;
  isFromModal?: boolean;
  setLoading: (b: boolean) => void;
}

const AppleButton: React.FunctionComponent<AppleButtonProps> = ({ isFromModal, onConfirm, setLoading }) => {
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

      if (isFromModal) {
        const user = auth().currentUser;

        user
          ?.linkWithCredential(appleCredential)
          .then(async () => {
            login();

            onConfirm && onConfirm();
          })
          .catch((e) => {
            throw e;
          });

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
        .catch((e) => {
          throw e;
        });
    } catch (e) {
      setLoading(false);
      crashlytics().log('Apple log in failed.');
      crashlytics().recordError(e);
    }
  }

  return Platform.OS === 'ios' ? (
    <ButtonContainer onPress={onAppleButtonPress}>
      <AntDesign color={theme.colors.fixedWhite} name="apple1" size={26} />
    </ButtonContainer>
  ) : (
    <></>
  );
};

export default AppleButton;
