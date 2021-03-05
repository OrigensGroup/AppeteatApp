import styled from 'styled-components/native';

export const AddToBasketButtonWrapper = styled.View`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.triple};
  left: 0;
  right: 0;
  width: 100%;
  flex-direction: row;
  padding: 0 ${({ theme }) => theme.spacing.triple};
`;

export const QuantityButton = styled.View`
  flex: 1;
  margin-right: ${({ theme }) => theme.spacing.triple};
`;

export const ViewCtaButton = styled.View`
  flex: 2;
`;
