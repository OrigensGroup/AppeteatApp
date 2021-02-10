import React from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import LogInButton from '../../components/Login/Buttons/LogInButton';
import TextField from '../../components/TextField';

import loginTranslations from '../../translations/login';

import {
  TextFieldWrapper,
  LoginContainer,
  LogInContainer,
  RegisterContainer,
  RegisterText,
} from './styles';

interface LoginProps {}

const Login: React.FunctionComponent<LoginProps> = () => {
  const navigation = useNavigation();

  const login = () => {
    navigation.navigate('App');
  };

  return (
    <LoginContainer>
      <TextFieldWrapper>
        <TextField
          label={loginTranslations.emailField.label}
          placeholder={loginTranslations.emailField.placeholder}
          textContentType='emailAddress'
        ></TextField>
      </TextFieldWrapper>
      <TextFieldWrapper>
        <TextField
          label={loginTranslations.passwordField.label}
          placeholder={loginTranslations.passwordField.placeholder}
          textContentType='password'
        ></TextField>
      </TextFieldWrapper>
      <LogInContainer>
        <LogInButton
          text={loginTranslations.loginButton.label}
          onClick={login}
        />
      </LogInContainer>
      <RegisterContainer>
        <RegisterText>{loginTranslations.signUpSection.label}</RegisterText>
        <LogInButton
          text={loginTranslations.signUpSection.buttonLabel}
          onClick={login}
          secondary
        />
      </RegisterContainer>
    </LoginContainer>
  );
};

export default Login;
