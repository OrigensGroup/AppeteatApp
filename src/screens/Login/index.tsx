import React from 'react';
import { useNavigation } from '@react-navigation/native';

import LogInButton from '../../components/Login/Buttons/LogInButton';
import TextField from '../../components/Shared/TextField';

import loginTranslations from '../../translations/login';

import { TextFieldWrapper, LoginContainer, LogInContainer, RegisterContainer, RegisterText } from './styles';

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
          textContentType="emailAddress"
        />
      </TextFieldWrapper>
      <TextFieldWrapper>
        <TextField
          label={loginTranslations.passwordField.label}
          placeholder={loginTranslations.passwordField.placeholder}
          textContentType="password"
        />
      </TextFieldWrapper>
      <LogInContainer>
        <LogInButton onClick={login} text={loginTranslations.loginButton.label} />
      </LogInContainer>
      <RegisterContainer>
        <RegisterText>{loginTranslations.signUpSection.label}</RegisterText>
        <LogInButton onClick={login} secondary text={loginTranslations.signUpSection.buttonLabel} />
      </RegisterContainer>
    </LoginContainer>
  );
};

export default Login;
