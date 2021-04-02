import styled from 'styled-components/native';

export const OrderInfoContainer = styled.View`
  display: flex;
  align-items: center;
`;

export const OrderInfoText = styled.View`
  margin-top: ${({ theme }) => theme.spacing.multiple(5)};
`;

export const OrderInfoNumber = styled.View`
  margin-top: ${({ theme }) => theme.spacing.double};
`;

export const OrderInfoArrival = styled.View`
  margin-top: ${({ theme }) => theme.spacing.triple};
`;
