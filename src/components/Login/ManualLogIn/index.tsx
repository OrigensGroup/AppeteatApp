import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { Platform, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

import LogInTextField from '../LogInInputField';
import loginTranslations from '../../../translations/login';

import SignUpButton from './Buttons/SignUpButton';
import LogInButton from './Buttons/LogInButton';

import { ManualLogInContainer, TextFieldsWrapper, ButtonsWrapper } from './styles';

interface ManualLogInProps {}

const ManualLogIn: React.FunctionComponent<ManualLogInProps> = () => {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const login = () => {
    navigation.navigate('App');
  };

  const register = () => {
    navigation.navigate('Register');
  };

  const singIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        return login();
      })
      .catch((error) => {
        if (error.code === 'auth/invalid-email') {
          Alert.alert(loginTranslations.errorSignInEmail.label);
        }

        if (error.code === 'auth/wrong-password') {
          Alert.alert(loginTranslations.errorWrongPasswordSignIn.label);
        }

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
        <LogInButton onClick={singIn} text={loginTranslations.loginButton.label} />
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
