import React, { useRef, useEffect, useState, useCallback } from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

import { Alert } from 'react-native';

import { Formik } from 'formik';

import { useNavigation } from '@react-navigation/native';

import ListItem from '../../../components/Profile/ListItem';

import useUserData from '../../../hooks/useUserData';

import LoginTextField from '../../../components/shared/LoginTextField';
import Text from '../../../components/shared/Text';
import ViewCta from '../../../components/shared/ViewCta';
import TopBar from '../../../components/shared/TopBar';

import ReAuthModal from '../../../components/Profile/ReAuthModal';
import InfoUpdatedCard from '../../../components/Profile/InfoUpdatedCard';

import { SettingsContainer, ProfileSection, TextContainer, SaveButton, InfoUpdatedContainer } from './styles';

import { ProfileSchema } from './profileSchema';
import { t } from '../../../translations';

interface SettingsProps {}

const Settings: React.FunctionComponent<SettingsProps> = () => {
  const { logout, reload, user } = useUserData();
  const [saveShow, setSaveShow] = useState(false);
  const [infoUpdatedShow, setInfoUpdatedShow] = useState(false);
  const [authResult, setAuthResult] = useState(false);
  const [changedEmail, setChangedEmail] = useState('');
  const autoHide = useRef<NodeJS.Timeout>();
  const navigation = useNavigation();

  const [modalData, setModalData] = useState({
    show: false,
    title: t('profileTranslations.settingsPage.authentication'),
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
      t('profileTranslations.settingsPage.logOut'),
      t('profileTranslations.settingsPage.logOutPromp'),
      [
        {
          text: t('profileTranslations.settingsPage.cancel'),
          style: 'cancel',
        },
        {
          text: t('profileTranslations.settingsPage.yes'),
          onPress: async () => {
            await auth().signOut();
            logout();
          },
        },
      ],
      { cancelable: false },
    );

  const updateEmail = useCallback(
    async (user: FirebaseAuthTypes.User | null) => {
      if (user) {
        user.updateEmail(changedEmail);
        await reload();
        setSaveShow(false);
        setInfoUpdatedShow(true);
      }
    },
    [reload, changedEmail],
  );

  const updateProfile = async (name?: string, email?: string) => {
    if (!user) {
      return 'not logged in';
    }

    try {
      if (name !== user.displayName) {
        await user.updateProfile({
          displayName: name,
        });
      }

      if (email && email !== user.email) {
        setChangedEmail(email);
        await user.updateEmail(email);
      }

      await reload();
      setSaveShow(false);
      setInfoUpdatedShow(true);
    } catch (e) {
      if (e.code === 'auth/requires-recent-login') {
        showDescriptionModal();
        return;
      }

      if (e.code === 'auth/email-already-in-use') {
        return;
      }

      if (e.code === 'auth/invalid-email ') {
      }
    }
  };

  useEffect(() => {
    if (authResult) {
      updateEmail(user);
    }
  }, [authResult, updateEmail, user]);

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

  return (
    <>
      <Formik
        initialValues={{
          email: user?.email ?? '',
          username: user?.displayName ?? '',
        }}
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
          };

          return (
            <SettingsContainer>
              <ReAuthModal
                authResult={setAuthResult}
                isVisible={modalData.show}
                onClose={closeModal}
                passwordPlaceholder={t('loginTranslations.passwordField.placeholder')}
                placeholder={t('loginTranslations.emailField.placeholder')}
                title={modalData.title}
              />
              {infoUpdatedShow && (
                <InfoUpdatedContainer>
                  <InfoUpdatedCard />
                </InfoUpdatedContainer>
              )}
              <TopBar back="back" hideFilter title={t('profileTranslations.settingsPage.title')} />
              <ProfileSection>
                <TextContainer>
                  <Text bold color="primary" fontSize={16}>
                    {t('profileTranslations.personalInformationPage.title')}
                  </Text>
                </TextContainer>
                <LoginTextField
                  defaultValue={values.username}
                  error={errors.username}
                  textContentType="none"
                  updateValue={(value) => showSave('username', value)}
                />
                <LoginTextField
                  defaultValue={values.email}
                  error={errors.email}
                  textContentType="emailAddress"
                  updateValue={(value) => showSave('email', value)}
                />
              </ProfileSection>
              <ProfileSection>
                <TextContainer>
                  <Text bold color="primary" fontSize={16}>
                    {t('profileTranslations.accountPage.settings')}
                  </Text>
                </TextContainer>
                <ListItem
                  icon2={<MaterialIcons color="#818181" name="keyboard-arrow-right" size={28} />}
                  navigateTo="Password"
                  title={t('profileTranslations.passwordPage.changePassword')}
                />
                <ListItem
                  icon2={<MaterialIcons color="#818181" name="keyboard-arrow-right" size={28} />}
                  onClick={logOutAlert}
                  title={t('profileTranslations.settingsPage.logOut')}
                />
              </ProfileSection>
              {saveShow && (
                <SaveButton>
                  <ViewCta onClick={saveChanges}>
                    <Text bold color="fixedWhite" fontSize={14}>
                      {t('profileTranslations.settingsPage.save')}
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
