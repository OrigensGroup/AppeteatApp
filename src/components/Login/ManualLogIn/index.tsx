import React, { useState } from 'react';
import { Platform, Alert } from 'react-native';
import { Formik } from 'formik';

import { useTheme } from 'styled-components';

import auth from '@react-native-firebase/auth';
import crashlytics from '@react-native-firebase/crashlytics';

import LogInTextField from '../LogInInputField';

import SignUpButton from '../Buttons/SignUpButton';
import LogInButton from '../Buttons/LogInButton';

import useUserData from '../../../hooks/useUserData';

import { initUserData } from '../../../utils/manageUserdata';

import { LoginSchema } from './loginSchema';

import {
  ManualLogInContainer,
  TextFieldsWrapper,
  AnonButtonWrapper,
  ButtonsWrapper,
  OrSeparator,
  Line,
  TextContainer,
} from './styles';
import Text from '../../shared/Text';
import { t } from '../../../translations';

interface ManualLogInProps {
  showAnonLogin?: boolean;
  changeModule: (b: 'login' | 'register' | 'forgotPassword') => void;
}

const ManualLogIn: React.FunctionComponent<ManualLogInProps> = ({ changeModule, showAnonLogin }) => {
  const theme = useTheme();

  const [loading, setLoading] = useState(false);
  const { login } = useUserData();

  const register = () => {
    changeModule('register');
  };

  const forgotPassword = () => {
    changeModule('forgotPassword');
  };

  const anonSignIn = () => {
    crashlytics().log('Anon Log in attempt.');

    auth()
      .signInAnonymously()
      .then(async () => {
        const user = auth().currentUser;

        if (user) {
          await initUserData(user.uid);

          login();
        } else {
          crashlytics().log("Couldn't setup user");
        }

        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);

        if (error.code === 'auth/invalid-email') {
          Alert.alert(t('loginTranslations.errorSignInEmail.label'), t('loginTranslations.errorSignInEmail.message'));
          return;
        }

        if (error.code === 'auth/wrong-password') {
          Alert.alert(
            t('loginTranslations.errorWrongPasswordSignIn.label'),
            t('loginTranslations.errorWrongPasswordSignIn.message'),
          );
          return;
        }

        crashlytics().log('Anon Log in failed.');
        crashlytics().recordError(error);
        console.error(error);
      });
  };

  const singIn = (email: string, password: string) => {
    crashlytics().log('Log in attempt.');
    setLoading(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setLoading(false);
        login();
      })
      .catch((error) => {
        setLoading(false);

        if (error.code === 'auth/invalid-email') {
          Alert.alert(t('loginTranslations.errorSignInEmail.label'), t('loginTranslations.errorSignInEmail.message'));
          return;
        }
        if (error.code === 'auth/user-not-found') {
          Alert.alert(t('loginTranslations.errorUserNotFound.label'), t('loginTranslations.errorUserNotFound.message'));
          return;
        }
        if (error.code === 'auth/wrong-password') {
          Alert.alert(
            t('loginTranslations.errorWrongPasswordSignIn.label'),
            t('loginTranslations.errorWrongPasswordSignIn.message'),
          );
          return;
        }

        crashlytics().log('Log in failed.');
        crashlytics().recordError(error);
        console.error(error);
      });
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => {
        singIn(values.email, values.password);
      }}
      validateOnBlur={false}
      validateOnChange={false}
      validationSchema={LoginSchema}
    >
      {({ errors, handleChange, handleSubmit }) => (
        <ManualLogInContainer>
          <TextFieldsWrapper behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <LogInTextField
              testID="LoginButton"
              autoCapitalize="none"
              error={errors.email}
              label={t('loginTranslations.emailField.label')}
              placeholder={t('loginTranslations.emailField.placeholder')}
              placeholderTextColor={theme.colors.border}
              textContentType="emailAddress"
              updateValue={handleChange('email')}
            />
            <LogInTextField
              error={errors.password}
              label={t('loginTranslations.passwordField.label')}
              placeholder={t('loginTranslations.passwordField.placeholder')}
              placeholderTextColor={theme.colors.border}
              secondary
              textContentType="password"
              updateValue={handleChange('password')}
            />
            <SignUpButton
              buttonText={t('loginTranslations.forgotPassword.cta')}
              onClick={forgotPassword}
              text=""
              small
            />
          </TextFieldsWrapper>
          <ButtonsWrapper>
            <LogInButton loading={loading} onClick={handleSubmit} text={t('loginTranslations.loginButton.label')} />
            <OrSeparator>
              <Line />
              <TextContainer>
                <Text fontSize={16} color="primary">
                  {t('loginTranslations.orSeparator.label')}
                </Text>
              </TextContainer>
              <Line />
            </OrSeparator>
            <LogInButton
              onClick={register}
              text={t('loginTranslations.signUpSection.buttonLabel')}
              active
              color="tertiary"
            />
            {showAnonLogin && (
              <AnonButtonWrapper>
                <SignUpButton buttonText={t('loginTranslations.anonSection.label')} onClick={anonSignIn} small />
              </AnonButtonWrapper>
            )}
          </ButtonsWrapper>
        </ManualLogInContainer>
      )}
    </Formik>
  );
};

export default ManualLogIn;
