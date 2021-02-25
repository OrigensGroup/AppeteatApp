import React, { useState } from 'react';

import { TextFieldContainer, TextFieldLabel, TextFieldInput, TextFieldText } from './styles';

interface TextFieldProps {
  label?: string;
  placeholder?: string;
  textContentType: 'emailAddress' | 'password' | 'none';
}

const TextField: React.FunctionComponent<TextFieldProps> = ({ label, placeholder, textContentType }) => {
  const [text, setText] = useState<string>('');

  const updateText = (newText: string) => setText(newText);

  return (
    <TextFieldContainer>
      <TextFieldLabel>
        <TextFieldText>{label}</TextFieldText>
      </TextFieldLabel>
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
