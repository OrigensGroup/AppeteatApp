import styled from 'styled-components/native';

export const CartItemContainer = styled.TouchableOpacity`
  width: 100%;
  background: ${({ theme }) => theme.colors.backgroundColor};
  height: ${({ theme }) => theme.spacing.multiple(15)};
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
`;

export const CartItemInfo = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.triple};
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.spacing.double} ${({ theme }) => theme.spacing.double};
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
  height: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.spacing.double} 0;
  justify-content: space-between;
`;

export const CartItemQuantity = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${({ theme }) => theme.spacing.single};
  height: ${({ theme }) => theme.spacing.triple};
  border-radius: ${({ theme }) => theme.spacing.single};
  margin-right: ${({ theme }) => theme.spacing.double};
`;

export const CartItemPrice = styled.View`
  margin-top: auto;
  margin-right: ${({ theme }) => theme.spacing.double};
`;

export const CartItemCustomisation = styled.View`
  margin-top: ${({ theme }) => theme.spacing.single};
  padding-bottom: ${({ theme }) => theme.spacing.double};
`;
