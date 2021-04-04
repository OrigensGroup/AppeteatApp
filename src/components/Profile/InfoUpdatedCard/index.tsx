import React from 'react';

import Feather from 'react-native-vector-icons/Feather';

import Text from '../../shared/Text';

import { InfoUpdatedCardContainer, IconContainer } from './styles';

interface InfoUpdatedCardProps {}

const InfoUpdatedCard: React.FunctionComponent<InfoUpdatedCardProps> = () => {
  return (
    <InfoUpdatedCardContainer>
      <IconContainer>
        <Feather color="#ffffff" name="info" size={28} />
      </IconContainer>
      <Text color="secondary" fontSize={14}>
        Information successfully updated
      </Text>
    </InfoUpdatedCardContainer>
  );
};

export default InfoUpdatedCard;
