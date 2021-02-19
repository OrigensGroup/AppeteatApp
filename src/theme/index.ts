// import original module declarations
import { DefaultTheme } from 'styled-components';

import colors, { ColorsInterface } from './colors';
import spacing, { SpacingInterface } from './spacing';
import * as shadows from './shadows';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    spacing: SpacingInterface;
    colors: ColorsInterface;
    shadows: shadows.ShadowsInterface;
  }
}

const theme: DefaultTheme = {
  colors,
  spacing,
  shadows,
};

export default theme;
