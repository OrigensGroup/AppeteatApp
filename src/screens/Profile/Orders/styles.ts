import styled from 'styled-components/native';

export const OrdersContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  height: 100%;
  padding: ${({ theme }) => theme.spacing.double};
`;
