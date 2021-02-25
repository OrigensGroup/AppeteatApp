import React from 'react';

import { TitleText, TitleContainer } from './styles';

interface TitleProps {
  fontSize: number;
  color: string;
  fontWeight?: string;
  align?: string;
}

const Text: React.FunctionComponent<TitleProps> = ({ children, color, fontSize, fontWeight, align = 'left' }) => {
  return (
    <TitleContainer>
      <TitleText align={align} color={color} fontSize={fontSize} fontWeight={fontWeight}>
        {children}
      </TitleText>
    </TitleContainer>
  );
};

export default Text;
