import styled from 'styled-components/native';

export const HappyHourMenuContainer = styled.View`
  background-color: #fff;
  height: 100%;
  width: 100%;
`;

export const HappyHourMenuHeader = styled.View`
  background-color: #fff;
  margin: 0 ${({ theme }) => theme.spacing.multiple(3)};
  margin-bottom: ${({ theme }) => theme.spacing.multiple(3)};
  margin-top: ${({ theme }) => theme.spacing.multiple(8)};
`;

export const HappyHourMenuSection = styled.View`
  background-color: transparent;
`;

export const HappyHourMenuItemsContainer = styled.View`
  height: 100%;
`;
