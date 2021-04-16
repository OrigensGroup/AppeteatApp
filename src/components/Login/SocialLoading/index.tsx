import React from 'react';
import { useTheme } from 'styled-components';

import { ActivityIndicator } from 'react-native';

import { LoadingSection } from './styles';

interface SocialLoadingProps {}

const SocialLoading: React.FunctionComponent<SocialLoadingProps> = () => {
  const theme = useTheme();

  return (
    <LoadingSection>
      <ActivityIndicator color={theme.colors.textPrimary} size="large" />
    </LoadingSection>
  );
};

export default SocialLoading;
