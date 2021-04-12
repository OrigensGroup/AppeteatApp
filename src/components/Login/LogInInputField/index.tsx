import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import { useTheme } from 'styled-components';

import Text from '../../shared/Text';

import { TextFieldWrapper, TitleWrapper, ErrorContainer, TextFieldInput } from './styles';

interface LogInInputFieldProps extends TextInputProps {
  secondary?: boolean;
  label?: string;
  updateValue?: (value: string) => void;
  error?: string | null;
}

const LogInInputField: React.FunctionComponent<LogInInputFieldProps> = ({
  error,
  label,
  secondary,
  textContentType,
  updateValue,
  ...props
}) => {
  const [text, setText] = useState<string>();
  const theme = useTheme();

  const defaultPlaceholderColor = theme.colors.fixedWhite;

  const updateText = (text: string) => {
    const textToUpdate = textContentType === 'password' ? text.replace(/\s/g, '').trim() : text;
    setText(textToUpdate);
    if (updateValue) updateValue(textToUpdate);
  };

  return (
    <TextFieldWrapper secondary={secondary}>
      <TitleWrapper>
        <Text bold color="fixedWhite" fontSize={14}>
          {label}
        </Text>
      </TitleWrapper>
      <TextFieldInput
        onChangeText={updateText}
        placeholderTextColor={defaultPlaceholderColor}
        secureTextEntry={textContentType === 'password'}
        textContentType={textContentType}
        value={text}
        {...props}
      />
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
