import React, { useState } from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import auth from '@react-native-firebase/auth';

import { Alert } from 'react-native';

import { Formik } from 'formik';

import { useNavigation, useTheme } from '@react-navigation/native';

import ListItem from '../../../components/Profile/ListItem';

import useUserData from '../../../hooks/useUserData';

import LoginTextField from '../../../components/shared/LoginTextField';
import Text from '../../../components/shared/Text';
import ViewCta from '../../../components/shared/ViewCta';
import TopBar from '../../../components/shared/TopBar';

import profileTranslations from '../../../translations/profile';

import ReAuthModal from '../../../components/Profile/ReAuthModal';
import loginTranslations from '../../../translations/login';
import InfoUpdatedCard from '../../../components/Profile/InfoUpdatedCard';

import { SettingsContainer, ProfileSection, TextContainer, SaveButton, InfoUpdatedContainer } from './styles';

import { ProfileSchema } from './profileSchema';

interface SettingsProps {}

const Settings: React.FunctionComponent<SettingsProps> = () => {
  const { reload, restoreDefault, user } = useUserData();
  const [saveShow, setSaveShow] = useState(false);
  const [infoUpdatedShow, setInfoUpdatedShow] = useState(false);

  const navigation = useNavigation();
  const theme = useTheme();

  const [modalData, setModalData] = useState({
    show: false,
    title: 'Authentication',
    inputData: '',
  });

  const closeModal = () => {
    setModalData((old) => ({ ...old, show: false }));
  };

  const showDescriptionModal = () => {
    setModalData((old) => ({ ...old, show: true }));
  };

  const logOutAlert = () =>
    Alert.alert(
      profileTranslations.settingsPage.logOut,
      profileTranslations.settingsPage.logOutPromp,
      [
        {
          text: profileTranslations.settingsPage.cancel,
          style: 'cancel',
        },
        {
          text: profileTranslations.settingsPage.yes,
          onPress: async () => {
            await auth().signOut();
            restoreDefault();
          },
        },
      ],
      { cancelable: false }
    );

  const updateProfile = (name?: string, email?: string, authResult?: boolean) => {
    if (name !== user?.displayName) {
      user
        ?.updateProfile({
          displayName: name,
        })
        .then(() => {
          if (email === user?.email) {
            setSaveShow(false);
            setTimeout(() => setInfoUpdatedShow(true), 1000);
          }
        });
    }

    if (email && email !== user?.email) {
      user
        ?.updateEmail(email)
        .then(() => {
          if (name === user?.displayName) {
            setSaveShow(false);
            setTimeout(() => setInfoUpdatedShow(true), 1000);
          } else {
            setSaveShow(false);
            setTimeout(() => setInfoUpdatedShow(true), 1000);
          }
        })
        .catch((error) => {
          if (error.code === 'auth/requires-recent-login') {
            showDescriptionModal();

            //implementare un mode che ti stoppa la funzione se authResult non e' true
            {
              authResult && user?.updateEmail(email);
            }
          }

          if (error.code === 'auth/email-already-in-use') {
            console.log('Already used');
            return;
          }

          if (error.code === 'auth/invalid-email ') {
            console.log('Invalid email');
            return;
          }
        });
    }

    reload();
    setTimeout(() => navigation.goBack(), 2500);
  };

  return (
    <>
      <Formik
        initialValues={{ email: user?.email ?? '', username: user?.displayName ?? '' }}
        onSubmit={(values) => {
          if (values.email && values.username) {
            console.log(values);
            updateProfile(values.username, values.email);
          }
        }}
        validationSchema={ProfileSchema}
      >
        {({ errors, handleChange, handleSubmit, values }) => {
          const showSave = (field: string, value: string) => {
            handleChange(field)(value);
            setSaveShow(true);
          };

          const saveChanges = () => {
            handleSubmit();
          };

          return (
            <SettingsContainer>
              <ReAuthModal
                authResult={(authResult: boolean) => updateProfile(values.username, values.email, authResult)}
                isVisible={modalData.show}
                onClose={closeModal}
                passwordPlaceholder={loginTranslations.passwordField.placeholder}
                placeholder={loginTranslations.emailField.placeholder}
                placeholderTextColor={theme.colors.border}
                title={modalData.title}
              />
              {infoUpdatedShow && (
                <InfoUpdatedContainer>
                  <InfoUpdatedCard />
                </InfoUpdatedContainer>
              )}
              <TopBar back="back" hideFilter title={profileTranslations.settingsPage.title} />
              <ProfileSection>
                <TextContainer>
                  <Text bold color="primary" fontSize={18}>
                    {profileTranslations.personalInformationPage.title}
                  </Text>
                </TextContainer>
                <LoginTextField
                  defaultValue={values.username}
                  error={errors['username']}
                  textContentType="none"
                  updateValue={(value) => showSave('username', value)}
                />
                <LoginTextField
                  defaultValue={values.email}
                  error={errors['email']}
                  textContentType="emailAddress"
                  updateValue={(value) => showSave('email', value)}
                />
              </ProfileSection>
              <ProfileSection>
                <TextContainer>
                  <Text bold color="primary" fontSize={18}>
                    {profileTranslations.accountPage.settings}
                  </Text>
                </TextContainer>
                <ListItem
                  icon2={<MaterialIcons color="#818181" name="keyboard-arrow-right" size={28} />}
                  navigateTo="Password"
                  title={profileTranslations.passwordPage.changePassword}
                />
                <ListItem
                  icon2={<MaterialIcons color="#818181" name="keyboard-arrow-right" size={28} />}
                  onClick={logOutAlert}
                  title={profileTranslations.settingsPage.logOut}
                />
              </ProfileSection>
              {saveShow && (
                <SaveButton>
                  <ViewCta onClick={saveChanges}>
                    <Text bold color="fixedWhite" fontSize={18}>
                      {profileTranslations.settingsPage.save}
                    </Text>
                  </ViewCta>
                </SaveButton>
              )}
            </SettingsContainer>
          );
        }}
      </Formik>
    </>
  );
};

export default Settings;
