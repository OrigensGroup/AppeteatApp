import styled from 'styled-components/native';

export const FavouriteCocktailsContainer = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  height: 100%;
  padding-top: ${({ theme }) => theme.spacing.single};
`;

export const FavouriteCocktailsList = styled.View`
  flex: 1;
  padding-top: ${({ theme }) => theme.spacing.double};
`;
