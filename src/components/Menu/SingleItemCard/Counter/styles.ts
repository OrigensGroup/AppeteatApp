import styled from 'styled-components/native';

export const CounterWrapper = styled.View`
  background-color: #F1F1F1;
  width: 25%;
  height: ${({ theme }) => theme.spacing.multiple(7)};
  border-radius: ${({ theme }) => theme.spacing.single};
  flex-direction: row;
  justify-content: space-between;
`;

export const InfoWrapper = styled.View`
flex-direction: row;
padding-left: ${({ theme }) => theme.spacing.multiple(1)};
padding-right: ${({ theme }) => theme.spacing.multiple(1)};
align-items: center;
justify-content: space-between;
`;

export const QuantityWrapper = styled.View`
  border-radius: ${({ theme }) => theme.spacing.single};
  align-items: center;
`;

export const ButtonWrapper = styled.TouchableOpacity`
align-items: center;
`;



