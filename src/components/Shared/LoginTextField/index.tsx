import React, { useState } from 'react';

import { TextFieldContainer, TextFieldInput, CustomiseFieldInput } from './styles';

interface LoginTextFieldProps {
  darkText?: boolean;
  placeholder?: string;
  textContentType: 'emailAddress' | 'password' | 'none';
  updateValue?: (value: string) => void;
  maxLength?: number;
  placeholderTextColor: string;
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
          placeholderTextColor={placeholderTextColor}
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
          placeholderTextColor={placeholderTextColor}
          textContentType={textContentType}
        />
      )}
    </TextFieldContainer>
  );
};

export default LoginTextField;
