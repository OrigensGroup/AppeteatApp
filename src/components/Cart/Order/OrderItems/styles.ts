import styled from 'styled-components/native';

export const OrderItemsContainer = styled.View`
  flex: 1;
`;

export const OrderItemTitle = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: ${({ theme }) => theme.spacing.triple};
`;

export const OrderItemText = styled.View``;

export const OrderItemInvoice = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.spacing.triple};
  height: ${({ theme }) => theme.spacing.triple};
  background: ${({ theme }) => theme.colors.border}80;
  border-radius: ${({ theme }) => theme.spacing.triple};
`;

export const OrderItemSection = styled.View`
  flex: 1;
`;
