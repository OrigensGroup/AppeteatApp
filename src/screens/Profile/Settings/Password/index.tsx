import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import React from 'react';
import { Alert } from 'react-native';

import CustomButton from '../../../../components/shared/Button';

import useUserData from '../../../../hooks/useUserData';
import theme from '../../../../theme';
import accountTranslations from '../../../../translations/profile';

import LoginTextField from '../../../../components/shared/LoginTextField';

import { PasswordContainer, PasswordFieldContainer, PasswordField } from './styles';

interface PasswordProps {}

const Password: React.FunctionComponent<PasswordProps> = () => {
  const navigation = useNavigation();
  const { user } = useUserData();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <CustomButton onClick={() => Alert.alert('Successfully saved')} title={accountTranslations.settingsPage.save} />
      ),
      title: 'Password',
    });
  }, [navigation]);

  return (
    <Formik
      initialValues={{ password: '', newPassword: '', reNewPassword: '' }}
      onSubmit={(values) => {
        if (values.password !== values.newPassword && values.newPassword === values.reNewPassword) {
          user?.updatePassword(values.password);
        }
      }}
    >
      {({ errors, handleChange }) => (
        <PasswordContainer>
          <PasswordFieldContainer>
            <PasswordField>
              <LoginTextField
                darkText
                error={errors['password']}
                placeholder={accountTranslations.passwordPage.currentPassword}
                placeholderTextColor={theme.colors.fixedBlack}
                textContentType="password"
                updateValue={handleChange('password')}
              />
            </PasswordField>
            <PasswordField>
              <LoginTextField
                darkText
                error={errors['password']}
                placeholder={accountTranslations.passwordPage.newPassword}
                placeholderTextColor={theme.colors.fixedBlack}
                textContentType="password"
                updateValue={handleChange('password')}
              />
            </PasswordField>
            <PasswordField>
              <LoginTextField
                darkText
                error={errors['password']}
                placeholder={accountTranslations.passwordPage.reNewPassword}
                placeholderTextColor={theme.colors.fixedBlack}
                textContentType="password"
                updateValue={handleChange('password')}
              />
            </PasswordField>
          </PasswordFieldContainer>
        </PasswordContainer>
      )}
    </Formik>
  );
};

export default Password;
