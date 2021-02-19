// import original module declarations
import { DefaultTheme } from "styled-components";

import colors, { ColorsInterface } from "./colors";
import spacing, { SpacingInterface } from "./spacing";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    spacing: SpacingInterface;
    colors: ColorsInterface;
  }
}

const theme: DefaultTheme = {
  colors,
  spacing,
};

export default theme;
