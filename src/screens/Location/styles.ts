import styled from 'styled-components/native';

export const LocationPageContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.textSecondary};
  height: 100%;
`;
export const SearchBarWrapper = styled.View`
  margin-top: ${({ theme }) => theme.spacing.multiple(3)};
  justify-content: center;
  align-items: center;
`;
