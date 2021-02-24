import styled from 'styled-components/native';

export const OrdersContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.textSecondary};
  height: 100%;
`;
export const OrdersWrap = styled.View`
  margin: ${({ theme }) => theme.spacing.double};
`;
