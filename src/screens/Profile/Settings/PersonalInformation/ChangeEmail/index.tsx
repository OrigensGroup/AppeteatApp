import React from "react";
import { ChangeEmailContainer, ChangeEmailWrap } from "./styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import TextField2 from "../../../../../components/TextField2";

interface ChangeEmailProps {}

const ChangeEmail: React.FunctionComponent<ChangeEmailProps> = () => {
  return (
    <ChangeEmailContainer>
      <ChangeEmailWrap>
        <TextField2
          textContentType="none"
          icon={<MaterialIcons name="email" size={28} color="#818181" />}
        ></TextField2>
      </ChangeEmailWrap>
    </ChangeEmailContainer>
  );
};

export default ChangeEmail;
