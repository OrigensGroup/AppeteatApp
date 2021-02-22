import styled from 'styled-components/native';

export const HomepageContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.textSecondary};
  height: 100%;
  display: flex;
  justify-content: center;
`;
export const LogoContainer = styled.View`
  height: ${({ theme }) => theme.spacing.multiple(10)};
`;
export const LogoImage = styled.Image`
  width: ${({ theme }) => theme.spacing.multiple(15)};
  height: ${({ theme }) => theme.spacing.multiple(15)};
  resize-mode: contain;
`;

export const PromotionContainer = styled.View`
  margin: 0 ${({ theme }) => theme.spacing.multiple(3)};
`;
export const HomepageTitle = styled.Text`
  color: black;
  font-size: 20px;
  margin: ${({ theme }) => theme.spacing.multiple(3)} ${({ theme }) => theme.spacing.multiple(3)} 0
    ${({ theme }) => theme.spacing.multiple(3)};
`;
export const CocktailContainer = styled.ScrollView``;

export const CocktailSection = styled.View`
  margin: ${({ theme }) => theme.spacing.multiple(3)} 0 ${({ theme }) => theme.spacing.multiple(3)}
    ${({ theme }) => theme.spacing.multiple(3)};
`;

export const BottomContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.single} ${({ theme }) => theme.spacing.multiple(3)};
`;
export const ReservationContainer = styled.View`
  width: 50%;
  padding-right: ${({ theme }) => theme.spacing.single};
`;
export const LocationContainer = styled.View`
  width: 50%;
  padding-left: ${({ theme }) => theme.spacing.single};
`;