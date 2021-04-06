import React from 'react';

import { scale } from '../../../theme/textScaling';

import { TitleText, TitleContainer } from './styles';

interface TextProps {
  fontSize: number;
  color: 'primary' | 'secondary' | 'tertiary' | 'quartiary' | 'errorColor' | 'fixedWhite' | 'fixedBlack';
  bold?: boolean;
  light?: boolean;
  align?: string;
  strike?: boolean;
}

const Text: React.FunctionComponent<TextProps> = ({
  align = 'left',
  bold,
  children,
  color,
  fontSize,
  light,
  strike,
}) => {
  return (
    <TitleContainer>
      <TitleText align={align} bold={bold} color={color} fontSize={scale(fontSize)} light={light} strike={strike}>
        {children}
      </TitleText>
    </TitleContainer>
  );
};

export default Text;
