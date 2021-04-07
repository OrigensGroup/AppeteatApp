import styled from 'styled-components/native';

export const ItemSummaryContainer = styled.View`
  flex: 1;
  padding-top: ${({ theme }) => theme.spacing.triple};
`;

export const CartTitleContainer = styled.View`
  margin-top: ${({ theme }) => theme.spacing.double};
`;

export const DeleteButton = styled.TouchableOpacity`
  position: absolute;
  height: ${({ theme }) => theme.spacing.multiple(15)};
  background-color: ${({ theme }) => theme.colors.actionRed};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  align-items: flex-end;
  justify-content: center;
  padding-right: ${({ theme }) => theme.spacing.triple};
`;
