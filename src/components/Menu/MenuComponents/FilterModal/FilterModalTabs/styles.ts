import styled from 'styled-components/native';

export const FilterTabsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: ${({ theme }) => theme.spacing.multiple(3)};
`;