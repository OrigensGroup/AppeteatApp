import React from 'react';

import { TitleText, TitleContainer } from './styles';

interface TextProps {
  fontSize: number;
  color: 'primary' | 'secondary' | 'tertiary' | 'quartiary' | 'errorColor';
  bold?: boolean;
  light?: boolean;
  align?: string;
}

const Text: React.FunctionComponent<TextProps> = ({ children, color, fontSize, light, bold, align = 'left' }) => {
  return (
    <TitleContainer>
      <TitleText color={color} fontSize={fontSize} align={align} bold={bold} light={light}>
        {children}
      </TitleText>
    </TitleContainer>
  );
};

export default Text;
