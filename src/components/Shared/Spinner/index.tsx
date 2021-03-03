import React from 'react';
import { useTheme } from 'styled-components';
import InputSpinner from 'react-native-input-spinner';

interface InputSpinnerProps {
  initialValue: number;
  onChange: (amount: number) => void;
  hideInput?: boolean;
}

const Spinner: React.FunctionComponent<InputSpinnerProps> = ({ initialValue, hideInput, onChange }) => {
  const theme = useTheme();
  return (
    <InputSpinner
      buttonStyle={{
        borderColor: theme.colors.border,
        borderWidth: 1,
        width: 24,
        height: 24,
        backgroundColor: theme.colors.textSecondary,
        ...(hideInput && { marginHorizontal: 8 }),
      }}
      inputStyle={
        hideInput && {
          display: 'none',
        }
      }
      buttonTextColor={theme.colors.textPrimary}
      fontSize={22}
      initialValue={initialValue}
      min={0.0}
      onChange={onChange}
      step={1}
      textColor={theme.colors.textPrimary}
    />
  );
};

export default Spinner;
