import React from "react";
import { PasswordContainer } from "./styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import TextField2 from "../../../../components/TextField2";

interface PasswordProps {}

const Password: React.FunctionComponent<PasswordProps> = () => {
  return (
    <PasswordContainer>
      <TextField2
        placeholder="Current password"
        textContentType="password"
      ></TextField2>
      <TextField2
        placeholder="New password"
        textContentType="password"
      ></TextField2>
      <TextField2
        placeholder="Re-enter new password"
        textContentType="password"
      ></TextField2>
    </PasswordContainer>
  );
};

export default Password;
