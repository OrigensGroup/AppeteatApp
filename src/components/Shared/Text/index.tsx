import React from 'react';

import { TitleText, TitleContainer } from './styles';

interface TextProps {
  fontSize: number;
  color: string;
  bold?: boolean;
  align?: string;
}

const Text: React.FunctionComponent<TextProps> = ({ children, color, fontSize, bold, align = 'left' }) => {
  return (
    <TitleContainer >
      <TitleText  color={color} fontSize={fontSize} align={align} bold={bold}>
        {children}
      </TitleText>
    </TitleContainer>
  );
};

export default Text;
