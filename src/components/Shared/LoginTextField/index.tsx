import React, { useState } from 'react';

import { TextFieldContainer, TextFieldInput } from './styles';

interface TextFieldProps {
  placeholder?: string;
  icon?: React.ReactElement;
  textContentType: 'emailAddress' | 'password' | 'none';
}

const TextField: React.FunctionComponent<TextFieldProps> = ({ icon, placeholder, textContentType }) => {
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

export default TextField;
