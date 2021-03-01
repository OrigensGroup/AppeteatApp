import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert, Button } from 'react-native';
import CustomButton from '../../../../components/Shared/Button';

import TextField2 from '../../../../components/TextField2';
import accountTranslations from '../../../../translations/account';

import { PasswordContainer } from './styles';

interface PasswordProps {}



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
        <TextField2
          placeholder={accountTranslations.accountPage.currentPassword}
          textContentType="password"
        ></TextField2>
        <TextField2
          placeholder={accountTranslations.accountPage.newPassword}
          textContentType="password"
        ></TextField2>
        <TextField2
          placeholder={accountTranslations.accountPage.reNewPassword}
          textContentType="password"
        ></TextField2>
    </PasswordContainer>
  );
};

export default Password;
