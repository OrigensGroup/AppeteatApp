import React from "react";

import { ButtonContainer, ButtonText } from "./styles";

interface LoginProps {
  text: string;
  onClick: () => void;
  secondary?: boolean;
}

const LogInButton: React.FunctionComponent<LoginProps> = ({
  onClick,
  secondary,
  text,
}) => {
  return (
    <ButtonContainer onPress={onClick} secondary={secondary}>
      <ButtonText secondary={secondary}>{text}</ButtonText>
    </ButtonContainer>
  );
};

export default LogInButton;
