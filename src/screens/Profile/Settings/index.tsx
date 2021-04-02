import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import auth from '@react-native-firebase/auth';

import { Alert } from 'react-native';

import { Formik } from 'formik';

import ListItem from '../../../components/Profile/ListItem';

import useUserData from '../../../hooks/useUserData';

import LoginTextField from '../../../components/shared/LoginTextField';
import Text from '../../../components/shared/Text';
import ViewCta from '../../../components/shared/ViewCta';
import TopBar from '../../../components/shared/TopBar';

import profileTranslations from '../../../translations/profile';

import { ProfileSchema } from './profileSchema';

import { SettingsContainer, ProfileSection, InfoContainer, TextContainer, SaveButton } from './styles';

interface SettingsProps {}

const Settings: React.FunctionComponent<SettingsProps> = () => {
  const { reload, restoreDefault, user } = useUserData();

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

  const updateProfile = async (name: string, email: string) => {
    if (name) {
      await user?.updateProfile({
        displayName: name,
      });
    }

    if (email) {
      await user?.updateEmail(email);
    }

    reload();
  };

  return (
    <>
      <Formik
        initialValues={{ email: user?.email ?? '', username: user?.displayName ?? '' }}
        onSubmit={(values) => {
          if (values.email && values.username) {
            console.log('Update values');
            updateProfile(values.username, values.email);
          }
        }}
        validationSchema={ProfileSchema}
      >
        {({ errors, handleChange, handleSubmit, values }) => (
          <SettingsContainer>
            <TopBar back="back" hideFilter title={profileTranslations.settingsPage.title} />
            <ProfileSection>
              <TextContainer>
                <Text bold color="primary" fontSize={18}>
                  {profileTranslations.personalInformationPage.title}
                </Text>
              </TextContainer>
              <InfoContainer>
                <LoginTextField
                  darkText
                  defaultValue={values.username}
                  error={errors['username']}
                  textContentType="none"
                  updateValue={handleChange('username')}
                />
              </InfoContainer>
              <InfoContainer>
                <LoginTextField
                  darkText
                  defaultValue={values.email}
                  error={errors['email']}
                  textContentType="emailAddress"
                  updateValue={handleChange('email')}
                />
              </InfoContainer>
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
            <SaveButton>
              <ViewCta onClick={handleSubmit}>
                <Text bold color="fixedWhite" fontSize={18}>
                  {profileTranslations.settingsPage.save}
                </Text>
              </ViewCta>
            </SaveButton>
          </SettingsContainer>
        )}
      </Formik>
    </>
  );
};

export default Settings;
