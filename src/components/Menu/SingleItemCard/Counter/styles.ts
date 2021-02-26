import styled from 'styled-components/native';

export const MainCoutnerWrapper = styled.View`
width: 35%;
align-items: center;
justify-content: center;
`;

export const CounterWrapper = styled.View`
  background-color: #f1f1f1;
  height: ${({ theme }) => theme.spacing.multiple(7)};
  border-radius: ${({ theme }) => theme.spacing.single};
  flex-direction: row;
  justify-content: space-between;
  margin-right: ${({ theme }) => theme.spacing.multiple(2)};
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
  padding-left: ${({ theme }) => theme.spacing.multiple(1)};
  padding-right: ${({ theme }) => theme.spacing.multiple(1)};
`;

export const ModalCounterContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.multiple(2)} 0;
`;

export const ModalCounterWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.spacing.multiple(10)};
`;
