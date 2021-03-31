import styled from 'styled-components/native';

import { scale } from '../../../../theme/textScaling';

export const TextFieldContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TextFieldInput = styled.TextInput`
  border-color: ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: Comfortaa, sans-serif;
  font-size: ${scale(16)}px;
  border-width: 1px;
  border-radius: ${({ theme }) => theme.spacing.single};
  padding: ${({ theme }) => theme.spacing.single};
`;
