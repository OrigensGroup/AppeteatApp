import React, { useState } from "react";

import {
  TextFieldContainer,
  TextFieldLabel,
  TextFieldInput,
  TextFieldText,
} from "./styles";

interface TextField2Props {
  placeholder?: string;
  textContentType: "emailAddress" | "password" | "none";
}

const TextField2: React.FunctionComponent<TextField2Props> = ({
  placeholder,
  textContentType,
}) => {
  const [text, setText] = useState<string>("");

  const updateText = (text: string) => setText(text);

  return (
    <TextFieldContainer>
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

export default TextField2;
