import React from 'react';
import Text from '../../Shared/Text';
import LoginTextField from '../../Shared/LoginTextField';

import { TextFieldWrapper, TitleWrapper, ErrorContainer } from './styles';

interface LogInInputFieldProps {
  secondary?: boolean;
  placeholder: string;
  textContentType: 'emailAddress' | 'password' | 'none';
  label: string;
  updateValue?: (value: string) => void;
  error?: string | null;
}

const LogInInputField: React.FunctionComponent<LogInInputFieldProps> = ({
  secondary,
  placeholder,
  textContentType,
  label,
  updateValue,
  error,
}) => {
  return (
    <TextFieldWrapper secondary={secondary}>
      <TitleWrapper>
        <Text color="secondary" fontSize={14} bold>
          {label}
        </Text>
      </TitleWrapper>
      <LoginTextField updateValue={updateValue} placeholder={placeholder} textContentType={textContentType} />
      {error && (
        <ErrorContainer>
          <Text color="errorColor" fontSize={14} bold>
            *{error}
          </Text>
        </ErrorContainer>
      )}
    </TextFieldWrapper>
  );
};

export default LogInInputField;
