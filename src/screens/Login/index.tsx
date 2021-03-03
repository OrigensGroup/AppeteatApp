import React from 'react';
import { useNavigation } from '@react-navigation/native';
import LogInButton from '../../components/Login/Buttons/LogInButton';
import Fontisto from "react-native-vector-icons/Fontisto";
import Feather from "react-native-vector-icons/Feather";
import TextField from '../../components/Shared/LoginTextField';
import loginTranslations from '../../translations/login';
import { TextFieldWrapper, LoginContainer, LogInContainer, RegisterContainer, RegisterText, UpperContent, BottomContent, LogoImage, LogoContainer, IconWrap, SocialLogin } from './styles';

import FacebookButton from '../../components/Shared/FacebookButton';
import GoogleButton from '../../components/Shared/GoogleButton';
import AppleButton from '../../components/Shared/AppleButton';


interface LoginProps { }

const Login: React.FunctionComponent<LoginProps> = () => {
  const navigation = useNavigation();

  const login = () => {
    navigation.navigate('App');
  };
  
  return (
    <LoginContainer>
      <UpperContent>
        <LogoContainer><LogoImage source={require('../../img/Logo.png')} /></LogoContainer>
        <SocialLogin>
          <AppleButton />
          <GoogleButton />
          <FacebookButton />
        </SocialLogin>
      </UpperContent>
      <BottomContent>
        <TextFieldWrapper>
          <TextField
            icon={<IconWrap><Fontisto name="email" size={28} color="#fff" /></IconWrap>}
            placeholder={loginTranslations.emailField.placeholder}
            textContentType="emailAddress"
          />
        </TextFieldWrapper>
        <TextFieldWrapper>
          <TextField
            icon={<IconWrap><Feather name="lock" size={28} color="#fff" /></IconWrap>}
            placeholder={loginTranslations.passwordField.placeholder}
            textContentType="password"
          />
        </TextFieldWrapper>
        <LogInContainer>
          <LogInButton onClick={login} text={loginTranslations.loginButton.label} />
        </LogInContainer>
        <RegisterContainer>
          <RegisterText>{loginTranslations.signUpSection.label}<LogInButton onClick={() => navigation.navigate('Register')} secondary text={loginTranslations.signUpSection.buttonLabel} /></RegisterText>
        </RegisterContainer>
      </BottomContent>
    </LoginContainer>
  );
};

export default Login;
