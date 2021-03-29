import styled from 'styled-components/native';

export const TotalSectionContainer = styled.View`
  display: flex;
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.single} 0;
`;

export const TotalRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 ${({ theme }) => theme.spacing.double};
  height: ${({ theme }) => theme.spacing.multiple(5)};
`;
