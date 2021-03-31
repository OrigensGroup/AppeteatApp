import styled from 'styled-components/native';

export const AddToBasketButtonWrapper = styled.View`
  position: absolute;
  bottom: ${({ theme }) => (theme.os === 'ios' ? theme.spacing.triple : theme.spacing.double)};
  left: 0;
  right: 0;
  width: 100%;
  flex-direction: row;
  padding: ${({ theme }) => theme.spacing.single} ${({ theme }) => theme.spacing.triple};
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