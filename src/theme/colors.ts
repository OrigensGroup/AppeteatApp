export interface ColorsInterface {
  active: string;
  secondaryActive: string;
  inactive: string;
  border: string;
  textPrimary: string;
  textSecondary: string;
  loginBottom: string;
  activeRed: string;
  quantityUpdate: string;
  backgroundColor: string;
  fixedWhite: string;
  fixedBlack: string;
  borderFaded: string;
  inputSpinner: string;
  bookSpinnerButton: string;
  subtitles: string;
}

const colors: ColorsInterface = {
  active: '#f69019',
  secondaryActive: '#f1b8ff',
  inactive: '#9d9891',
  border: '#c2c2c2',
  borderFaded: '#484F6369',
  textPrimary: '#000000',
  textSecondary: '#ffffff',
  loginBottom: '#111111',
  activeRed: '#f54e4e',
  quantityUpdate: '#f1f1f1',
  bookSpinnerButton: '#f1f1f1',
  inputSpinner: '#000000',
  backgroundColor: '#ffffff',
  fixedWhite: '#ffffff',
  fixedBlack: '#000000',
  subtitles: '#636363',
};

export const darkColors: ColorsInterface = {
  active: '#1460C1',
  secondaryActive: '#4D3FA1',
  inactive: '#9d9891',
  border: '#484F63D9',
  borderFaded: '#484F63D9',
  textPrimary: '#ffffff',
  textSecondary: '#000000',
  loginBottom: '#0D1A2C',
  activeRed: '#f54e4e',
  quantityUpdate: '#f1f1f1',
  bookSpinnerButton: '#42525E',
  inputSpinner: '#ffffff',
  backgroundColor: '#0D1A2C',
  fixedWhite: '#ffffff',
  fixedBlack: '#000000',
  subtitles: '#B1B1B1',
};

export default colors;
