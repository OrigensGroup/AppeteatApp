import React from 'react';

import { Formik } from 'formik';

import useUserData from '../../../../hooks/useUserData';
import theme from '../../../../theme';

import profileTranslations from '../../../../translations/profile';

import LoginTextField from '../../../../components/shared/LoginTextField';

import TopBar from '../../../../components/shared/TopBar';
import ViewCta from '../../../../components/shared/ViewCta';
import Text from '../../../../components/shared/Text';

import { PasswordSchema } from './passwordSchema';

import { PasswordContainer, PasswordFieldContainer, PasswordField, SaveButton } from './styles';

interface PasswordProps {}

const Password: React.FunctionComponent<PasswordProps> = () => {
  const { user } = useUserData();

  // const updatePassword = () => {};

  return (
    <Formik
      initialValues={{ password: '', newPassword: '', reNewPassword: '' }}
      onSubmit={(values) => {
        if (values.password !== values.newPassword && values.newPassword === values.reNewPassword) {
          user?.updatePassword(values.password);
        }
      }}
      validationSchema={PasswordSchema}
    >
      {({ errors, handleChange, handleSubmit }) => (
        <PasswordContainer>
          <TopBar back="back" hideFilter title={profileTranslations.passwordPage.title} />
          <PasswordFieldContainer>
            <PasswordField>
              <LoginTextField
                darkText
                error={errors['password']}
                placeholder={profileTranslations.passwordPage.currentPassword}
                placeholderTextColor={theme.colors.fixedBlack}
                textContentType="password"
                updateValue={handleChange('password')}
              />
            </PasswordField>
            <PasswordField>
              <LoginTextField
                darkText
                error={errors['password']}
                placeholder={profileTranslations.passwordPage.newPassword}
                placeholderTextColor={theme.colors.fixedBlack}
                textContentType="password"
                updateValue={handleChange('password')}
              />
            </PasswordField>
            <PasswordField>
              <LoginTextField
                darkText
                error={errors['password']}
                placeholder={profileTranslations.passwordPage.reNewPassword}
                placeholderTextColor={theme.colors.fixedBlack}
                textContentType="password"
                updateValue={handleChange('password')}
              />
            </PasswordField>
          </PasswordFieldContainer>
          <SaveButton>
            <ViewCta onClick={handleSubmit}>
              <Text bold color="fixedWhite" fontSize={18}>
                {profileTranslations.settingsPage.save}
              </Text>
            </ViewCta>
          </SaveButton>
        </PasswordContainer>
      )}
    </Formik>
  );
};

export default Password;
