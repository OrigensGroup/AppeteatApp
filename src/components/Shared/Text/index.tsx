import React from "react";

import { TitleText, TitleContainer } from "./styles";

interface TitleProps {
  fontSize: number;
  color: string;
  fontWeight?: string;
}

const Title: React.FunctionComponent<TitleProps> = ({
  children,
  color,
  fontSize,
  fontWeight,
}) => {
  return (
    <TitleContainer>
      <TitleText color={color} fontSize={fontSize} fontWeight={fontWeight}>
        {children}
      </TitleText>
    </TitleContainer>
  );
};

export default Title;
