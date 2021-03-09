import React from 'react';
import { useNavigation } from '@react-navigation/native';
import LogInButton from '../../components/Login/Buttons/LogInButton';
import Fontisto from "react-native-vector-icons/Fontisto";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import TextField from '../../components/Shared/LoginTextField';
import loginTranslations from '../../translations/login';
import { AppleButton } from '@invertase/react-native-apple-authentication';
import { TextFieldWrapper, LoginContainer, LogInContainer, RegisterContainer, RegisterText, UpperContent, BottomContent, LogoImage, LogoContainer, IconWrap, SocialLogin } from './styles';
import { Alert } from 'react-native';

interface LoginProps { }

const Login: React.FunctionComponent<LoginProps> = () => {
  const navigation = useNavigation();

  const login = () => {
    navigation.navigate('App');
  };

  return (
    <LoginContainer>
      <UpperContent>
        <LogoContainer><LogoImage source={require('../../img/logo.png')} /></LogoContainer>
        <SocialLogin>
          <AntDesign name="apple1" size={40} color="#000" />
          <AntDesign name="google" size={40} color="#000" />
          <AntDesign name="facebook-square" size={40} color="#000" />
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
