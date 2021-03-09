import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import auth from '@react-native-firebase/auth';

import { Alert } from 'react-native';

import loginTranslations from '../../../translations/login';
import LogInButton from '../ManualLogIn/Buttons/LogInButton';
import SignUpButton from '../ManualLogIn/Buttons/SignUpButton';
import LogInInputField from '../LogInInputField';

import { ManualLogInContainer, TextFieldsWrapper, LogInSection, PasswordsWrapper, PasswordSeparator } from './styles';

interface RegisterManualProps {}

type LoopObject = {
  [key: string]: string | null;
};

const RegisterManual: React.FunctionComponent<RegisterManualProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errors, setErrors] = useState<LoopObject>({});

  const navigation = useNavigation();

  const login = () => {
    navigation.navigate('Login');
  };

  const enter = () => {
    navigation.navigate('App');
  };

  const createUser = () => {
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

    if (new RegExp('^(.{0,7}|[^0-9]*|[^a-z]*|[a-z0-9]*)$').test(password)) {
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
          return enter();
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert(loginTranslations.emailAlreayInUse.label);
          }

          if (error.code === 'auth/invalid-email') {
            Alert.alert(loginTranslations.errorSignInEmail.label);
          }

          console.error(error);
        });
    }
  };

  return (
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
        <LogInButton onClick={createUser} text={loginTranslations.RegisterButton.label} />
        <SignUpButton
          buttonText={loginTranslations.SignInSection.buttonLabel}
          onClick={login}
          text={loginTranslations.SignInSection.label}
        />
      </LogInSection>
    </ManualLogInContainer>
  );
};

export default RegisterManual;
