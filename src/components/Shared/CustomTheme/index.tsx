import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import useSettings from '../../../hooks/useSettings';
import { useThemeSelector } from '../../../theme';

export const CustomTheme: React.FC = ({ children }) => {
  const theme = useThemeSelector();
  const [settings] = useSettings();

  return <ThemeProvider theme={{ ...theme, colors: settings.colors }}>{children}</ThemeProvider>;
};
