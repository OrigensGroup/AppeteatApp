import styled from "styled-components/native";

export const HomepageContainer = styled.View`
  background-color: #fff;
  height: 100%;
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
  margin: 0 auto;
`;
export const HomepageTitle = styled.Text`
  color: black;
  font-size: 20px;
  margin-bottom: ${({ theme }) => theme.spacing.double};
`;
export const CocktailContainer = styled.View`
  padding: ${({ theme }) => theme.spacing.multiple(3)};
`;
