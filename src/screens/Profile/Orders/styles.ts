import styled from 'styled-components/native';

export const OrdersContainer = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  height: 100%;
`;

export const OrdersList = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.triple} ${({ theme }) => theme.spacing.double} 0
    ${({ theme }) => theme.spacing.double};
`;
