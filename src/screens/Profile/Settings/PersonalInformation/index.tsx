import React from 'react';

import { useNavigation } from '@react-navigation/native';

import Title from '../../../../components/Shared/Text';

import {
  PersonalInformationContainer,
  RowContainer,
  InnerContainer,
  InfoContainer,
  PersonalInformationWrap,
} from './styles';
import { scale } from '../../../../theme/textScaling';
interface PersonalInformationProps {
  onClick?: () => void;
}

const PersonalInformation: React.FunctionComponent<PersonalInformationProps> = (onClick) => {
  const navigation = useNavigation();
  const navigate = () => {
    navigation.navigate('ChangeEmail');
  };
  const navigate2 = () => {
    navigation.navigate('ChangeName');
  };
  return (
    <PersonalInformationContainer>
      <PersonalInformationWrap>
        <RowContainer>
          <InfoContainer>
            <Title fontSize={14} color="primary">
              Email address
            </Title>
          </InfoContainer>
          <InnerContainer onPress={navigate}>
            <Title fontSize={16} color="primary">
              hkdj@hotmail.it
            </Title>
          </InnerContainer>
        </RowContainer>
        <RowContainer>
          <InfoContainer>
            <Title fontSize={scale(14)} color="primary">
              Name
            </Title>
          </InfoContainer>
          <InnerContainer onPress={navigate2}>
            <Title fontSize={scale(14)} color="primary">
              Alessandro Carpanzano
            </Title>
          </InnerContainer>
        </RowContainer>
      </PersonalInformationWrap>
    </PersonalInformationContainer>
  );
};

export default PersonalInformation;
