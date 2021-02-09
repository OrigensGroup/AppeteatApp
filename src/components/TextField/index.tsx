import React, { useState } from "react";
import { Text } from "react-native";
import { TextFieldContainer, TextFieldLabel } from "./styles";

interface TextFieldProps {
  label: string;
  placeholder?: string;
  textContentType: "email" | "password" | "text";
}

const TextField: React.FunctionComponent<TextFieldProps> = ({
  label,
  placeholder,
  textContentType,
}) => {
  const [text, setText] = useState("");
  return (
    <>
      <TextFieldLabel>
        <Text>{label}</Text>
      </TextFieldLabel>
      <TextFieldContainer
        placeholder={placeholder}
        textContentType={textContentType}
        secureTextEntry={textContentType === "password"}
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />
    </>
  );
};

export default TextField;
