import React from 'react';

import { Formik } from 'formik';

import { Alert } from 'react-native';

import { firebase } from '@react-native-firebase/auth';

import useUserData from '../../../../hooks/useUserData';
import theme from '../../../../theme';

import profileTranslations from '../../../../translations/profile';

import LoginTextField from '../../../../components/shared/LoginTextField';

import TopBar from '../../../../components/shared/TopBar';
import ViewCta from '../../../../components/shared/ViewCta';
import Text from '../../../../components/shared/Text';

import { PasswordSchema } from './passwordSchema';

import { PasswordContainer, PasswordFieldContainer, SaveButton } from './styles';

interface PasswordProps {}

const Password: React.FunctionComponent<PasswordProps> = () => {
  const { reload, user } = useUserData();

  const updatePassword = async (currentPassword: string, newPassword: string, reNewPassword: string) => {
    if (currentPassword !== newPassword && newPassword === reNewPassword) {
      if (user && user.email !== null) {
        const credential = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);
        // Prompt the user to re-provide their sign-in credentials

        user
          .reauthenticateWithCredential(credential)
          .then(() => {
            user
              ?.updatePassword(newPassword)
              .then(() => {
                Alert.alert('Password Updated');
              })
              .catch(() => {
                Alert.alert('error');
              });
          })
          .catch(() => {
            // An error happened.
          });
      }
    }

    reload();
  };

  console.log('cc');
  return (
    <Formik
      initialValues={{ password: '', newPassword: '', reNewPassword: '' }}
      onSubmit={(values) => {
        console.log(values);

        if (values.password !== values.newPassword && values.newPassword === values.reNewPassword) {
          updatePassword(values.password, values.newPassword, values.reNewPassword);
        }
      }}
      validationSchema={PasswordSchema}
    >
      {({ errors, handleChange, handleSubmit }) => (
        <PasswordContainer>
          <TopBar back="back" hideFilter title={profileTranslations.passwordPage.title} />
          <PasswordFieldContainer>
            <LoginTextField
              error={errors['password']}
              placeholder={profileTranslations.passwordPage.currentPassword}
              placeholderTextColor={theme.colors.border}
              textContentType="password"
              updateValue={handleChange('password')}
            />
            <LoginTextField
              error={errors['newPassword']}
              placeholder={profileTranslations.passwordPage.newPassword}
              placeholderTextColor={theme.colors.border}
              textContentType="password"
              updateValue={handleChange('newPassword')}
            />
            <LoginTextField
              error={errors['reNewPassword']}
              placeholder={profileTranslations.passwordPage.reNewPassword}
              placeholderTextColor={theme.colors.border}
              textContentType="password"
              updateValue={handleChange('reNewPassword')}
            />
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
