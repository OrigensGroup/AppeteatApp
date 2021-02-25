import styled from 'styled-components/native';

export const SearchFieldContainer = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  width: 100%;
  height: ${({ theme }) => theme.spacing.multiple(5)};
  border-radius: ${({ theme }) => theme.spacing.double};

  border-width: 1px;
  background-color: ${({ theme }) => theme.colors.textSecondary};
`;
