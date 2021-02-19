import React, { useState } from "react";

import {
  TextFieldContainer,
  TextFieldLabel,
  TextFieldInput,
  TextFieldText,
} from "./styles";

interface TextFieldProps {
  label?: string;
  placeholder?: string;
  textContentType: "emailAddress" | "password" | "none";
}

const TextField: React.FunctionComponent<TextFieldProps> = ({
  label,
  placeholder,
  textContentType,
}) => {
  const [text, setText] = useState<string>("");

  const updateText = (text: string) => setText(text);

  return (
    <TextFieldContainer>
      <TextFieldLabel>
        <TextFieldText>{label}</TextFieldText>
      </TextFieldLabel>
      <TextFieldInput
        placeholder={placeholder}
        textContentType={textContentType}
        secureTextEntry={textContentType === "password"}
        onChangeText={updateText}
        defaultValue={text}
      />
    </TextFieldContainer>
  );
};

export default TextField;
