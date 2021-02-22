import React, { useState } from "react";

import { TextFieldContainer, TextFieldInput } from "./styles";

interface TextField2Props {
  placeholder?: string;
  icon?: React.ReactElement;
  textContentType: "emailAddress" | "password" | "none";
}

const TextField2: React.FunctionComponent<TextField2Props> = ({
  placeholder,
  icon,
  textContentType,
}) => {
  const [text, setText] = useState<string>("");

  const updateText = (text: string) => setText(text);

  return (
    <TextFieldContainer>
      {icon}
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
