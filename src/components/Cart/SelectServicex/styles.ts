import styled from 'styled-components/native';

export const ServiceSelectionContainer = styled.View`
  height: 100%;
`;
export const TextContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: ${({ theme }) => theme.spacing.double} 0;
`;
export const Line = styled.View`
  flex: 1;
  border-color: ${({ theme }) => theme.colors.textPrimary};
  border-bottom-width: 1px;
  margin: 0 ${({ theme }) => theme.spacing.double};
`;

export const PaymentButtonContainer = styled.View`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.single};
`;
export const ServiceSelector = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 ${({ theme }) => theme.spacing.multiple(5)};
`;
