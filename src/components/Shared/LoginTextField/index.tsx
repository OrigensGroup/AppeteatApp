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
    setText(text);
    if (updateValue) updateValue(text);
  };

  return (
    <TextFieldContainer>
      <TextFieldInput
        defaultValue={text}
        onChangeText={updateText}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.border}
        secureTextEntry={textContentType === 'password'}
        textContentType={textContentType}
      />
    </TextFieldContainer>
  );
};

export default LoginTextField;
