import styled from 'styled-components/native';

export const CartItemContainer = styled.TouchableOpacity`
  width: 100%;
  background: ${({ theme }) => theme.colors.backgroundColor};
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
`;

export const CartItemInfo = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.double} ${({ theme }) => theme.spacing.triple};
`;

export const ImageWrapper = styled.View`
  flex: 1;
  max-width: ${({ theme }) => theme.spacing.multiple(15)};
  max-height: ${({ theme }) => theme.spacing.multiple(15)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CartItemDescription = styled.View`
  flex: 1;
  display: flex;
  padding: ${({ theme }) => theme.spacing.single};
`;

export const CartItemTitle = styled.View`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const CartMainItem = styled.View`
  flex: 1;
  margin-top: ${({ theme }) => theme.spacing.single};
`;

// export const CartItemTitle = styled.View`
//   display: flex;
//   flex-direction: column;
// `;

export const CartItemNumbers = styled.View`
  display: flex;
  height: 100%;
  align-items: flex-end;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.single};
  margin-top: auto;
`;

export const CartItemQuantity = styled.View`
  margin-right: ${({ theme }) => theme.spacing.single};
  margin-bottom: ${({ theme }) => theme.spacing.double};
`;

export const CartItemPrice = styled.View`
  margin-top: auto;
  margin-right: ${({ theme }) => theme.spacing.single};
`;

export const CartItemCustomisation = styled.View`
  flex: 1;
  display: flex;
  margin-top: ${({ theme }) => theme.spacing.single};
`;
