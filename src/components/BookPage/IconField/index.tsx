import React from "react";
import { IconFieldContainer } from "./styles";

interface IconFieldProps {
  backgroundColor: string;
  justifyContent?: string;
}

const IconField: React.FunctionComponent<IconFieldProps> = ({
  children,
  backgroundColor,
  justifyContent,
}) => {
  return (
    <IconFieldContainer
      backgroundColor={backgroundColor}
      justifyContent={justifyContent}
    >
      {children}
    </IconFieldContainer>
  );
};

export default IconField;
