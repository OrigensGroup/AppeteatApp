import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: ${({ theme }) => theme.spacing.multiple(15)};
  border-width: 1px;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  border-radius: ${({ theme }) => theme.spacing.multiple(3)};
  border-color: ${({ theme }) => theme.colors.border}; ;
`;
export const ReservationCardContainer = styled.View`
  padding: ${({ theme }) => theme.spacing.single};
`;
export const VenueName = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.single};
`;
export const TextContainer = styled.View`
  height: ${({ theme }) => theme.spacing.double};
  margin-left: ${({ theme }) => theme.spacing.single};
  align-items: center;
`;
export const Circle = styled.View`
  height: ${({ theme }) => theme.spacing.double};
  width: ${({ theme }) => theme.spacing.double};
  border-radius: ${({ theme }) => theme.spacing.single};
  background-color: ${({ theme }) => theme.colors.active};
  margin: ${({ theme }) => theme.spacing.single} 0 0 ${({ theme }) => theme.spacing.double};
`;
export const VenueDesc = styled.View`
  padding: ${({ theme }) => theme.spacing.half} ${({ theme }) => theme.spacing.double} 0
    ${({ theme }) => theme.spacing.multiple(5)};
`;
export const BottomContainer = styled.View`
  margin: ${({ theme }) => theme.spacing.single} ${({ theme }) => theme.spacing.double} 0
    ${({ theme }) => theme.spacing.multiple(5)};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
