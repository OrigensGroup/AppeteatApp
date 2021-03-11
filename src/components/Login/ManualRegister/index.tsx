import React, { useState } from 'react';
import { Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from 'styled-components';

import { useNavigation } from '@react-navigation/native';

import auth from '@react-native-firebase/auth';
import crashlytics from '@react-native-firebase/crashlytics';

import loginTranslations from '../../../translations/login';
import LogInButton from '../ManualLogIn/Buttons/LogInButton';
import SignUpButton from '../ManualLogIn/Buttons/SignUpButton';
import LogInInputField from '../LogInInputField';

import {
  ManualLogInContainer,
  TextFieldsWrapper,
  LogInSection,
  PasswordsWrapper,
  PasswordSeparator,
  styles,
} from './styles';

interface RegisterManualProps {}

type LoopObject = {
  [key: string]: string | null;
};

const RegisterManual: React.FunctionComponent<RegisterManualProps> = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errors, setErrors] = useState<LoopObject>({});
  const [loading, setLoading] = useState(false);

  const login = () => {
    navigation.navigate('Login');
  };

  const enter = () => {
    navigation.navigate('App');
  };

  const createUser = () => {
    setLoading(true);
    crashlytics().log('Sign in attempt.');
    let errorCounter = 4;

    if (username.length < 4) {
      setErrors((oldErrors) => ({
        ...oldErrors,
        ['username']: loginTranslations.usernameError.label,
      }));
    } else {
      setErrors((oldErrors) => ({
        ...oldErrors,
        ['username']: null,
      }));

      errorCounter = errorCounter - 1;
    }

    if (password.length < 8) {
      setErrors((oldErrors) => ({
        ...oldErrors,
        ['passwordLenght']: loginTranslations.passwordLenghtError.label,
      }));
    } else {
      setErrors((oldErrors) => ({
        ...oldErrors,
        ['passwordLenght']: null,
      }));

      errorCounter = errorCounter - 1;
    }

    if (password !== confirmPassword) {
      setErrors((oldErrors) => ({
        ...oldErrors,
        ['confirmPassword']: loginTranslations.confirmPasswordError.label,
      }));
    } else {
      setErrors((oldErrors) => ({
        ...oldErrors,
        ['confirmPassword']: null,
      }));

      errorCounter = errorCounter - 1;
    }

    if (new RegExp('^(?=(.*[a-z])(?=(.*[d]){1,}){1,})(?!.*s).{8,}$').test(password)) {
      setErrors((oldErrors) => ({
        ...oldErrors,
        ['passwordSpecialCharacters']: loginTranslations.invalidPasswordError.label,
      }));
    } else {
      setErrors((oldErrors) => ({
        ...oldErrors,
        ['passwordSpecialCharacters']: null,
      }));

      errorCounter = errorCounter - 1;
    }

    if (errorCounter === 0) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          setLoading(false);
          enter();
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert(loginTranslations.emailAlreayInUse.label);
            return;
          }

          if (error.code === 'auth/invalid-email') {
            Alert.alert(loginTranslations.errorSignInEmail.label);
            return;
          }

          crashlytics().log('Sign in failed.');
          crashlytics().recordError(error);
          console.error(error);
        });
    } else {
      setLoading(false);
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
        <TextFieldsWrapper>
          <LogInInputField
            error={errors['username']}
            label={loginTranslations.nameField.label}
            placeholder={loginTranslations.nameField.placeholder}
            textContentType="none"
            updateValue={setUsername}
          />
          <LogInInputField
            label={loginTranslations.emailField.label}
            placeholder={loginTranslations.emailField.placeholder}
            textContentType="emailAddress"
            updateValue={setEmail}
          />
          <PasswordsWrapper>
            <LogInInputField
              error={errors['passwordLenght'] || errors['passwordSpecialCharacters']}
              label={loginTranslations.passwordField.label}
              placeholder={loginTranslations.passwordField.placeholder}
              textContentType="password"
              updateValue={setPassword}
            />
            <PasswordSeparator />
            <LogInInputField
              error={errors['confirmPassword']}
              label={loginTranslations.passwordField.secondaryLabel}
              placeholder={loginTranslations.passwordField.placeholder}
              textContentType="password"
              updateValue={setConfirmPassword}
            />
          </PasswordsWrapper>
        </TextFieldsWrapper>
        <LogInSection>
          <LogInButton loading={loading} onClick={createUser} text={loginTranslations.RegisterButton.label} />
          <SignUpButton
            buttonText={loginTranslations.SignInSection.buttonLabel}
            onClick={login}
            text={loginTranslations.SignInSection.label}
          />
        </LogInSection>
      </ManualLogInContainer>
    </LinearGradient>
  );
};

export default RegisterManual;
