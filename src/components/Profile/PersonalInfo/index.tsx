import React from 'react';

import { useNavigation } from '@react-navigation/native';

import {
  RowContainer,
  InnerContainer,
  InfoContainer,
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
        <RowContainer >
          <InfoContainer>
            <Text fontSize={scale(14)} color="#000">
              {field}
            </Text>
          </InfoContainer>
          <InnerContainer onPress={navigate(navigateTo)}>
            <Text fontSize={scale(16)} color="#000">
              {value}
            </Text>
          </InnerContainer>
        </RowContainer>
  );
};

export default PersonalInfo;
