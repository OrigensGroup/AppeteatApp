import React, { useState } from 'react';
import { useTheme } from 'styled-components';

import { TextFieldContainer, TextFieldInput, CustomiseFieldInput } from './styles';

interface LoginTextFieldProps {
  darkText?: boolean;
  placeholder?: string;
  textContentType: 'emailAddress' | 'password' | 'none';
  updateValue?: (value: string) => void;
  maxLength?: number;
  placeholderTextColor?: string;
}

const LoginTextField: React.FunctionComponent<LoginTextFieldProps> = ({
  darkText,
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
          maxLength={maxLength}
          onChangeText={updateText}
          placeholder={placeholder}
          placeholderTextColor={defaultPlaceholderColor}
          textContentType={textContentType}
        />
      )}
    </TextFieldContainer>
  );
};

export default LoginTextField;
