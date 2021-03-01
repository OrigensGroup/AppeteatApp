import React from 'react';

import { useNavigation } from '@react-navigation/native';

import {
  InfoContainer,
  ValueContainer,
  FieldContainer,
} from "./styles";
import Text from '../../Shared/Text';
import { scale } from '../../../theme/textScaling';

interface PersonalInfoProps {
  field: string;
  value: string;
  navigateTo: string;
  onClick?: () => void;
}

const PersonalInfo: React.FunctionComponent<PersonalInfoProps> = ({onClick, navigateTo, field, value}) => {
  const navigation = useNavigation();

  const navigate = (goTo: string) => () => {
    navigation.navigate(goTo);
  };
  return (
        <InfoContainer >
          <FieldContainer>
            <Text fontSize={scale(14)} color="primary">
              {field}
            </Text>
          </FieldContainer>
          <ValueContainer onPress={navigate(navigateTo)}>
            <Text fontSize={scale(16)} color="primary">
              {value}
            </Text>
          </ValueContainer>
        </InfoContainer>
  );
};

export default PersonalInfo;
