import styled from 'styled-components/native';

export const OrderCardContainer = styled.View`
  height: ${({ theme }) => theme.spacing.multiple(13)};
  min-height: ${({ theme }) => theme.spacing.multiple(11)};
  padding: ${({ theme }) => theme.spacing.double} ${({ theme }) => theme.spacing.single};
`;

export const Container = styled.TouchableOpacity`
  flex: 1;
  display: flex;
  flex-direction: row;
  border-color: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.spacing.multiple(3)};

  border-width: 1px;
  min-height: ${({ theme }) => theme.spacing.multiple(11)};

  padding: ${({ theme }) => theme.spacing.single} 0;
`;

export const DateContainer = styled.View`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DrinkDesc = styled.View`
  flex: 5;
  padding: ${({ theme }) => theme.spacing.single} 0;
`;

export const Circle = styled.View`
  background-color: ${({ theme }) => theme.colors.active};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  padding: ${({ theme }) => theme.spacing.single};
`;

export const PriceContainer = styled.View`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  padding-top: ${({ theme }) => theme.spacing.double};
`;
