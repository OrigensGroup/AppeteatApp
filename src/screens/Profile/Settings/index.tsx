import React, { useState } from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import auth from '@react-native-firebase/auth';

import { Alert } from 'react-native';

import { Switch } from 'react-native-gesture-handler';

import ListItem from '../../../components/Profile/ListItem';
import accountTranslations from '../../../translations/account';

import useUserData from '../../../hooks/useUserData';

import LoginTextField from '../../../components/shared/LoginTextField';
import loginTranslations from '../../../translations/login';
import Text from '../../../components/shared/Text';
import ViewCta from '../../../components/shared/ViewCta';

import { SettingsContainer, ProfileSection, InfoContainer, TextContainer, SaveButton } from './styles';

interface SettingsProps {}
type LoopObject = {
  [key: string]: string | null;
};

const Settings: React.FunctionComponent<SettingsProps> = () => {
  const { reload, restoreDefault, user } = useUserData();
  const [email, setEmail] = useState(user?.email);
  const [name, setName] = useState(user?.displayName);

  const logOutAlert = () =>
    Alert.alert(
      accountTranslations.accountPage.logOut,
      accountTranslations.accountPage.logOutPromp,
      [
        {
          text: accountTranslations.accountPage.cancel,
          style: 'cancel',
        },
        {
          text: accountTranslations.accountPage.yes,
          onPress: async () => {
            await auth().signOut();
            restoreDefault();
          },
        },
      ],
      { cancelable: false }
    );

  const [errors, setErrors] = useState<LoopObject>({});

  const updateProfile = async () => {
    let errorCounter = 2;

    if (name) {
      if (name.length < 4) {
        setErrors((oldErrors) => ({
          ...oldErrors,
          ['username']: loginTranslations.usernameError.label,
        }));
      } else {
        setErrors((oldErrors) => ({
          ...oldErrors,
          ['username']: null,
        }));

        errorCounter = errorCounter - 1;
      }
    }

    if (email) {
      if (email === '') {
        setErrors((oldErrors) => ({
          ...oldErrors,
          ['email']: loginTranslations.emailError.label,
        }));
      } else {
        setErrors((oldErrors) => ({
          ...oldErrors,
          ['email']: null,
        }));

        errorCounter = errorCounter - 1;
      }
    }

    if (errorCounter === 0) {
      if (name && email) {
        await user?.updateProfile({
          displayName: name,
        });

        await user?.updateEmail(email);
        reload();
      }
    }
  };

  return (
    <SettingsContainer>
      <ProfileSection>
        <TextContainer>
          <Text bold color="primary" fontSize={18}>
            {accountTranslations.accountPage.personalInformation}
          </Text>
        </TextContainer>
        <InfoContainer>
          <LoginTextField
            darkText
            defaultValue={user?.displayName ? user.displayName : undefined}
            error={errors['username']}
            textContentType="none"
            updateValue={setName}
          />
        </InfoContainer>
        <InfoContainer>
          <LoginTextField
            darkText
            defaultValue={user?.email ? user.email : undefined}
            error={errors['password']}
            textContentType="emailAddress"
            updateValue={setEmail}
          />
        </InfoContainer>
      </ProfileSection>
      <ProfileSection>
        <TextContainer>
          <Text bold color="primary" fontSize={18}>
            {accountTranslations.accountPage.notifications}
          </Text>
        </TextContainer>
        <ListItem icon2={<Switch />} navigateTo="Notifications" title="Pause All" />
      </ProfileSection>
      <ProfileSection>
        <TextContainer>
          <Text bold color="primary" fontSize={18}>
            {accountTranslations.accountPage.settings}
          </Text>
        </TextContainer>
        <ListItem
          icon2={<MaterialIcons color="#818181" name="keyboard-arrow-right" size={28} />}
          navigateTo="Password"
          title={accountTranslations.accountPage.changePassword}
        />
        <ListItem
          icon2={<MaterialIcons color="#818181" name="keyboard-arrow-right" size={28} />}
          onClick={logOutAlert}
          title={accountTranslations.accountPage.logOut}
        />
      </ProfileSection>
      <SaveButton>
        <ViewCta onClick={updateProfile}>
          <Text bold color="fixedWhite" fontSize={18}>
            {accountTranslations.accountPage.save}
          </Text>
        </ViewCta>
      </SaveButton>
    </SettingsContainer>
  );
};

export default Settings;
