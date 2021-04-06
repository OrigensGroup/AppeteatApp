export interface ColorsInterface {
  active: string;
  secondaryActive: string;
  border: string;

  modalbackground: string;
  actionRed: string;
  textPrimary: string;
  textSecondary: string;
  backgroundColor: string;
  fixedWhite: string;
  fixedBlack: string;
}

const colors: ColorsInterface = {
  active: '#f69019',
  secondaryActive: '#f1b8ff',

  border: '#c2c2c2',
  modalbackground: '#ebebed',
  actionRed: '#f54e4e',
  textPrimary: '#000000',
  textSecondary: '#ffffff',
  backgroundColor: '#ffffff',
  fixedWhite: '#ffffff',
  fixedBlack: '#000000',
};

export const darkColors: ColorsInterface = {
  active: '#1460C1',
  secondaryActive: '#4D3FA1',

  border: '#484F63D9',
  modalbackground: '#f1f1f1',
  textPrimary: '#ffffff',
  textSecondary: '#000000',
  actionRed: '#f54e4e',
  backgroundColor: '#0D1A2C',
  fixedWhite: '#ffffff',
  fixedBlack: '#000000',
};

export default colors;
