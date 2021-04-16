import React, { useState } from 'react';
import { Platform, Alert } from 'react-native';

import { useTheme } from 'styled-components';

import auth from '@react-native-firebase/auth';
import crashlytics from '@react-native-firebase/crashlytics';

import { Formik } from 'formik';

import LogInTextField from '../LogInInputField';
import loginTranslations from '../../../translations/login';

import Text from '../../shared/Text';
import LogInButton from '../Buttons/LogInButton';

import { ManualLogInContainer, TextFieldsWrapper, ButtonsWrapper, GoBack } from './styles';
import { ForgotSchema } from './forgotSchema';

interface ManualLogInProps {
  changeModule: (b: 'login' | 'register' | 'forgotPassword') => void;
}

const ForgotPassword: React.FunctionComponent<ManualLogInProps> = ({ changeModule }) => {
  const theme = useTheme();

  const [loading, setLoading] = useState(false);

  const login = () => {
    changeModule('login');
  };

  const singIn = (email: string) => {
    crashlytics().log('Password reset attempt.');
    setLoading(true);

    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        setLoading(false);
        Alert.alert(loginTranslations.emailSent.label, loginTranslations.emailSent.message);
        login();
      })
      .catch((error) => {
        setLoading(false);

        if (error.code === 'auth/invalid-email') {
          Alert.alert(loginTranslations.errorSignInEmail.label, loginTranslations.errorSignInEmail.message);
          return;
        }
        if (error.code === 'auth/user-not-found') {
          Alert.alert(loginTranslations.errorUserNotFound.label, loginTranslations.errorUserNotFound.message);
          return;
        }

        crashlytics().log('Password reset failed.');
        crashlytics().recordError(error);
        console.error(error);
      });
  };

  return (
    <Formik
      initialValues={{ email: '' }}
      onSubmit={(values) => {
        singIn(values.email);
      }}
      validationSchema={ForgotSchema}
    >
      {({ errors, handleChange, handleSubmit }) => (
        <ManualLogInContainer>
          <TextFieldsWrapper behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <LogInTextField
              error={errors.email}
              label={loginTranslations.forgotPassword.label}
              placeholder={loginTranslations.forgotPassword.placeholder}
              placeholderTextColor={theme.colors.border}
              textContentType="emailAddress"
              updateValue={handleChange('email')}
            />
          </TextFieldsWrapper>
          <ButtonsWrapper>
            <LogInButton
              loading={loading}
              onClick={handleSubmit}
              text={loginTranslations.forgotPassword.resetPassword}
            />
            <GoBack onPress={login}>
              <Text color="primary" fontSize={12} bold>
                {loginTranslations.forgotPassword.goBack}
              </Text>
            </GoBack>
          </ButtonsWrapper>
        </ManualLogInContainer>
      )}
    </Formik>
  );
};

export default ForgotPassword;
