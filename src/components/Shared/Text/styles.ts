import styled from 'styled-components/native';
import CartProvider from '../../../contexts/Cart';

interface TitleProps {
  fontSize: number;
  color: 'primary' | 'secondary' | 'tertiary' | 'quartiary';
  bold?: boolean;
  light?: boolean;
  align: string;
}

export const TitleContainer = styled.View`
  width: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

export const TitleText = styled.Text<TitleProps>`
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ theme, color }) => {
    switch (color) {
      case 'primary': {
        return theme.colors.textPrimary;
      }
      case 'secondary': {
        return theme.colors.textSecondary;
      }
      case 'tertiary': {
        return theme.colors.active;
      }
      case 'quartiary': {
        return theme.colors.border;
      }

      default:
        return theme.colors.textPrimary;
    }
  }};

  ${({ bold, light }) =>
    bold ? "font-family: 'ComfortaaBold'" : light ? "font-family: 'ComfortaaLight'" : "font-family: 'Comfortaa'"};
  text-align: ${({ align }) => align};
`;
