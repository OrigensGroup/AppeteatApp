import styled from 'styled-components/native';

export const HappyHourMenuContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  height: 100%;
  width: 100%;
`;

export const HappyHourMenuHeader = styled.View`
  margin: 0 ${({ theme }) => theme.spacing.multiple(3)};
  padding-top: ${({ theme }) => theme.spacing.multiple(2)};
`;

export const HappyHourMenuSection = styled.View`
  padding-top: ${({ theme }) => theme.spacing.multiple(3)};
`;

export const HappyHourMenuItemsContainer = styled.View`
  height: 100%;
  padding: 0 ${({ theme }) => theme.spacing.multiple(3)};
`;

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;
