import React from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps {
  onPress?: () => void;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  onPress,
}) => {
  return <ButtonContainer onPress={onPress}>{children}</ButtonContainer>;
};

export default Button;
