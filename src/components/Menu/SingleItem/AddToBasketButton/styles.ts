import styled from 'styled-components/native';

export const AddToBasketButtonWrapper = styled.View`
  bottom: ${({ theme }) => (theme.os === 'ios' ? theme.spacing.half : theme.spacing.double)};
  left: 0;
  right: 0;
  width: 100%;
  flex-direction: row;
  padding: 0 ${({ theme }) => theme.spacing.triple};
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  padding-top: ${({ theme }) => theme.spacing.double};
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  z-index: 99;
`;

export const QuantityButton = styled.View`
  flex: 1;
  margin-right: ${({ theme }) => theme.spacing.triple};
`;

export const ViewCtaButton = styled.View`
  flex: 2;
`;
