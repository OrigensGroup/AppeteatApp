import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';

import { TextFieldContainer, TextFieldInput } from './styles';

interface LoginTextFieldProps {
  placeholder?: string;
  tertiary?: boolean;
  textContentType: 'emailAddress' | 'password' | 'none';
}

const LoginTextField: React.FunctionComponent<LoginTextFieldProps> = ({ placeholder, textContentType, tertiary }) => {
  const [text, setText] = useState<string>('');
  const theme = useTheme();

  const updateText = (text: string) => setText(text);

  return (
    <TextFieldContainer>
      <TextFieldInput
        defaultValue={text}
        onChangeText={updateText}
        placeholder={placeholder}
        secureTextEntry={textContentType === 'password'}
        textContentType={textContentType}
        placeholderTextColor={theme.colors.border}
        tertiary={tertiary}
      />
    </TextFieldContainer>
  );
};

export default LoginTextField;
