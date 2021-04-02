import React from 'react';

import Text from '../../shared/Text';
import LoginTextField from '../../shared/LoginTextField';

import { TextFieldWrapper, TitleWrapper, ErrorContainer } from './styles';

interface LogInInputFieldProps {
  secondary?: boolean;
  placeholder: string;
  textContentType: 'emailAddress' | 'password' | 'none';
  label?: string;
  updateValue?: (value: string) => void;
  error?: string | null;
}

const LogInInputField: React.FunctionComponent<LogInInputFieldProps> = ({
  error,
  label,
  placeholder,
  secondary,
  textContentType,
  updateValue,
}) => {
  return (
    <TextFieldWrapper secondary={secondary}>
      <TitleWrapper>
        <Text bold color="fixedWhite" fontSize={14}>
          {label}
        </Text>
      </TitleWrapper>
      <LoginTextField placeholder={placeholder} textContentType={textContentType} updateValue={updateValue} />
      {error && (
        <ErrorContainer>
          <Text bold color="errorColor" fontSize={14}>
            *{error}
          </Text>
        </ErrorContainer>
      )}
    </TextFieldWrapper>
  );
};

export default LogInInputField;
