import styled from 'styled-components/native';

export const ItemSummaryContainer = styled.View`
  flex: 1;
`;

export const CartTitleContainer = styled.View`
  margin: ${({ theme }) => theme.spacing.double};
`;

export const DeleteButton = styled.TouchableOpacity`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.activeRed};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  align-items: flex-end;
  justify-content: center;
  padding-right: ${({ theme }) => theme.spacing.triple};
`;
