import React, { useState } from 'react';
import { Platform, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import auth from '@react-native-firebase/auth';
import crashlytics from '@react-native-firebase/crashlytics';

import LogInTextField from '../LogInInputField';
import loginTranslations from '../../../translations/login';

import SignUpButton from './Buttons/SignUpButton';
import LogInButton from './Buttons/LogInButton';

import { ManualLogInContainer, TextFieldsWrapper, ButtonsWrapper } from './styles';

interface ManualLogInProps {}

const ManualLogIn: React.FunctionComponent<ManualLogInProps> = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const login = () => {
    navigation.navigate('App');
  };

  const register = () => {
    navigation.navigate('Register');
  };

  const singIn = () => {
    crashlytics().log('Log in attempt.');
    setLoading(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setLoading(false);
        login();
      })
      .catch((error) => {
        if (error.code === 'auth/invalid-email') {
          Alert.alert(loginTranslations.errorSignInEmail.label);
          return;
        }

        if (error.code === 'auth/wrong-password') {
          Alert.alert(loginTranslations.errorWrongPasswordSignIn.label);
          return;
        }

        crashlytics().log('Log in failed.');
        crashlytics().recordError(error);
        console.error(error);
      });
  };

  return (
    <ManualLogInContainer>
      <TextFieldsWrapper behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <LogInTextField
          label={loginTranslations.emailField.label}
          placeholder={loginTranslations.emailField.placeholder}
          textContentType="emailAddress"
          updateValue={setEmail}
        />
        <LogInTextField
          label={loginTranslations.passwordField.label}
          placeholder={loginTranslations.passwordField.placeholder}
          secondary
          textContentType="password"
          updateValue={setPassword}
        />
      </TextFieldsWrapper>
      <ButtonsWrapper>
        <LogInButton loading={loading} onClick={singIn} text={loginTranslations.loginButton.label} />
        <SignUpButton
          buttonText={loginTranslations.signUpSection.buttonLabel}
          onClick={register}
          text={loginTranslations.signUpSection.label}
        />
      </ButtonsWrapper>
    </ManualLogInContainer>
  );
};

export default ManualLogIn;
