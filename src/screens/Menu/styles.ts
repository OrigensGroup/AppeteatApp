import styled from "styled-components/native";


export const MenuWrapper = styled.View`
  background-color: #fff;
  height: 100%;
  width: 100%;
`;

export const MenuContainer = styled.View`
  margin: 0 auto;
  background-color: #fff;
  height: 100%;
`;

export const TopBarWrapper = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const LogoContainer = styled.View`
  height: ${({ theme }) => theme.spacing.multiple(10)};

`;
export const LogoImage = styled.Image`
  margin-top: ${({ theme }) => theme.spacing.single};
  width: ${({ theme }) => theme.spacing.multiple(10)};
  height: ${({ theme }) => theme.spacing.multiple(5)};
  resize-mode: contain;
`;

export const CardsContainer = styled.ScrollView`

`;

export const SearchBarWrapper = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const HomepageTitle = styled.Text`
  color: black;
  font-size: 20px;
  margin-bottom: ${({ theme }) => theme.spacing.double};
`;
export const CocktailContainer = styled.View`
  padding: ${({ theme }) => theme.spacing.multiple(3)};
`;

