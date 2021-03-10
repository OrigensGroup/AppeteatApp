import styled from 'styled-components/native';

import { scale } from '../../../theme/textScaling';

export const TextFieldContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.single};
`;

export const TextFieldInput = styled.TextInput`
  font-family: Comfortaa;
  font-size: ${scale(16)}px;
  border-bottom-color: ${({ theme }) => theme.colors.textPrimary};
  color: ${({ theme }) => theme.colors.border};
  border-bottom-width: 1px;
  flex: 1;
  padding: 0;
  padding-bottom: ${({ theme }) => theme.spacing.half};
`;
