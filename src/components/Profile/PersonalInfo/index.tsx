import React from 'react';

import { useNavigation } from '@react-navigation/native';

import Text from '../../shared/Text';
import { scale } from '../../../theme/textScaling';

import { InfoContainer, ValueContainer, FieldContainer } from './styles';

interface PersonalInfoProps {
  field: string;
  value: string;
  navigateTo: string;
  onClick?: () => void;
}

const PersonalInfo: React.FunctionComponent<PersonalInfoProps> = ({ field, navigateTo, value }) => {
  const navigation = useNavigation();

  const navigate = (goTo: string) => () => {
    navigation.navigate(goTo);
  };

  return (
    <InfoContainer>
      <FieldContainer>
        <Text color="primary" fontSize={scale(14)}>
          {field}
        </Text>
      </FieldContainer>
      <ValueContainer onPress={navigate(navigateTo)}>
        <Text color="primary" fontSize={scale(16)}>
          {value}
        </Text>
      </ValueContainer>
    </InfoContainer>
  );
};

export default PersonalInfo;
