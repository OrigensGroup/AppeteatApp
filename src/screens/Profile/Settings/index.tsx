import React, { useState } from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import auth from '@react-native-firebase/auth';

import { Alert } from 'react-native';

import { Formik } from 'formik';

import { useNavigation } from '@react-navigation/native';

import ListItem from '../../../components/Profile/ListItem';

import useUserData from '../../../hooks/useUserData';

import LoginTextField from '../../../components/shared/LoginTextField';
import Text from '../../../components/shared/Text';
import ViewCta from '../../../components/shared/ViewCta';
import TopBar from '../../../components/shared/TopBar';

import profileTranslations from '../../../translations/profile';

import { ProfileSchema } from './profileSchema';

import { SettingsContainer, ProfileSection, TextContainer, SaveButton } from './styles';

interface SettingsProps {}

const Settings: React.FunctionComponent<SettingsProps> = () => {
  const { reload, restoreDefault, user } = useUserData();
  const [saveShow, setSaveShow] = useState(false);
  const navigation = useNavigation();

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
            navigation.goBack();
          };

          return (
            <SettingsContainer>
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
