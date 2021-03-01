import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;
  height: ${({ theme }) => theme.spacing.multiple(11)};
  border-radius: ${({ theme }) => theme.spacing.multiple(3)};
  border-width: 1px;
  display: flex;
  flex-direction: row;
  border-color: #c2c2c2;
`;
export const OrderCardContainer = styled.View`
  padding: ${({ theme }) => theme.spacing.single};
`;
export const DrinkDesc = styled.View`
  padding: ${({ theme }) => theme.spacing.double} 0 0 0;
  width: 60%;
`;
export const DateContainer = styled.View`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Circle = styled.View`
  width: 65%;
  height: 65%;
  background-color: ${({ theme }) => theme.colors.active};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PriceContainer = styled.View`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Button = styled.TouchableOpacity`
  padding-top: ${({ theme }) => theme.spacing.double};
`;

