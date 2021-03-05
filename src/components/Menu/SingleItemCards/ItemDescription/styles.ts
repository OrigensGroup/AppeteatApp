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

  margin-top: ${({ theme }) => theme.spacing.double};
`;
