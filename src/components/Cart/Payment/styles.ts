import styled from 'styled-components/native';

export const PaymentOptionContainer = styled.View`
  height: 100%;
  margin: 0 ${({ theme }) => theme.spacing.double};
`;
export const PaymentList = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const PaymentButtonContainer = styled.View`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.double};
`;
export const PaymentMethodsContainer = styled.View``;

export const TextContainer = styled.View`
  margin-bottom: ${({ theme }) => theme.spacing.multiple(3)};
`;

export const HideCard = styled.View`
  width: ${({ theme }) => theme.spacing.double};
`;
