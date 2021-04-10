// import original module declarations
import { DefaultTheme } from 'styled-components';

import { Platform, useColorScheme } from 'react-native';

import useSettings from '../hooks/useSettings';

import colors, { ColorsInterface, darkColors } from './colors';
import spacing, { SpacingInterface } from './spacing';
import * as shadows from './shadows';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    spacing: SpacingInterface;
    colors: ColorsInterface;
    shadows: shadows.ShadowsInterface;
    os: typeof Platform.OS;
  }
}

const theme: DefaultTheme = {
  colors,
  spacing,
  shadows,
  os: Platform.OS,
};

const darkTheme: DefaultTheme = {
  colors: darkColors,
  spacing,
  shadows,
  os: Platform.OS,
};

export const useThemeSelector = () => {
  const [settings] = useSettings();
  const mode = useColorScheme();

  return settings.features.FEAT_DARK_MODE && mode === 'dark' ? darkTheme : theme;
};

export default theme;
