import styled from 'styled-components/native';

import { scale } from '../../../../theme/textScaling';

interface CardDetailsProps {
  active?: boolean;
}

export const CardDetailsContainer = styled.View`
  margin-top: ${({ theme }) => theme.spacing.multiple(3)};
  flex: 1;
`;
export const TextFieldInput = styled.TextInput<CardDetailsProps>`
  border-color: ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: Comfortaa, sans-serif;
  font-size: ${scale(16)}px;
  border-bottom-width: 2px;
  margin-bottom: ${({ theme }) => theme.spacing.single};
  border-radius: ${({ theme }) => theme.spacing.single};
  padding: ${({ theme }) => theme.spacing.single};
  ${({ active }) =>
    active &&
    `
    border-color: #4FBBCA;
  `}
`;
export const DateCvvContainer = styled.View`
  display: flex;
  flex-direction: row;
`;
export const TextContainer = styled.View`
  margin-bottom: ${({ theme }) => theme.spacing.single};
`;

export const DateCvvWrap = styled.View`
  flex: 1;
  margin-bottom: ${({ theme }) => theme.spacing.single};
`;
export const MarginDiv = styled.View`
  width: ${({ theme }) => theme.spacing.double};
`;
