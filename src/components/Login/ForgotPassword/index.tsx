import React, { useState } from 'react';
import { Platform, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { useTheme } from 'styled-components';

import auth from '@react-native-firebase/auth';
import crashlytics from '@react-native-firebase/crashlytics';

import { Formik } from 'formik';

import LogInTextField from '../LogInInputField';
import loginTranslations from '../../../translations/login';

import Text from '../../shared/Text';
import LogInButton from '../Buttons/LogInButton';

import { ManualLogInContainer, TextFieldsWrapper, ButtonsWrapper, styles, GoBack } from './styles';
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
        login();
      })
      .catch((error) => {
        setLoading(false);

        if (error.code === 'auth/invalid-email') {
          Alert.alert(loginTranslations.errorSignInEmail.label);
          return;
        }

        crashlytics().log('Password reset failed.');
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
                error={errors['email']}
                label={loginTranslations.forgotPassword.label}
                placeholder={loginTranslations.forgotPassword.placeholder}
                textContentType="emailAddress"
                updateValue={handleChange('email')}
              />
            </TextFieldsWrapper>
            <ButtonsWrapper>
              <GoBack onPress={login}>
                <Text color="secondary" fontSize={14}>
                  {loginTranslations.forgotPassword.goBack}
                </Text>
              </GoBack>
              <LogInButton
                loading={loading}
                onClick={handleSubmit}
                text={loginTranslations.forgotPassword.resetPassword}
              />
            </ButtonsWrapper>
          </ManualLogInContainer>
        )}
      </Formik>
    </LinearGradient>
  );
};

export default ForgotPassword;
