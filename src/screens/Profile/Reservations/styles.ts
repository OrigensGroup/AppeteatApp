import styled from 'styled-components/native';

export const ReservationsContainer = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  height: 100%;
`;

export const ReservationsList = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.triple} ${({ theme }) => theme.spacing.double};
`;
