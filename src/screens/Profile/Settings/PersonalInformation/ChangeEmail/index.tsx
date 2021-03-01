import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert } from 'react-native';

import Fontisto from 'react-native-vector-icons/Fontisto';
import ChangeInfo from '../../../../../components/Profile/ChangeInfo';
import CustomButton from '../../../../../components/Shared/Button';
import accountTranslations from '../../../../../translations/account';


interface ChangeEmailProps {}

const ChangeEmail: React.FunctionComponent<ChangeEmailProps> = () => {
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <CustomButton onClick={() => Alert.alert('Successfully saved')}  title={accountTranslations.accountPage.save} />
      ),
      title: 'Change Email',
    });
  }, [navigation]);
  return (
    <ChangeInfo icon={<Fontisto name="email" size={28} color="#818181" />} />
      
  );
};

export default ChangeEmail;
