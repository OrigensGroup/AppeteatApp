export interface ColorsInterface {
  active: string;
  inactive: string;
  border: string;
  textPrimary: string;
  textSecondary: string;
}

const colors: ColorsInterface = {
  active: '#F69019',
  inactive: '#9D9891',
  border: '#C2C2C2',
  textPrimary: '#000000',
  textSecondary: '${({ theme }) => theme.colors.textSecondary};',
};

export default colors;
