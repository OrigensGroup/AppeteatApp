import React from "react";
import { Text } from "react-native";
import TextField from "../../components/TextField";

import { TextFieldWrapper, TextFieldsContainer } from "./styles";

interface LoginProps {}

const Login: React.FunctionComponent<LoginProps> = () => {
  return (
    <TextFieldsContainer>
      <TextFieldWrapper>
        <TextField
          label={"E-mail"}
          placeholder="example@live.it"
          textContentType="email"
        ></TextField>
      </TextFieldWrapper>
      <TextFieldWrapper>
        <TextField
          label={"Password"}
          placeholder="*******"
          textContentType="password"
        ></TextField>
      </TextFieldWrapper>
    </TextFieldsContainer>
  );
};

export default Login;
