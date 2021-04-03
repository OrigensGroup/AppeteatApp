import styled from 'styled-components/native';

export const CheckoutContainer = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  flex: 1;
`;

export const CheckoutSwiper = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  flex: 1;
`;

export const CheckoutSummarySection = styled.View``;

export const ItemSummarySection = styled.View`
  flex: 1;
`;
