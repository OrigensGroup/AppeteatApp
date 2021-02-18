import React, { useState } from 'react';

import {
  TextFieldContainer,
  SearchFieldInput,
} from './styles';

interface TextFieldProps {
  placeholder?: string;
  textContentType: 'name' | 'none';
}

const TextField: React.FunctionComponent<TextFieldProps> = ({
  placeholder,
  textContentType,
}) => {
  const [text, setText] = useState<string>('');

  const updateText = (text: string) => setText(text);

  return (
    <TextFieldContainer>
      <SearchFieldInput
        placeholder={placeholder}
        textContentType={textContentType}
        onChangeText={updateText}
        defaultValue={text}
      />
    </TextFieldContainer>
  );
};

export default TextField;
