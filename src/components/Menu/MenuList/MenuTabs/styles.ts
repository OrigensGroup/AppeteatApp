import styled from 'styled-components/native';

export const MenuTabsContainer = styled.View`
  width: 100%;
  padding-top: ${({ theme }) => theme.spacing.double};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
`;
