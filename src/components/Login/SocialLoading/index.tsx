import React from 'react';
import { useTheme } from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

import { ActivityIndicator } from 'react-native';

import { styles } from './styles';

interface SocialLoadingProps {}

const SocialLoading: React.FunctionComponent<SocialLoadingProps> = () => {
  const theme = useTheme();

  return (
    <LinearGradient
      colors={[theme.colors.active, theme.colors.secondaryActive]}
      end={{ x: 1, y: 1 }}
      start={{ x: 0, y: 0 }}
      style={styles.linearGradient}
    >
      <ActivityIndicator color={theme.colors.textSecondary} size="large" />
    </LinearGradient>
  );
};

export default SocialLoading;
