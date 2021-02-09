export interface ColorsInterface {
  brand: {
    primary: string;
    secondary: string;
  };
  messaging: {
    error: string;
  };
  copy: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  util: {
    primaryBackground: string;
    secondaryBackground: string;
    tertiaryBackground: string;
    inputBorder: string;
    disabled: string;
    hover: string;
  };
}

const colors: ColorsInterface = {
  brand: {
    primary: '#2352a9',
    secondary: '#F5E663'
  },
  messaging: {
    error: '#f97050'
  },
  copy: {
    primary: '#ffffff',
    secondary: '#536977',
    tertiary: '#000000'
  },
  util: {
    primaryBackground: '#1b1d23',
    secondaryBackground: '#B4AEAC',
    tertiaryBackground: '#0f1f2a',
    inputBorder: '#dce1e7',
    disabled: '#d7e1ea',
    hover: '495057'
  }
};

export default colors;
