import styled from 'styled-components/native';

export const CartContainer = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  flex: 1;
`;

export const CartSummarySection = styled.View`
  padding: 0 ${({ theme }) => theme.spacing.double};
`;
