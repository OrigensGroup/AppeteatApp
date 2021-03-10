import styled from 'styled-components/native';

export const FinaliseOrderContainer = styled.View`
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.colors.textPrimary};
  padding: ${({ theme }) => theme.spacing.double} ${({ theme }) => theme.spacing.double}
    ${({ theme }) => (theme.os === 'ios' ? 0 : theme.spacing.double)} ${({ theme }) => theme.spacing.double};
  background: ${({ theme }) => theme.colors.backgroundColor};
`;

export const TipCounterWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.spacing.multiple(8)};
  margin-right: ${({ theme }) => theme.spacing.double};
`;

export const Separator = styled.View`
  margin-bottom: ${({ theme }) => theme.spacing.double};
`;
