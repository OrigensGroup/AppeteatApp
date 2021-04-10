import styled from 'styled-components/native';

import { scale } from '../../../theme/textScaling';

export const TextFieldContainer = styled.View`
  min-height: 45px;
`;

export const TextFieldInput = styled.TextInput`
  border-color: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.spacing.single};
  color: ${({ theme }) => theme.colors.fixedBlack};
  font-family: Comfortaa;
  font-size: ${scale(14)}px;
  border-width: 1px;
  flex: 1;
  padding-left: ${({ theme }) => theme.spacing.single};
`;
export const Container = styled.View`
  margin: ${({ theme }) => theme.spacing.single};
`;

export const ErrorContainer = styled.View`
  margin-top: ${({ theme }) => theme.spacing.single};
`;
