import styled from 'styled-components/native';

export const FavouriteCocktailsContainer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  height: 100%;
  padding-top: ${({ theme }) => theme.spacing.single};
`;
