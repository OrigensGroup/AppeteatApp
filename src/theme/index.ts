// import original module declarations
import { DefaultTheme } from 'styled-components';

import { Platform, useColorScheme } from 'react-native';

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
  const mode = useColorScheme();

  return mode === 'light' ? theme : darkTheme;
};

export default theme;
