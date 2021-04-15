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

import useUserData from '../../../hooks/useUserData';

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
  isFromModal?: boolean;
  changeModule: (b: 'login' | 'register' | 'forgotPassword') => void;
  onConfirm?: () => void;
}

const RegisterManual: React.FunctionComponent<RegisterManualProps> = ({ changeModule, isFromModal, onConfirm }) => {
  const theme = useTheme();

  const [loading, setLoading] = useState(false);
  const { login } = useUserData();

  const loginApp = () => {
    changeModule('login');
  };

  const createUser = (username: string, email: string, password: string) => {
    setLoading(true);
    crashlytics().log('Sign in attempt.');

    if (isFromModal) {
      const user = auth().currentUser;
      const res = auth.EmailAuthProvider.credential(email, password);

      user?.linkWithCredential(res).then(async () => {
        !user.emailVerified && (await user.sendEmailVerification());

        await user.updateProfile({
          displayName: username,
        });

        login();
      });

      onConfirm && onConfirm();

      return;
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async () => {
        const user = auth().currentUser;

        if (user) {
          await initUserData(user.uid);

          !user.emailVerified && (await user.sendEmailVerification());

          await user.updateProfile({
            displayName: username,
          });

          login();
        } else {
          crashlytics().log("Couldn't setup user");
        }

        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);

        if (error.code === 'auth/too-many-requests') {
          Alert.alert(loginTranslations.tooManyRequests.label);
          return;
        }

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
        validateOnBlur={false}
        validateOnChange={false}
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
                autoCapitalize="none"
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
                onClick={loginApp}
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
