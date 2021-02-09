import React from "react";
import { Text } from "react-native";

import { ButtonWrapper} from "./styles";

interface LoginProps {}

const LogInButton: React.FunctionComponent<LoginProps> = () => {
  return (
    <ButtonWrapper>
      <Text>
        Sign In
      </Text>
    </ButtonWrapper>
  );
};

export default LogInButton;
