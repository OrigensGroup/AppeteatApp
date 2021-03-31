import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert } from 'react-native';

import CustomButton from '../../../../components/shared/Button';

import TextField from '../../../../components/shared/LoginTextField';
import accountTranslations from '../../../../translations/profile';

import { PasswordContainer } from './styles';

interface PasswordProps {}

const Password: React.FunctionComponent<PasswordProps> = () => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <CustomButton onClick={() => Alert.alert('Successfully saved')} title={accountTranslations.accountPage.save} />
      ),
      title: 'Password',
    });
  }, [navigation]);

  return (
    <PasswordContainer>
      <TextField placeholder={accountTranslations.passwordPage.currentPassword} textContentType="password" />
      <TextField placeholder={accountTranslations.passwordPage.newPassword} textContentType="password" />
      <TextField placeholder={accountTranslations.passwordPage.reNewPassword} textContentType="password" />
    </PasswordContainer>
  );
};

export default Password;
