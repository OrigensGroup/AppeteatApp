import React, { useState } from 'react';
import { useTheme } from 'styled-components';

import Text from '../Text';

import { TextFieldContainer, TextFieldInput, ErrorContainer, Container } from './styles';

interface LoginTextFieldProps {
  placeholder?: string;
  textContentType: 'emailAddress' | 'password' | 'none';
  updateValue?: (value: string) => void;
  maxLength?: number;
  placeholderTextColor?: string;
  defaultValue?: string;
  error?: string | null;
}

const LoginTextField: React.FunctionComponent<LoginTextFieldProps> = ({
  defaultValue,
  error,
  maxLength,
  placeholder,
  placeholderTextColor,
  textContentType,
  updateValue,
}) => {
  const [text, setText] = useState<string>(defaultValue ?? '');
  const theme = useTheme();

  const defaultPlaceholderColor = placeholderTextColor ?? theme.colors.fixedWhite;

  const updateText = (text: string) => {
    const textToUpdate = textContentType === 'password' ? text.replace(/\s/g, '').trim() : text;
    setText(textToUpdate);
    if (updateValue) updateValue(textToUpdate);
  };

  return (
    <Container>
      <TextFieldContainer>
        <TextFieldInput
          autoCapitalize="none"
          maxLength={maxLength}
          onChangeText={updateText}
          placeholder={placeholder}
          placeholderTextColor={defaultPlaceholderColor}
          secureTextEntry={textContentType === 'password'}
          textContentType={textContentType}
          value={text}
        />
      </TextFieldContainer>
      {error && (
        <ErrorContainer>
          <Text bold color="errorColor" fontSize={14}>
            *{error}
          </Text>
        </ErrorContainer>
      )}
    </Container>
  );
};

export default LoginTextField;
