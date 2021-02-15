import React from "react";

import { TitleText } from "./styles";

interface TitleProps {
  fontSize: number;
  color: string;
  fontWeight?: string;
}

const Title: React.FunctionComponent<TitleProps> = ({
  fontSize,
  color,
  fontWeight,
  children,
}) => {
  return (
    <TitleText fontSize={fontSize} color={color} fontWeight={fontWeight}>
      {children}
    </TitleText>
  );
};

export default Title;
