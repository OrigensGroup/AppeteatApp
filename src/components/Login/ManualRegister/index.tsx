import React, { useState } from 'react';
import loginTranslations from '../../../translations/login';
import LogInButton from '../ManualLogIn/Buttons/LogInButton';
import SignUpButton from '../ManualLogIn/Buttons/SignUpButton';
import { useNavigation } from '@react-navigation/native';
import LogInInputField from '../LogInInputField';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

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
          updateValue={setUsername}
          label={loginTranslations.nameField.label}
          placeholder={loginTranslations.nameField.placeholder}
          textContentType="none"
          error={errors['username']}
        />
        <LogInInputField
          updateValue={setEmail}
          label={loginTranslations.emailField.label}
          placeholder={loginTranslations.emailField.placeholder}
          textContentType="emailAddress"
        />
        <PasswordsWrapper>
          <LogInInputField
            updateValue={setPassword}
            label={loginTranslations.passwordField.label}
            placeholder={loginTranslations.passwordField.placeholder}
            textContentType="password"
            error={errors['passwordLenght'] || errors['passwordSpecialCharacters']}
          />
          <PasswordSeparator />
          <LogInInputField
            updateValue={setConfirmPassword}
            label={loginTranslations.passwordField.secondaryLabel}
            placeholder={loginTranslations.passwordField.placeholder}
            textContentType="password"
            error={errors['confirmPassword']}
          />
        </PasswordsWrapper>
      </TextFieldsWrapper>
      <LogInSection>
        <LogInButton onClick={createUser} text={loginTranslations.RegisterButton.label} />
        <SignUpButton
          onClick={login}
          text={loginTranslations.SignInSection.label}
          buttonText={loginTranslations.SignInSection.buttonLabel}
        />
      </LogInSection>
    </ManualLogInContainer>
  );
};

export default RegisterManual;
