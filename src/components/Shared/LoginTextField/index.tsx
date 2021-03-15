import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';

import { TextFieldContainer, TextFieldInput } from './styles';

interface LoginTextFieldProps {
  placeholder?: string;
  textContentType: 'emailAddress' | 'password' | 'none';
  updateValue?: (value: string) => void;
}

const LoginTextField: React.FunctionComponent<LoginTextFieldProps> = ({
  placeholder,
  textContentType,
  updateValue,
}) => {
  const [text, setText] = useState<string>('');
  const theme = useTheme();

  const updateText = (text: string) => {
    const textToUpdate = textContentType === 'password' ? text.replace(/\s/g, '').trim() : text;
    setText(textToUpdate);
    if (updateValue) updateValue(textToUpdate);
  };

  return (
    <TextFieldContainer>
      <TextFieldInput
        autoCapitalize="none"
        onChangeText={updateText}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.background}
        secureTextEntry={textContentType === 'password'}
        textContentType={textContentType}
        value={text}
      />
    </TextFieldContainer>
  );
};

export default LoginTextField;
