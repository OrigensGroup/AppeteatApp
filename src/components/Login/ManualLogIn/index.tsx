import React, { useState } from 'react';
import loginTranslations from '../../../translations/login';
import LogInButton from './Buttons/LogInButton';
import SignUpButton from './Buttons/SignUpButton';
import { useNavigation } from '@react-navigation/native';
import LogInTextField from '../LogInInputField';
import { Platform } from 'react-native';
import auth from '@react-native-firebase/auth';

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
          console.log('That email address is invalid!');
        }

        if (error.code === 'auth/wrong-password') {
          console.log('Email or password invalid');
        }

        console.error(error);
      });
  };

  return (
    <ManualLogInContainer>
      <TextFieldsWrapper behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <LogInTextField
          updateValue={setEmail}
          label={loginTranslations.emailField.label}
          placeholder={loginTranslations.emailField.placeholder}
          textContentType="emailAddress"
        />
        <LogInTextField
          updateValue={setPassword}
          label={loginTranslations.passwordField.label}
          placeholder={loginTranslations.passwordField.placeholder}
          textContentType="password"
          secondary
        />
      </TextFieldsWrapper>
      <ButtonsWrapper>
        <LogInButton onClick={singIn} text={loginTranslations.loginButton.label} />
        <SignUpButton
          onClick={register}
          text={loginTranslations.signUpSection.label}
          buttonText={loginTranslations.signUpSection.buttonLabel}
        />
      </ButtonsWrapper>
    </ManualLogInContainer>
  );
};

export default ManualLogIn;
