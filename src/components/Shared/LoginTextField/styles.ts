import styled from 'styled-components/native';

import { scale } from '../../../theme/textScaling';

export const TextFieldContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.single};
`;

export const TextFieldInput = styled.TextInput`
  border-bottom-color: ${({ theme }) => theme.colors.fixedWhite};
  color: ${({ theme }) => theme.colors.fixedWhite};
  font-family: Comfortaa;
  font-size: ${scale(16)}px;
  border-bottom-width: 1px;
  flex: 1;
  padding: 0;
  padding-bottom: ${({ theme }) => theme.spacing.half};
`;

export const CustomiseFieldInput = styled.TextInput`
  border-color: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.spacing.single};
  color: ${({ theme }) => theme.colors.fixedBlack};
  font-family: Comfortaa;
  font-size: ${scale(16)}px;
  border-width: 1px;
  flex: 1;
  padding: ${({ theme }) => theme.spacing.single} ${({ theme }) => theme.spacing.double};
`;
export const ErrorContainer = styled.View`
  margin-top: ${({ theme }) => theme.spacing.single};
`;
