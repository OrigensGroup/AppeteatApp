import styled from 'styled-components/native';

export const NotificationsContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  height: 100%;
  padding: 0 ${({ theme }) => theme.spacing.multiple(3)} 0 0;
`;
