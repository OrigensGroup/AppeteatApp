import styled from 'styled-components/native';

export const ItemDescriptionContainer = styled.View`
  padding: 0 ${({ theme }) => theme.spacing.triple};
`;

export const ItemDescriptionTitle = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ItemDescriptionDesc = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing.triple};
`;

export const PriceSection = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const ItemDescriptionTitleText = styled.View`
  flex: 5;
`;
