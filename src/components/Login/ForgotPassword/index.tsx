import React, { useState } from 'react';
import { Platform, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { useTheme } from 'styled-components';

import auth from '@react-native-firebase/auth';
import crashlytics from '@react-native-firebase/crashlytics';

import LogInTextField from '../LogInInputField';
import loginTranslations from '../../../translations/login';

import Text from '../../shared/Text';
import LogInButton from '../Buttons/LogInButton';

import { ManualLogInContainer, TextFieldsWrapper, ButtonsWrapper, styles, GoBack } from './styles';

interface ManualLogInProps {
  changeModule: (b: 'login' | 'register' | 'forgotPassword') => void;
}

const ForgotPassword: React.FunctionComponent<ManualLogInProps> = ({ changeModule }) => {
  const theme = useTheme();

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const login = () => {
    changeModule('login');
  };

  const singIn = () => {
    crashlytics().log('Password reset attempt.');
    setLoading(true);

    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        setLoading(false);
        login();
      })
      .catch((error) => {
        setLoading(false);

        if (error.code === 'auth/invalid-email') {
          Alert.alert(loginTranslations.errorSignInEmail.label);
          return;
        }

        crashlytics().log('Password reset failed.');
        crashlytics().recordError(error);
        console.error(error);
      });
  };

  return (
    <LinearGradient
      colors={[theme.colors.active, theme.colors.secondaryActive]}
      end={{ x: 1, y: 1 }}
      start={{ x: 0, y: 0 }}
      style={styles.linearGradient}
    >
      <ManualLogInContainer>
        <TextFieldsWrapper behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <LogInTextField
            label={loginTranslations.forgotPassword.label}
            placeholder={loginTranslations.forgotPassword.placeholder}
            textContentType="emailAddress"
            updateValue={setEmail}
          />
        </TextFieldsWrapper>
        <ButtonsWrapper>
          <GoBack onPress={login}>
            <Text color="secondary" fontSize={14}>
              Go Back
            </Text>
          </GoBack>
          <LogInButton loading={loading} onClick={singIn} text="Reset password" />
        </ButtonsWrapper>
      </ManualLogInContainer>
    </LinearGradient>
  );
};

export default ForgotPassword;
