import React, { useState } from 'react';

import { useTheme } from 'styled-components';

import Text from '../../shared/Text';

import { TextFieldWrapper, TitleWrapper, ErrorContainer, TextFieldInput } from './styles';

interface LogInInputFieldProps {
  secondary?: boolean;
  placeholder?: string;
  placeholderTextColor?: string;
  textContentType: 'emailAddress' | 'password' | 'none';
  label?: string;
  updateValue?: (value: string) => void;
  error?: string | null;
}

const LogInInputField: React.FunctionComponent<LogInInputFieldProps> = ({
  error,
  label,
  placeholder,
  placeholderTextColor,
  secondary,
  textContentType,
  updateValue,
}) => {
  const [text, setText] = useState<string>();
  const theme = useTheme();

  const defaultPlaceholderColor = placeholderTextColor ?? theme.colors.fixedWhite;

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
        placeholder={placeholder}
        placeholderTextColor={defaultPlaceholderColor}
        secureTextEntry={textContentType === 'password'}
        textContentType={textContentType}
        value={text}
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
