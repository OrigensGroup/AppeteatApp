import styled from 'styled-components/native';

interface TitleProps {
  fontSize: number;
  color: 'primary' | 'secondary' | 'tertiary' | 'quartiary' | 'errorColor' | 'fixedWhite' | 'fixedBlack';
  bold?: boolean;
  light?: boolean;
  align: string;
  strike?: boolean;
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

  ${({ strike }) =>
    strike &&
    `
    text-decoration-line: line-through;
    text-decoration-style: solid;
  `};

  color: ${({ color, theme }) => {
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

      case 'errorColor': {
        return theme.colors.actionRed;
      }

      case 'fixedWhite': {
        return theme.colors.fixedWhite;
      }

      case 'fixedBlack': {
        return theme.colors.fixedBlack;
      }

      default:
        return theme.colors.textPrimary;
    }
  }};

  ${({ bold, light }) =>
    bold ? "font-family: 'ComfortaaBold'" : light ? "font-family: 'ComfortaaLight'" : "font-family: 'Comfortaa'"};
  text-align: ${({ align }) => align};
`;
