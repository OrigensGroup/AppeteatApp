import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/native';

import loginTranslations from '../../../../translations/login';
import TextField from '../../../../components/Menu/SearchField';
import { Text } from '../../../../components/Menu/SingleItemCard/styles';
import Title from '../../../../components/Shared/Text';
import { scale } from '../../../../theme/textScaling';

import {
  PersonalInformationContainer,
  RowContainer,
  InnerContainer,
  InfoContainer,
  PersonalInformationWrap,
} from './styles';

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
            <Title color="#000" fontSize={14}>
              Email address
            </Title>
          </InfoContainer>
          <InnerContainer onPress={navigate}>
            <Title color="#000" fontSize={16}>
              hkdj@hotmail.it
            </Title>
          </InnerContainer>
        </RowContainer>
        <RowContainer>
          <InfoContainer>
            <Title color="#000" fontSize={scale(14)}>
              Name
            </Title>
          </InfoContainer>
          <InnerContainer onPress={navigate2}>
            <Title color="#000" fontSize={scale(14)}>
              Alessandro Carpanzano
            </Title>
          </InnerContainer>
        </RowContainer>
      </PersonalInformationWrap>
    </PersonalInformationContainer>
  );
};

export default PersonalInformation;
