import React, { useState } from 'react';
import { Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Formik } from 'formik';
import { useTheme } from 'styled-components';

import auth from '@react-native-firebase/auth';
import crashlytics from '@react-native-firebase/crashlytics';

import LogInButton from '../Buttons/LogInButton';
import SignUpButton from '../Buttons/SignUpButton';
import LogInInputField from '../LogInInputField';

import loginTranslations from '../../../translations/login';

import { initUserData } from '../../../utils/manageUserdata';

import { RegisterSchema } from './registerSchema';

import {
  ManualLogInContainer,
  TextFieldsWrapper,
  LogInSection,
  PasswordsWrapper,
  PasswordSeparator,
  styles,
} from './styles';

interface RegisterManualProps {
  changeModule: (b: 'login' | 'register' | 'forgotPassword') => void;
}

const RegisterManual: React.FunctionComponent<RegisterManualProps> = ({ changeModule }) => {
  const theme = useTheme();

  const [loading, setLoading] = useState(false);

  const login = () => {
    changeModule('login');
  };

  const createUser = (username: string, email: string, password: string) => {
    setLoading(true);
    crashlytics().log('Sign in attempt.');

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        const user = auth().currentUser;

        if (user) {
          initUserData(user.uid);

          !user.emailVerified && user.sendEmailVerification();

          user.updateProfile({
            displayName: username,
          });
        } else {
          crashlytics().log("Couldn't setup user");
        }
      })
      .catch((error) => {
        setLoading(false);

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

    setLoading(false);
  };

  return (
    <LinearGradient
      colors={[theme.colors.active, theme.colors.secondaryActive]}
      end={{ x: 1, y: 1 }}
      start={{ x: 0, y: 0 }}
      style={styles.linearGradient}
    >
      <Formik
        initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
        onSubmit={(values) => {
          createUser(values.username, values.email, values.password);
        }}
        validationSchema={RegisterSchema}
      >
        {({ errors, handleChange, handleSubmit }) => (
          <ManualLogInContainer>
            <TextFieldsWrapper>
              <LogInInputField
                error={errors['username']}
                label={loginTranslations.nameField.label}
                placeholder={loginTranslations.nameField.placeholder}
                textContentType="none"
                updateValue={handleChange('username')}
              />
              <LogInInputField
                error={errors['email']}
                label={loginTranslations.emailField.label}
                placeholder={loginTranslations.emailField.placeholder}
                textContentType="emailAddress"
                updateValue={handleChange('email')}
              />
              <PasswordsWrapper>
                <LogInInputField
                  error={errors['password']}
                  label={loginTranslations.passwordField.label}
                  placeholder={loginTranslations.passwordField.placeholder}
                  textContentType="password"
                  updateValue={handleChange('password')}
                />
                <PasswordSeparator />
                <LogInInputField
                  error={errors['confirmPassword']}
                  label={loginTranslations.passwordField.secondaryLabel}
                  placeholder={loginTranslations.passwordField.placeholder}
                  textContentType="password"
                  updateValue={handleChange('confirmPassword')}
                />
              </PasswordsWrapper>
            </TextFieldsWrapper>
            <LogInSection>
              <LogInButton loading={loading} onClick={handleSubmit} text={loginTranslations.registerButton.label} />
              <SignUpButton
                buttonText={loginTranslations.signInSection.buttonLabel}
                onClick={login}
                text={loginTranslations.signInSection.label}
              />
            </LogInSection>
          </ManualLogInContainer>
        )}
      </Formik>
    </LinearGradient>
  );
};

export default RegisterManual;
