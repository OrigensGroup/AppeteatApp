import styled from 'styled-components/native';
import CartProvider from '../../../contexts/Cart';

interface TitleProps {
  fontSize: number;
  color: string;
  bold?: boolean;
  align: string;
}
export const TitleContainer = styled.View`
  justify-content: center;
`;

export const TitleText = styled.Text<TitleProps>`
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ color }) => color};
  ${({bold }) => bold ? "font-family: 'ComfortaaBold'" : "font-family: 'Comfortaa'"}
  text-align: ${({ align }) => align};
`;
