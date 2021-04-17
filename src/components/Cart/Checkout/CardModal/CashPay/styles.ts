import styled from 'styled-components/native';

export const CashPayContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: ${({ theme }) => theme.spacing.multiple(6)};
  position: relative;
`;

export const CashPayIcon = styled.View`
  position: absolute;
  width: ${({ theme }) => theme.spacing.multiple(6)};
  height: ${({ theme }) => theme.spacing.multiple(6)};
  align-items: center;
  justify-content: center;
`;

export const CashPayText = styled.View`
  margin: auto;
`;
