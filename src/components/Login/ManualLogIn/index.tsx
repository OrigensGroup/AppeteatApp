import React, { useState } from 'react';
import { Platform, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { useTheme } from 'styled-components';

import auth from '@react-native-firebase/auth';
import crashlytics from '@react-native-firebase/crashlytics';

import LogInTextField from '../LogInInputField';
import loginTranslations from '../../../translations/login';

import SignUpButton from './Buttons/SignUpButton';
import LogInButton from './Buttons/LogInButton';

import { ManualLogInContainer, TextFieldsWrapper, ButtonsWrapper, styles } from './styles';

interface ManualLogInProps {
  changeModule: (b: boolean) => void;
}

type LoopObject = {
  [key: string]: string | null;
};

const ManualLogIn: React.FunctionComponent<ManualLogInProps> = ({ changeModule }) => {
  const theme = useTheme();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<LoopObject>({});
  const [loading, setLoading] = useState(false);

  const register = () => {
    changeModule(false);
  };

  const singIn = () => {
    let errorCounter = 2;
    crashlytics().log('Log in attempt.');
    setLoading(true);

    if (email === '') {
      setErrors((oldErrors) => ({
        ...oldErrors,
        ['email']: loginTranslations.emailError.label,
      }));
    } else {
      setErrors((oldErrors) => ({
        ...oldErrors,
        ['email']: null,
      }));

      errorCounter = errorCounter - 1;
    }

    if (password === '') {
      setErrors((oldErrors) => ({
        ...oldErrors,
        ['password']: loginTranslations.emailError.label,
      }));
    } else {
      setErrors((oldErrors) => ({
        ...oldErrors,
        ['password']: null,
      }));

      errorCounter = errorCounter - 1;
    }

    if (errorCounter === 0) {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);

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
    }
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
            error={errors['email']}
            label={loginTranslations.emailField.label}
            placeholder={loginTranslations.emailField.placeholder}
            textContentType="emailAddress"
            updateValue={setEmail}
          />
          <LogInTextField
            error={errors['password']}
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
    </LinearGradient>
  );
};

export default ManualLogIn;
