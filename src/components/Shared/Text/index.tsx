import React from 'react';

import { TitleText, TitleContainer } from './styles';

interface TitleProps {
  fontSize: number;
  color: string;
  bold?: boolean;
}

const Title: React.FunctionComponent<TitleProps> = ({ children, color, fontSize, bold }) => {
  return (
    <TitleContainer>
      <TitleText color={color} fontSize={fontSize} bold={bold}>
        {children}
      </TitleText>
    </TitleContainer>
  );
};

export default Title;
