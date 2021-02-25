import React, { useState } from 'react';

import { TextFieldContainer, TextFieldInput } from './styles';

interface TextField2Props {
  placeholder?: string;
  icon?: React.ReactElement;
  textContentType: 'emailAddress' | 'password' | 'none';
}

const TextField2: React.FunctionComponent<TextField2Props> = ({ icon, placeholder, textContentType }) => {
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

export default TextField2;
