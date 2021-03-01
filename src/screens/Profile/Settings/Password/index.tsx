import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert, Button } from 'react-native';
import CustomButton from '../../../../components/Shared/Button';

import TextField from '../../../../components/Shared/LoginTextField';
import accountTranslations from '../../../../translations/account';

import { PasswordContainer } from './styles';

interface PasswordProps { }



const Password: React.FunctionComponent<PasswordProps> = () => {

  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <CustomButton onClick={() => Alert.alert('Successfully saved')}  title={accountTranslations.accountPage.save} />
      ),
      title: 'Password',
    });
  }, [navigation]);
  return (
    <PasswordContainer>
        <TextField placeholder={accountTranslations.accountPage.currentPassword} textContentType="password"></TextField>
        <TextField placeholder={accountTranslations.accountPage.newPassword} textContentType="password"></TextField>
        <TextField placeholder={accountTranslations.accountPage.reNewPassword} textContentType="password"></TextField>
    </PasswordContainer>
  );
};

export default Password;
