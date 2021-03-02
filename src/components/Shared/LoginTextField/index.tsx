import React, { useState } from 'react';

import { TextFieldContainer, TextFieldInput } from './styles';

interface LoginTextFieldProps {
  placeholder?: string;
  textContentType: 'emailAddress' | 'password' | 'none';
}

const LoginTextField: React.FunctionComponent<LoginTextFieldProps> = ({ placeholder, textContentType }) => {
  const [text, setText] = useState<string>('');

  const updateText = (text: string) => setText(text);

  return (
    <TextFieldContainer>
      <TextFieldInput
        defaultValue={text}
        onChangeText={updateText}
        placeholder={placeholder}
        secureTextEntry={textContentType === 'password'}
        textContentType={textContentType}
      />
    </TextFieldContainer>
  );
};

export default LoginTextField;
