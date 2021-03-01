import React, { useState } from 'react';

import { TextFieldContainer, TextFieldInput } from './styles';

interface LoginTextFieldProps {
  placeholder?: string;
  icon?: React.ReactElement;
  textContentType: 'emailAddress' | 'password' | 'none';
}

const LoginTextField: React.FunctionComponent<LoginTextFieldProps> = ({ icon, placeholder, textContentType }) => {
  const [text, setText] = useState<string>('');

  const updateText = (text: string) => setText(text);

  return (
    <TextFieldContainer>
      {icon}
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
