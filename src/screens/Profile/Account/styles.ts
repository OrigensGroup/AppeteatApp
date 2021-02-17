import styled from "styled-components/native";

export const ProfileContainer = styled.View``;
export const NavigationContainer = styled.View`
  width: 100%;
`;
export const CardWrap = styled.View`
  margin: ${({ theme }) => theme.spacing.single} 0
    ${({ theme }) => theme.spacing.double}
    ${({ theme }) => theme.spacing.double};
`;
export const ImageContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #f0eff3;
  padding: ${({ theme }) => theme.spacing.multiple(3)};
`;
export const CocktailContainer = styled.ScrollView``;
export const TitleWrap = styled.View`
  margin: 0 ${({ theme }) => theme.spacing.single};
`;
