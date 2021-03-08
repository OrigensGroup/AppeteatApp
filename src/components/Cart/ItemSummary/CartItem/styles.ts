import styled from 'styled-components/native';

export const CartItemContainer = styled.TouchableOpacity`
  width: 100%;
  background: ${({ theme }) => theme.colors.textSecondary};
`;

export const CartItemInfo = styled.View`
  flex-direction: row;
  margin-top: ${({ theme }) => theme.spacing.triple};
  margin-left:${({ theme }) => theme.spacing.triple};
  padding-right:${({ theme }) => theme.spacing.triple};
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
`;

export const CartItemQuantity = styled.View`
  flex: 1;
`;

export const CartItemTitle = styled.View`
  flex: 3;
  display: flex;
  flex-direction: column;
`;

export const CartItemCustomisation = styled.View`
  margin-top: ${({ theme }) => theme.spacing.single};
  padding-bottom: ${({ theme }) => theme.spacing.double};
`;

export const CartItemPrice = styled.View``;
