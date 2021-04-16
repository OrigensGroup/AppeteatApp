import styled from 'styled-components/native';

export const CartItemInfo = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.double} ${({ theme }) => theme.spacing.triple};
`;

export const CartItemTitle = styled.View`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const CartMainItem = styled.View`
  margin-top: ${({ theme }) => theme.spacing.single};
`;

// export const CartItemTitle = styled.View`
//   display: flex;
//   flex-direction: column;
// `;

export const CartItemQuantity = styled.View`
  margin-right: ${({ theme }) => theme.spacing.single};
  margin-bottom: ${({ theme }) => theme.spacing.double};
`;

export const CartItemPrice = styled.View`
  margin-top: auto;
  margin-right: ${({ theme }) => theme.spacing.single};
`;

export const CartItemCustomisation = styled.View`
  margin-top: ${({ theme }) => theme.spacing.single};
`;

export const CartItemContainer = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.backgroundColor};

  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};

  display: flex;
  flex-direction: row;

  padding: ${({ theme }) => theme.spacing.double} ${({ theme }) => theme.spacing.triple};
`;

export const ImageWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CartItemDescription = styled.View`
  flex: 5;
  display: flex;
  padding: ${({ theme }) => theme.spacing.single};
`;

export const CartItemNumbers = styled.View`
  flex: 2;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.single} 0;
`;
