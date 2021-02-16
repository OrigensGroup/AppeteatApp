import React from "react";

import { TitleText, TitleContainer } from "./styles";

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
    <TitleContainer>
      <TitleText fontSize={fontSize} color={color} fontWeight={fontWeight}>
        {children}
      </TitleText>
    </TitleContainer>
  );
};

export default Title;
