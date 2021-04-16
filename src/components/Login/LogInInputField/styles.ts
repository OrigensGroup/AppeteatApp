import styled from 'styled-components/native';

import { scale } from '../../../theme/textScaling';

interface ButtonContainerProps {
  secondary?: boolean;
}

export const TextFieldWrapper = styled.View<ButtonContainerProps>`
  flex: 1;
  margin-bottom: ${({ theme }) => theme.spacing.single};
  margin-top: ${({ theme }) => theme.spacing.single};
  ${({ secondary }) =>
    secondary &&
    `
    margin-bottom: 0; 
  `};
`;
export const TextFieldInput = styled.TextInput`
  border-bottom-color: ${({ theme }) => theme.colors.active};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: Comfortaa;
  font-size: ${scale(16)}px;
  border-bottom-width: 1px;
  flex: 1;
  padding: ${({ theme }) => theme.spacing.single} 0;
`;


export const TitleWrapper = styled.View``;

export const ErrorContainer = styled.View`
  margin-top: ${({ theme }) => theme.spacing.single};
`;
