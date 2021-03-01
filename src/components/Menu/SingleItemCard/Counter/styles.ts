import styled from 'styled-components/native';

export const MainCoutnerWrapper = styled.View`
display: flex;
width: 35%;
align-items: center;
justify-content: center;
`;

export const CounterWrapper = styled.View`
  display: flex;
  background-color: ${({ theme }) => theme.colors.textSecondary};
  height: ${({ theme }) => theme.spacing.multiple(7)};
  border-radius: ${({ theme }) => theme.spacing.single};
  flex-direction: row;
  justify-content: space-between;
  margin-right: ${({ theme }) => theme.spacing.multiple(2)};
`;

export const InfoWrapper = styled.View`
  display: flex;
  flex-direction: row;
  padding-left: ${({ theme }) => theme.spacing.multiple(1)};
  padding-right: ${({ theme }) => theme.spacing.multiple(1)};
  align-items: center;
  justify-content: space-between;
`;

export const QuantityWrapper = styled.View`
  display: flex;
  border-radius: ${({ theme }) => theme.spacing.single};
  align-items: center;
`;

export const ButtonWrapper = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  padding-left: ${({ theme }) => theme.spacing.multiple(1)};
  padding-right: ${({ theme }) => theme.spacing.multiple(1)};
`;

export const ModalCounterContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.multiple(2)} 0;
`;

export const ModalCounterWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.spacing.multiple(10)};
`;
