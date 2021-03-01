import styled from 'styled-components/native';

export const HomepageContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.textSecondary};
  height: 100%;
`;

export const MapContainer = styled.TouchableOpacity`
  width: 100%;
  height: ${({ theme }) => theme.spacing.multiple(17)};
  border-width: 1px;
  background-color: #fff;
  border-radius: ${({ theme }) => theme.spacing.double};
  border-color: transparent;
  border-bottom-width: 0;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const HomeContainer = styled.View`
  display: flex;
  justify-content: center;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.textSecondary};
`;

export const HomeLogoContainer = styled.View`
  height: ${({ theme }) => theme.spacing.multiple(10)};
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
`;

export const HomeLogoImage = styled.Image`
  width: ${({ theme }) => theme.spacing.multiple(15)};
  height: ${({ theme }) => theme.spacing.multiple(15)};
  resize-mode: contain;

  padding-bottom: ${({ theme }) => theme.spacing.single};
`;

export const HomeSection = styled.View`
  margin: ${({ theme }) => theme.spacing.multiple(3)};
`;

export const FindButton = styled.View`
  background-color: #c2c2c2;
  border-radius: ${({ theme }) => theme.spacing.multiple(3)};
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.double};
  left: ${({ theme }) => theme.spacing.double};
  padding: ${({ theme }) => theme.spacing.half};
`;

export const BottomContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.single} ${({ theme }) => theme.spacing.double};
`;
