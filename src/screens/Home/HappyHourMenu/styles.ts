import styled from 'styled-components/native';

export const HappyHourMenuContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  height: 100%;
  width: 100%;
`;

export const HappyHourMenuHeader = styled.View`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  margin: 0 ${({ theme }) => theme.spacing.multiple(3)};
  padding-bottom: ${({ theme }) => theme.spacing.multiple(3)};
  margin-top: ${({ theme }) => theme.spacing.multiple(8)};
`;

export const HappyHourMenuSection = styled.View`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

export const HappyHourMenuItemsContainer = styled.View`
  height: 100%;
  padding: 0 ${({ theme }) => theme.spacing.multiple(3)};
`;
