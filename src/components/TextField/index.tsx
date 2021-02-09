import React, { useState } from "react";
import { Text } from "react-native";
import { TextFieldContainer, TextFieldLabel } from "./styles";

interface TextFieldProps {
  label: string;
  placeholder?: string;
  textContentType: "email" | "password" | "text";
  secureTextEntry?: boolean;
}

const TextField: React.FunctionComponent<TextFieldProps> = ({
  label,
  placeholder,
  textContentType,
  secureTextEntry,
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
        secureTextEntry={textContentType == "password" ? true : false}
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />
    </>
  );
};

export default TextField;
