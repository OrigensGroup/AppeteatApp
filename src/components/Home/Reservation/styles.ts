import styled from 'styled-components/native';

export const ReservationContainer = styled.TouchableOpacity`
  width: 100%;
  height: ${({ theme }) => theme.spacing.multiple(16)};
  border-width: 1px;
  background-color: ${({ theme }) => theme.colors.textSecondary};
  border-radius: ${({ theme }) => theme.spacing.double};
  border-bottom-width: 0;
  justify-content: center;
  align-items: center;
`;

export const ReservationTitle = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.half};
`;

export const ReservationWrap = styled.View``;
