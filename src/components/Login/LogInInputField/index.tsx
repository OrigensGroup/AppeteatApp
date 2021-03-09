import React from 'react';
import Text from '../../shared/Text';
import LoginTextField from '../../shared/LoginTextField';

import { TextFieldWrapper, TitleWrapper } from './styles';

interface LogInInputFieldProps {
  secondary?: boolean;
  placeholder: string;
  textContentType: 'emailAddress' | 'password' | 'none';
  label: string;
  updateValue?: (value: string) => void;
}

const LogInInputField: React.FunctionComponent<LogInInputFieldProps> = ({
  secondary,
  placeholder,
  textContentType,
  label,
  updateValue,
}) => {
  return (
    <TextFieldWrapper secondary={secondary}>
      <TitleWrapper>
        <Text color="secondary" fontSize={14} bold>
          {label}
        </Text>
      </TitleWrapper>
      <LoginTextField updateValue={updateValue} placeholder={placeholder} textContentType={textContentType} />
    </TextFieldWrapper>
  );
};

export default LogInInputField;
