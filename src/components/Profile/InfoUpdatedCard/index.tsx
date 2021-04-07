import React from 'react';

import Feather from 'react-native-vector-icons/Feather';

import profileTranslations from '../../../translations/profile';

import Text from '../../shared/Text';

import { InfoUpdatedCardContainer, IconContainer } from './styles';

interface InfoUpdatedCardProps {
  error?: boolean;
}

const InfoUpdatedCard: React.FunctionComponent<InfoUpdatedCardProps> = ({ error }) => {
  return (
    <InfoUpdatedCardContainer error={error}>
      <IconContainer>
        <Feather color="#ffffff" name="info" size={28} />
      </IconContainer>
      <Text color="secondary" fontSize={14}>
        {error ? profileTranslations.settingsPage.error : profileTranslations.settingsPage.informationUpdated}
      </Text>
    </InfoUpdatedCardContainer>
  );
};

export default InfoUpdatedCard;
