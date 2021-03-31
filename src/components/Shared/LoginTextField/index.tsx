import React, { useState } from 'react';
import { useTheme } from 'styled-components';

import Text from '../Text';

import { TextFieldContainer, TextFieldInput, CustomiseFieldInput, ErrorContainer } from './styles';

interface LoginTextFieldProps {
  darkText?: boolean;
  placeholder?: string;
  textContentType: 'emailAddress' | 'password' | 'none';
  updateValue?: (value: string) => void;
  maxLength?: number;
  placeholderTextColor?: string;
  defaultValue?: string;
  error?: string | null;
}

const LoginTextField: React.FunctionComponent<LoginTextFieldProps> = ({
  darkText,
  defaultValue,
  error,
  maxLength,
  placeholder,
  placeholderTextColor,
  textContentType,
  updateValue,
}) => {
  const [text, setText] = useState<string>('');
  const theme = useTheme();

  const defaultPlaceholderColor = placeholderTextColor ?? theme.colors.fixedWhite;

  const updateText = (text: string) => {
    const textToUpdate = textContentType === 'password' ? text.replace(/\s/g, '').trim() : text;
    setText(textToUpdate);
    if (updateValue) updateValue(textToUpdate);
  };

  return (
    <TextFieldContainer>
      {!darkText ? (
        <TextFieldInput
          autoCapitalize="none"
          defaultValue={defaultValue}
          maxLength={maxLength}
          onChangeText={updateText}
          placeholder={placeholder}
          placeholderTextColor={defaultPlaceholderColor}
          secureTextEntry={textContentType === 'password'}
          textContentType={textContentType}
          value={text}
        />
      ) : (
        <CustomiseFieldInput
          autoCapitalize="none"
          defaultValue={defaultValue}
          maxLength={maxLength}
          onChangeText={updateText}
          placeholder={placeholder}
          placeholderTextColor={defaultPlaceholderColor}
          textContentType={textContentType}
        />
      )}
      {error && (
        <ErrorContainer>
          <Text bold color="errorColor" fontSize={14}>
            *{error}
          </Text>
        </ErrorContainer>
      )}
    </TextFieldContainer>
  );
};

export default LoginTextField;
