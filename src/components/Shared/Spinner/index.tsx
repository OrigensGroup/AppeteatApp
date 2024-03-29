import React from 'react';
import { useTheme } from 'styled-components';
import InputSpinner from 'react-native-input-spinner';

interface InputSpinnerProps {
  initialValue: number;
  onChange: (amount: number) => void;
  hideInput?: boolean;
}

const Spinner: React.FunctionComponent<InputSpinnerProps> = ({ hideInput, initialValue, onChange }) => {
  const theme = useTheme();
  return (
    <InputSpinner
      width={80}
      height={32}
      // @ts-ignore
      buttonPressTextColor={theme.colors.textPrimary}
      buttonStyle={{
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: theme.colors.border,
        backgroundColor: theme.colors.backgroundColor,
        borderWidth: 1,
        width: 32,
        height: 32,
        borderRadius: 16,
        ...(hideInput && { marginHorizontal: 8 }),
      }}
      // @ts-ignore
      buttonTextColor={theme.colors.textPrimary}
      inputStyle={
        hideInput && {
          display: 'none',
          width: 0,
        }
      }
      max={99}
      min={0.0}
      onChange={onChange}
      step={1}
      textColor={theme.colors.textPrimary}
      value={initialValue}
    />
  );
};

export default Spinner;
