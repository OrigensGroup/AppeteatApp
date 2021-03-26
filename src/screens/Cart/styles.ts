import styled from 'styled-components/native';

export const CartContainer = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  flex: 1;
`;

export const CartSwiper = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  flex: 1;
`;

export const CartSummarySection = styled.View``;

export const TotalSection = styled.View`
  display: flex;
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  padding-top: ${({ theme }) => theme.spacing.single};
`;

export const TotalRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 ${({ theme }) => theme.spacing.double};
  height: ${({ theme }) => theme.spacing.multiple(5)};
`;
