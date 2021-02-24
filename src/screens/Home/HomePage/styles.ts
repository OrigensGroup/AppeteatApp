import styled from 'styled-components/native';

export const HomepageContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.textSecondary};
  height: 100%;
`;
export const LogoContainer = styled.View`
  height: ${({ theme }) => theme.spacing.multiple(10)};
  border-bottom-width: 0.5px;
  border-color: #000;
`;
export const LogoImage = styled.Image`
  width: ${({ theme }) => theme.spacing.multiple(15)};
  height: ${({ theme }) => theme.spacing.multiple(10)};
  resize-mode: contain;
`;

export const PromotionContainer = styled.View``;
export const HomepageTitle = styled.View`
  margin-left: ${({ theme }) => theme.spacing.half};
`;
export const CocktailContainer = styled.ScrollView``;

export const CocktailSection = styled.View`
  margin: ${({ theme }) => theme.spacing.double} 0 ${({ theme }) => theme.spacing.double}
    ${({ theme }) => theme.spacing.double};
`;

export const BottomContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.single} ${({ theme }) => theme.spacing.double};
`;
export const ReservationContainer = styled.View`
  width: 50%;
  padding-right: ${({ theme }) => theme.spacing.single};
`;
export const LocationContainer = styled.View`
  width: 50%;
  padding-left: ${({ theme }) => theme.spacing.single};
`;
export const MapContainer = styled.TouchableOpacity`
  width: 100%;
  height: ${({ theme }) => theme.spacing.multiple(17)}};
  border-width: 1px;
  background-color: #fff;
  border-radius: ${({ theme }) => theme.spacing.double};
  border-color: transparent;
  border-bottom-width: 0;
  justify-content: center;
  align-items: center;
  shadow-color: #000;
  shadow-opacity: 0.8;
  shadow-radius: 2px;
  overflow: hidden;
`;

