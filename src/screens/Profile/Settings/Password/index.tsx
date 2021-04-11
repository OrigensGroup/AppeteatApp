import React, { useEffect, useRef, useState } from 'react';

import { Formik } from 'formik';

import { firebase } from '@react-native-firebase/auth';

import { useNavigation } from '@react-navigation/native';

import useUserData from '../../../../hooks/useUserData';

import profileTranslations from '../../../../translations/profile';

import LoginTextField from '../../../../components/shared/LoginTextField';

import TopBar from '../../../../components/shared/TopBar';
import ViewCta from '../../../../components/shared/ViewCta';
import Text from '../../../../components/shared/Text';

import InfoUpdatedCard from '../../../../components/Profile/InfoUpdatedCard';

import { PasswordSchema } from './passwordSchema';

import { PasswordContainer, PasswordFieldContainer, SaveButton, InfoUpdateContainer } from './styles';

interface PasswordProps {}

const Password: React.FunctionComponent<PasswordProps> = () => {
  const { reload, user } = useUserData();
  const [infoUpdatedShow, setInfoUpdatedShow] = useState(false);
  const [errorShow, setErrorShow] = useState(false);
  const autoHide = useRef<NodeJS.Timeout>();

  const navigation = useNavigation();

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
                setInfoUpdatedShow(true);
              })
              .catch((error) => {
                if (error.code === 'auth/weak-password') {
                  setErrorShow(true);
                  return;
                }

                if (error.code === 'auth/requires-recent-login') {
                  setErrorShow(true);
                  return;
                }
              });
          })
          .catch(() => {
            setErrorShow(true);
          });
      }
    }

    reload();
  };

  useEffect(() => {
    if (autoHide.current && !infoUpdatedShow) {
      clearTimeout(autoHide.current);
      navigation.goBack();
    } else {
      autoHide.current = setTimeout(() => {
        setInfoUpdatedShow(false);
      }, 1000);
    }

    return () => {
      autoHide.current && clearTimeout(autoHide.current);
    };
  }, [navigation, infoUpdatedShow, setInfoUpdatedShow]);

  useEffect(() => {
    autoHide.current = setTimeout(() => {
      setErrorShow(false);
    }, 1500);

    return () => {
      autoHide.current && clearTimeout(autoHide.current);
    };
  }, [errorShow, setErrorShow]);

  return (
    <Formik
      initialValues={{ password: '', newPassword: '', reNewPassword: '' }}
      onSubmit={(values) => {
        if (values.password !== values.newPassword && values.newPassword === values.reNewPassword) {
          updatePassword(values.password, values.newPassword, values.reNewPassword);
        } else {
          setErrorShow(true);
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
              textContentType="password"
              updateValue={handleChange('password')}
            />
            <LoginTextField
              error={errors['newPassword']}
              placeholder={profileTranslations.passwordPage.newPassword}
              textContentType="password"
              updateValue={handleChange('newPassword')}
            />
            <LoginTextField
              error={errors['reNewPassword']}
              placeholder={profileTranslations.passwordPage.reNewPassword}
              textContentType="password"
              updateValue={handleChange('reNewPassword')}
            />
            {errorShow && (
              <InfoUpdateContainer>
                <InfoUpdatedCard error />
              </InfoUpdateContainer>
            )}
            {infoUpdatedShow && (
              <InfoUpdateContainer>
                <InfoUpdatedCard />
              </InfoUpdateContainer>
            )}
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
