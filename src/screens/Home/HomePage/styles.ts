import styled from 'styled-components/native';

export const HomeContainer = styled.View`
  display: flex;
  justify-content: center;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.textSecondary};
`;

export const HomeLogoContainer = styled.View`
  height: ${({ theme }) => theme.spacing.multiple(10)};
`;

export const LogoImage = styled.Image`
  width: ${({ theme }) => theme.spacing.multiple(15)};
  height: ${({ theme }) => theme.spacing.multiple(15)};
  resize-mode: contain;
`;

export const HomeSection = styled.View`
  margin: ${({ theme }) => theme.spacing.multiple(3)};
`;

export const MarketingSection = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const ReservationContainer = styled.View`
  padding-right: ${({ theme }) => theme.spacing.single};
  width: 50%;
`;

export const LocationContainer = styled.View`
  padding-left: ${({ theme }) => theme.spacing.single};
  width: 50%;
`;
