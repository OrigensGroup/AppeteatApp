import React, { useState } from 'react';
import { Platform, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Formik } from 'formik';

import { useTheme } from 'styled-components';

import auth from '@react-native-firebase/auth';
import crashlytics from '@react-native-firebase/crashlytics';

import LogInTextField from '../LogInInputField';

import SignUpButton from '../Buttons/SignUpButton';
import LogInButton from '../Buttons/LogInButton';

import loginTranslations from '../../../translations/login';

import useUserData from '../../../hooks/useUserData';

import { LoginSchema } from './loginSchema';

import { ManualLogInContainer, TextFieldsWrapper, ButtonsWrapper, styles } from './styles';

interface ManualLogInProps {
  changeModule: (b: 'login' | 'register' | 'forgotPassword') => void;
}

const ManualLogIn: React.FunctionComponent<ManualLogInProps> = ({ changeModule }) => {
  const theme = useTheme();

  const [loading, setLoading] = useState(false);
  const { setLoggedIn } = useUserData();

  const register = () => {
    changeModule('register');
  };

  const forgotPassword = () => {
    changeModule('forgotPassword');
  };

  const singIn = (email: string, password: string) => {
    crashlytics().log('Log in attempt.');
    setLoading(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setLoading(false);
        setLoggedIn(true);
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
  };

  return (
    <LinearGradient
      colors={[theme.colors.active, theme.colors.secondaryActive]}
      end={{ x: 1, y: 1 }}
      start={{ x: 0, y: 0 }}
      style={styles.linearGradient}
    >
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          singIn(values.email, values.password);
        }}
        validationSchema={LoginSchema}
      >
        {({ errors, handleChange, handleSubmit }) => (
          <ManualLogInContainer>
            <TextFieldsWrapper behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
              <LogInTextField
                error={errors['email']}
                label={loginTranslations.emailField.label}
                placeholder={loginTranslations.emailField.placeholder}
                textContentType="emailAddress"
                updateValue={handleChange('email')}
              />
              <LogInTextField
                error={errors['password']}
                label={loginTranslations.passwordField.label}
                placeholder={loginTranslations.passwordField.placeholder}
                secondary
                textContentType="password"
                updateValue={handleChange('password')}
              />
              <SignUpButton buttonText={loginTranslations.forgotPassword.cta} onClick={forgotPassword} text="" />
            </TextFieldsWrapper>
            <ButtonsWrapper>
              <LogInButton loading={loading} onClick={handleSubmit} text={loginTranslations.loginButton.label} />
              <SignUpButton
                buttonText={loginTranslations.signUpSection.buttonLabel}
                onClick={register}
                text={loginTranslations.signUpSection.label}
              />
            </ButtonsWrapper>
          </ManualLogInContainer>
        )}
      </Formik>
    </LinearGradient>
  );
};

export default ManualLogIn;
