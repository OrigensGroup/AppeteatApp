import styled from 'styled-components/native';

export const ReservationsContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.textSecondary};
  height: 100%;
`;
export const ReservationsWrap = styled.View`
  margin: ${({ theme }) => theme.spacing.single} ${({ theme }) => theme.spacing.multiple(3)};
`;
