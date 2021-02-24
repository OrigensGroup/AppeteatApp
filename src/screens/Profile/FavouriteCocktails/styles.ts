import styled from 'styled-components/native';

export const FavouriteCocktailsContainer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.textSecondary};
  height: 100%;
`;

export const Container = styled.ScrollView`
margin:  ${({ theme }) => theme.spacing.single};
`
