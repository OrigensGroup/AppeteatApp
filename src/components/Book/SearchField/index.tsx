import React, { useState } from "react";

import { TextFieldContainer, SearchFieldInput } from "./styles";

interface TextFieldProps {
  placeholder?: string;
  textContentType: "emailAddress" | "name" | "password" | "none";
}

const TextField: React.FunctionComponent<TextFieldProps> = ({ placeholder, textContentType }) => {
  const [text, setText] = useState<string>('');

  const updateText = (newText: string) => setText(newText);

  return (
    <TextFieldContainer>
      <SearchFieldInput
        defaultValue={text}
        onChangeText={updateText}
        placeholder={placeholder}
        textContentType={textContentType}
      />
    </TextFieldContainer>
  );
};

export default TextField;
