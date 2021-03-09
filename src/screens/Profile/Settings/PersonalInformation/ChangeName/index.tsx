import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ChangeInfo from '../../../../../components/Profile/ChangeInfo';
import CustomButton from '../../../../../components/shared/Button';
import accountTranslations from '../../../../../translations/account';

interface ChangeNameProps {}

const ChangeName: React.FunctionComponent<ChangeNameProps> = () => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <CustomButton onClick={() => Alert.alert('Successfully saved')} title={accountTranslations.accountPage.save} />
      ),
      title: 'Change Email',
    });
  }, [navigation]);

  return <ChangeInfo icon={<MaterialCommunityIcons color="#818181" name="account" size={28} />} />;
};

export default ChangeName;
